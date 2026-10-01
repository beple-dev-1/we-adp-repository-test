// 기획 저장소 색인(index.json)을 다시 세운다 — **색인을 만드는 코드는 이것 한 벌이다** (054 지시서 2-3b)
//
//   node verify/reindex.mjs <저장소 뿌리>
//
// 부르는 쪽이 둘이다 — 추출기 run.py(page2md 뒤) · Builder IaPublisher.reindexWhenAvailable(IA 게시 · FRD 커밋).
// ⛔ node 내장 모듈만 쓴다. Builder 는 npm install 없이 부르고 운영 이미지에는 python 이 없다.
// ⛔ python 사본을 두지 마라 — 두 벌이면 갈린다. 추출기도 색인은 이것으로만 만든다.
// ⛔ 이 파일은 추출기 저장소 `verify/reindex.mjs` 가 원본이다. 기획 저장소 것은 run.py 가 복사한 사본이다.
//
// 입력  manifest.json · core/<SYS>/ia.md(`## 이름표` + `--- 배치 ---`) · core/<SYS>/pages/*.md(꼬리표 · IA · 정의)
// 출력  index.json 한 장 — 최상위 칸 순서 index · screens · iaShared · facetIndex · variantIndex (그 밖 칸은 뒤에 그대로)
//       들여쓰기 2 · 한글 그대로 · 끝 줄바꿈 LF. 같은 입력이면 같은 바이트다.
// 실패  읽을 수 없는 줄 · 중복 키 · 배치 규칙 어긋남 → stderr 한 줄 + exit 1. 조용히 건너뛰지 않는다.
//
// 화면 항목 = { system, ia: { 종류, 화면유형, 유형근거?, 경로?, 상위화면?, 여는화면? } } — ⛔ ia 칸 순서를 바꾸지 마라.
//   순서는 SolutionScreenReader.load() 가 읽는 차례와 같다. 없는 칸은 싣지 않는다(빈 값 = 칸 없음과 같게 읽힌다).
//   종류      md `--- IA ---` 의 `- 종류:` · md 가 없거나 칸이 없으면 화면
//   화면유형  이름표 이름이 한 갈래로만 읽힐 때 그 갈래 + 유형근거 「이름」. 아니면 미분류 · 유형근거 없음
//   경로      배치 행의 경로 — 끝에 붙은 화면ID 마디는 뗀다(Builder 게시판은 화면ID 를 마디로 싣는다)
//   상위화면  md `상위화면:` 이 이긴다. 없으면 배치 트리에서 가장 가까운 **화면** 조상(메뉴 행 아님).
//             ⚠ 팝업 · 모달은 배치에서 물려받지 않는다 — Builder 규칙이 「상위화면이 아니라 여는화면」이다
//   여는화면  팝업 · 모달만 · 늘 싣는다(빈 배열이라도). 같은 시스템 md 의 정의 행 `이동:`·`이동modal:` 이 가리키는 쪽
//
// 시스템별 갈래
//   ia.md 에 `--- 배치 ---` 가 있다    → 위 규칙으로 새로 세운다. 배치 행 순서 → 배치에 없는 md(화면ID 순).
//   ia.md 가 없거나 배치가 없다        → **지금 index.json 의 그 시스템 항목을 값 · 순서 그대로 싣는다** + 알림 한 줄.
//                                         (추출기가 아직 안 돈 시스템을 비우지 않으려는 것이다)
//   배치에 있는데 md 가 없다           → 실패가 아니다. 「md 없음」 — 항목은 남고 종류는 화면이다.
//   md 가 있는데 배치 · 색인 어디에도 없다 → `--- IA ---` 블록이 있으면 싣는다(FRD 로 만든 하위 화면 · 팝업).
//                                         블록도 없으면 자리를 모르는 화면이라 실패한다.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const KINDS = ['화면', '팝업', '모달'];
// Builder IaDocumentCodec.PATH 와 같다 — 1~7마디.
const PATH = /^[A-Za-z0-9_-]+(\/[A-Za-z0-9_-]+){0,6}$/;
const SCREEN_ID = /^[A-Za-z0-9_-]+$/;
// 이름 → 화면유형. 갈래가 하나만 걸릴 때만 쓴다(둘 이상 걸리면 미분류). 낱말은 좁게 둔다 — 틀린 유형은 표준화면ID 글자를 바꾼다.
// 글자는 StandardScreenIdFormat.letterOf 의 목록 L · 상세 D · 등록 R · 수정 U · 안내 G 다.
const TYPE_WORDS = [
  ['목록', ['목록', '리스트', '내역']],
  ['상세', ['상세']],
  ['등록', ['등록', '신청']],
  ['수정', ['수정', '변경', '재설정']],
  ['안내', ['안내', '완료']],
];

