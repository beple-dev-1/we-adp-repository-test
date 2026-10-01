# PC_다과관리 메모 조회 (ent_pc_frsh_brk_memo_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-20-S | 다과 신청 내역 (list) | 화면 |
| HIT-MLPC-50-S | 다과 예약 신청 (list) | 화면 |

## 입력

- FRSH_BRK_SEQ

## 출력

- 코드 (CODE)
- MSG
- REC

## 데이터 처리

### 다과 메모 내역 조회 (TB_ENT_FRSH_BRK_MEMO_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_ENT_FRSH_BRK_MEMO
- 입력: FRSH_BRK_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_memo_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_memo_r001_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R001.xml:10
