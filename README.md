# 개발요청 받는 곳

이 브랜치(`dev-requests`)는 **WE-ADP Builder 가 씁니다.** 손으로 고치지 마십시오 — 넘길 때마다 다시 씁니다.

## 1. 무엇이 나와 있나 — `deliveries.json`

줄 하나가 개발요청서 하나입니다.

| 칸 | 뜻 |
|---|---|
| `project` | 빌더 프로젝트 ID. 한 기획 저장소를 여러 프로젝트가 쓰면 이것으로 가립니다 |
| `dr` | 개발요청서 번호. 프로젝트마다 1번부터라 `project` 와 짝으로만 하나입니다 |
| `branch` | 꾸러미가 든 브랜치 — `dr/<project>/<dr>` |
| `commit` | 꾸러미 커밋 |
| `base` | 기본 브랜치에서 갈라 올 기준 커밋 |
| `system` · `screens` | 대상 시스템과 화면 |
| `sentAt` · `sendKey` | 보낸 시각과 전송 키. 다시 보내도 키는 같습니다 |

같은 `project` · `dr` 을 다시 보내면 그 줄이 새것으로 바뀝니다.

## 2. 무엇을 하나

1. `branch` 를 받아 `<dr>/dev-request.md`(무엇을 만드나)와 `<dr>/expected-back.md`(무엇을 돌려주나)를 엽니다.
2. 돌려보내는 법은 `expected-back.md` 의 「돌려보내는 법」에 **그 요청의 값으로** 적혀 있습니다. 이 문서가 아니라 그쪽을 따르십시오.
3. 돌려보낼 브랜치는 `feedback/<project>/<dr>` 꼴입니다.