class Broken extends Error {}
function broken(msg) { throw new Broken(msg); }

function read(path) { return readFileSync(path, 'utf8').replace(/^﻿/, ''); }
function lines(text) { return text.split(/\r?\n/); }

// `a: 1 / b: 2` → Map. untilLast 가 있으면 그 칸부터 줄 끝까지 한 칸이다(해설은 마지막 칸 · FeatureSpecDocument).
function fields(record, untilLast) {
  const got = new Map();
  const parts = record.split(' / ');
  for (let i = 0; i < parts.length; i++) {
    const colon = parts[i].indexOf(':');
    if (colon <= 0) continue;
    const key = parts[i].slice(0, colon).trim();
    if (key === untilLast) {
      got.set(key, parts.slice(i).join(' / ').slice(colon + 1).trim());
      break;
    }
    got.set(key, parts[i].slice(colon + 1).trim());
  }
  return got;
}

// ── ia.md ────────────────────────────────────────────────────────────────
// IaDocumentCodec.parse 와 같게 읽는다. 배치 행 = 경로나 화면 칸이 있는 `- ` 줄. 둘 다 없으면 산문이다.
function readIa(path, code) {
  const labels = new Map();
  const rows = [];
  let section = null, placement = false;
  lines(read(path)).forEach((raw, n) => {
    const line = raw.trim();
    const where = `core/${code}/ia.md:${n + 1}`;
    if (line === '## 이름표') { section = 'labels'; return; }
    if (line === '--- 배치 ---') { section = 'rows'; placement = true; return; }
    if (line.startsWith('--- ') || line.startsWith('#')) { section = null; return; }
    if (!line.startsWith('- ') || section === null) return;
    if (section === 'labels') {
      const colon = line.indexOf(':', 2);
      if (colon <= 2) broken(`${where} 이름표 줄을 못 읽는다 — ${line}`);
      const key = line.slice(2, colon).trim();
      if (labels.has(key)) broken(`${where} 이름표 열쇠가 두 번 있다 — ${key}`);
      labels.set(key, line.slice(colon + 1).trim());
      return;
    }
    const f = fields(line.slice(2));
    if (!f.has('경로') && !f.has('화면')) return;
    const p = (f.get('경로') || '').trim();
    const screen = (f.get('화면') || '').trim();
    const order = f.get('순서');
    if (!PATH.test(p)) broken(`${where} 배치 경로가 규칙(영문·숫자·-·_ 1~7마디)에 어긋난다 — ${p || '(빈 칸)'}`);
    if (screen && !SCREEN_ID.test(screen)) broken(`${where} 배치 화면ID 를 못 읽는다 — ${screen}`);
    if (order !== undefined && !/^\d{1,4}$/.test(order)) broken(`${where} 배치 순서가 숫자가 아니다 — ${order}`);
    rows.push({ path: p, screen, where });
  });
  return { labels, rows, placement };
}

