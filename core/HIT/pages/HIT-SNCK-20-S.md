--- 꼬리표 ---
id: HIT-SNCK-20-S / system: HIT / 기능: 힛플러스 > 다과신청관리 > 메모 / 과업: []

--- 화면명세 ---
화면명: 메모
목적: 메모 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 다과 메모 등록 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_MEMO, TB_MEMBER / 입력: FRSH_BRK_SEQ, MEMO_SEQ, MEMO_TYPE, 내용, 회원코드, ADM_USER, ADM_USER_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_memo_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_memo_c001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_C002.xml:10
- 요소: 화면 / 업무: 다과관리 메모 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_ENT_FRSH_BRK_MEMO / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_memo_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_memo_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 메모 전송 / 앵커: HIT-SNCK-20-S-e04 / 해설: 메모 전송
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-SNCK-20-S-e05 / 해설: 뒤로가기
- 구분: 항목 / 좌표: id=ctnt / 라벨: 메모를 남겨주세요(최대 1,000글자) / 앵커: HIT-SNCK-20-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_frsh_brk_memo_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
