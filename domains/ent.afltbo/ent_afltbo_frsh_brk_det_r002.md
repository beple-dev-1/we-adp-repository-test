# 다과주문관리 상세 메모 조회 (ent_afltbo_frsh_brk_det_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-10-10-S | 다과 신청 내역 | 화면 |

## 입력

- FRSH_BRK_SEQ

## 출력

- REC
- 코드 (CODE)
- MSG

## 데이터 처리

### 다과 메모 내역 조회 (TB_ENT_FRSH_BRK_MEMO_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_ENT_FRSH_BRK_MEMO
- 입력: FRSH_BRK_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_r002_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R001.xml:10