// ── 화면 md ──────────────────────────────────────────────────────────────
function readMd(path, id, code) {
  const where = `core/${code}/pages/${id}.md`;
  let block = null, tagId = null, name = null, kind = null, parent = null;
  const links = [];
  for (const raw of lines(read(path))) {
    const line = raw.trim();
    const head = /^---\s*(.+?)\s*---$/.exec(line);
    if (head) { block = head[1]; continue; }
    if (tagId === null && /^id\s*:/.test(line)) {
      tagId = fields(line).get('id') || '';
      continue;
    }
    if (name === null && line.startsWith('화면명:')) { name = line.slice(4).trim(); continue; }
    if (!line.startsWith('- ')) continue;
    if (block === 'IA' && kind === null) {
      const f = fields(line.slice(2));
      if (!f.has('종류')) broken(`${where} IA 줄에 종류 칸이 없다 — ${line}`);
      kind = f.get('종류');
      if (!KINDS.includes(kind)) broken(`${where} 종류가 화면·팝업·모달이 아니다 — ${kind}`);
      parent = (f.get('상위화면') || '').trim() || null;
    } else if (block === '정의') {
      const f = fields(line.slice(2), '해설');
      for (const key of ['이동', '이동modal']) {
        const v = (f.get(key) || '').trim();
        if (v) links.push(v.split('.')[0]);     // `ID.eNN` 꼴도 받는다(FrdScreenIaMaterializer.hasIncomingRelation)
      }
    }
  }
  if (tagId !== null && tagId !== id) broken(`${where} 꼬리표 id 가 파일 이름과 다르다 — ${tagId}`);
  return { name, kind, parent, links, hasIa: kind !== null };
}

// ── 도메인 장 — `domains/<폴더>/<act>.md` (058). 없으면 빈 목록 → index 에 칸을 안 만든다(054 판과 바이트 같음).
// 장 머리 `# 업무 이름 (act)` · `## 부르는 화면` 표의 첫 칸(화면ID)만 읽는다. 장 안 나머지는 색인이 모른다.
function domainsOf(root) {
  const base = join(root, 'domains');
  const out = [];
  if (!existsSync(base) || !statSync(base).isDirectory()) return out;
  for (const dir of readdirSync(base).sort()) {
    const dpath = join(base, dir);
    if (!statSync(dpath).isDirectory()) continue;
    for (const f of readdirSync(dpath).sort()) {
      if (!f.endsWith('.md')) continue;
      const lines = read(join(dpath, f)).split(/\r?\n/);
      const head = /^#\s+(.*?)\s+\(([A-Za-z0-9_]+)\)\s*$/.exec(lines[0] || '');
      if (!head) broken(`domains/${dir}/${f} 첫 줄이 「# 업무 이름 (act)」 꼴이 아니다`);
      const screens = [];
      let inTable = false;
      for (const line of lines) {
        if (line.startsWith('## ')) { inTable = line.trim() === '## 부르는 화면'; continue; }
        if (!inTable || !line.startsWith('|')) continue;
        const first = line.split('|')[1].trim();
        if (/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+$/.test(first)) screens.push(first);
      }
      out.push({ id: head[2], file: `domains/${dir}/${f}`, name: head[1], screens });
    }
  }
  return out;
}

function mdsOf(root, code) {
  const dir = join(root, 'core', code, 'pages');
  const got = new Map();
  if (!existsSync(dir) || !statSync(dir).isDirectory()) return got;
  for (const f of readdirSync(dir).sort()) {
    if (!f.endsWith('.md')) continue;
    const id = f.slice(0, -3);
    got.set(id, readMd(join(dir, f), id, code));
  }
  return got;
}

function typeOf(name) {
  if (!name) return null;
  const hit = TYPE_WORDS.filter(([, words]) => words.some(w => name.includes(w))).map(([t]) => t);
  return hit.length === 1 ? hit[0] : null;
}

// ── 한 시스템 세우기 ─────────────────────────────────────────────────────
function build(code, ia, mds) {
  const screenRows = ia.rows.filter(r => r.screen);
  if (screenRows.length === 0) broken(`core/${code}/ia.md 배치에 화면 행이 없다`);
  const byPath = new Map(), ids = new Set();
  for (const r of ia.rows) {
    if (byPath.has(r.path)) broken(`${r.where} 배치 경로가 두 번 있다 — ${r.path}`);
    byPath.set(r.path, r.screen);
    if (r.screen) {
      if (ids.has(r.screen)) broken(`${r.where} 배치에 같은 화면이 두 번 있다 — ${r.screen}`);
      ids.add(r.screen);
    }
  }
  const order = screenRows.map(r => r.screen);
  for (const [id, md] of mds) {
    if (ids.has(id)) continue;
    if (!md.hasIa) broken(`core/${code}/pages/${id}.md 배치에도 없고 IA 블록도 없다 — 자리를 모른다`);
    order.push(id);          // mds 는 파일 이름 순이다
    ids.add(id);
  }

  const rowOf = new Map(screenRows.map(r => [r.screen, r]));
  const kindOf = id => (mds.get(id) && mds.get(id).kind) || '화면';
  // 여는화면 — 같은 시스템 md 의 이동이 가리키는 팝업 · 모달
  const openers = new Map();
  for (const [from, md] of mds) {
    for (const to of md.links) {
      if (to === from || !ids.has(to) || kindOf(to) === '화면') continue;
      if (!openers.has(to)) openers.set(to, new Set());
      openers.get(to).add(from);
    }
  }

  const out = [];
  for (const id of order) {
    const md = mds.get(id);
    const row = rowOf.get(id);
    const kind = kindOf(id);
    let path = null, fromTree = null;
    if (row) {
      const segs = row.path.split('/');
      // Builder 게시판은 화면ID 를 경로 마디로 싣는다(IaTreeBuilder.seatOf) — 끝의 화면ID 마디를 떼어 메뉴 경로로 돌린다
      if (segs[segs.length - 1] === id) segs.pop();
      while (segs.length > 1 && ids.has(segs[segs.length - 1])) {
        if (fromTree === null) fromTree = segs[segs.length - 1];
        segs.pop();
      }
      path = segs.join('/');
      // 배치 트리에서 가장 가까운 화면 조상 — 자기 행보다 짧은 앞머리 중 화면이 앉은 행
      const all = row.path.split('/');
      for (let n = all.length - 1; n >= 1 && fromTree === null; n--) {
        const hit = byPath.get(all.slice(0, n).join('/'));
        if (hit && hit !== id) fromTree = hit;
      }
    }
    let parent = md && md.parent ? md.parent : (kind === '화면' ? fromTree : null);
    if (parent !== null) {
      if (parent === id) broken(`core/${code}/pages/${id}.md 상위화면이 자기 자신이다`);
      if (!ids.has(parent)) broken(`core/${code} ${id} 의 상위화면 ${parent} 가 이 시스템에 없다`);
    }
    const name = (row && (ia.labels.get(row.path) || ia.labels.get(path))) || (md && md.name) || null;
    const type = typeOf(name);

    const entry = { 종류: kind, 화면유형: type || '미분류' };
    if (type) entry.유형근거 = '이름';
    if (path) entry.경로 = path;
    if (parent) entry.상위화면 = parent;
    if (kind !== '화면') entry.여는화면 = [...(openers.get(id) || [])].sort();
    out.push([id, { system: code, ia: entry }]);
  }
  return out;
}

// ── 뿌리 ─────────────────────────────────────────────────────────────────
function main(rootArg) {
  if (!rootArg) broken('쓰는 법 — node verify/reindex.mjs <저장소 뿌리>');
  const root = resolve(rootArg);
  const manifestPath = join(root, 'manifest.json');
  if (!existsSync(manifestPath)) broken(`manifest.json 이 없다 — ${root}`);
  let manifest, old;
  try { manifest = JSON.parse(read(manifestPath)); } catch (e) { broken(`manifest.json 을 못 읽는다 — ${e.message}`); }
  const indexPath = join(root, 'index.json');
  const oldText = existsSync(indexPath) ? read(indexPath) : null;
  try { old = oldText === null ? {} : JSON.parse(oldText); } catch (e) { broken(`index.json 을 못 읽는다 — ${e.message}`); }
  const oldScreens = old.screens && typeof old.screens === 'object' ? old.screens : {};

  const codes = [];
  for (const s of manifest.systems || []) {
    if (!s || typeof s.id !== 'string' || !s.id) broken('manifest.json systems[] 에 id 없는 칸이 있다');
    if (codes.includes(s.id)) broken(`manifest.json 에 시스템이 두 번 있다 — ${s.id}`);
    codes.push(s.id);
  }
  // manifest 에 없는 시스템의 옛 항목도 버리지 않는다 — 뒤에 옛 순서대로 싣는다
  for (const v of Object.values(oldScreens)) {
    if (v && typeof v.system === 'string' && !codes.includes(v.system)) codes.push(v.system);
  }

  const screens = {};
  const owner = new Map();
  const put = (id, value, code) => {
    if (owner.has(id)) broken(`화면ID 가 두 시스템에 있다 — ${id} (${owner.get(id)} · ${code})`);
    owner.set(id, code);
    screens[id] = value;
  };
  const report = [];
  for (const code of codes) {
    const iaPath = join(root, 'core', code, 'ia.md');
    const ia = existsSync(iaPath) ? readIa(iaPath, code) : null;
    const mds = mdsOf(root, code);
    if (ia && ia.placement) {
      const built = build(code, ia, mds);
      for (const [id, v] of built) put(id, v, code);
      const missing = built.filter(([id]) => !mds.has(id)).length;
      report.push(`  ${code} 배치로 세움 — 화면 ${built.length} · md 없음 ${missing}`);
      continue;
    }
    // 배치가 없는 시스템 — 옛 항목을 값 · 순서 그대로 싣는다
    let carried = 0;
    for (const [id, v] of Object.entries(oldScreens)) {
      if (v && v.system === code) { put(id, v, code); carried++; }
    }
    let added = 0;
    for (const [id, md] of mds) {
      if (owner.has(id)) continue;
      if (!md.hasIa) broken(`core/${code}/pages/${id}.md 색인에도 없고 IA 블록도 없다 — 자리를 모른다`);
      const entry = { 종류: md.kind, 화면유형: '미분류' };
      if (md.parent) entry.상위화면 = md.parent;
      if (md.kind !== '화면') entry.여는화면 = [];
      put(id, { system: code, ia: entry }, code);
      added++;
    }
    report.push(`  ${code} 알림 — ia.md 에 배치가 없어 옛 항목 ${carried}장을 그대로 실었다${added ? ` · md 로 더함 ${added}장` : ''}`);
  }

  const next = {
    index: old.index || 'we-adk-index/3',
    screens,
    iaShared: old.iaShared || {},
    facetIndex: old.facetIndex || {},
    variantIndex: old.variantIndex || {},
  };
  const domains = domainsOf(root);
  if (domains.length) next.domains = domains;          // domains/ 는 추출기 소유 — 옛 칸을 이어 싣지 않는다
  for (const [k, v] of Object.entries(old)) if (!(k in next) && k !== 'domains') next[k] = v;
  const text = JSON.stringify(next, null, 2) + '\n';
  const changed = oldText === null || oldText.replace(/\r\n/g, '\n') !== text;
  if (changed) writeFileSync(indexPath, text, 'utf8');
  console.log(`reindex — 화면 ${Object.keys(screens).length} · ${changed ? '바뀜' : '그대로'}`);
  for (const line of report) console.log(line);
}

try {
  main(process.argv[2]);
} catch (e) {
  console.error(e instanceof Broken ? `reindex 실패 — ${e.message}` : `reindex 실패 — ${e.stack.split('\n')[0]}`);
  process.exit(1);
}
