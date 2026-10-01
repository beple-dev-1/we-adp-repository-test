# 다과주문관리 상세_상태변경 (ent_afltbo_frsh_brk_det_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-10-10-S | 다과 신청 내역 | 화면 |

## 입력

- 처리상태 (PROC_ST)
- CONFIRM_AMT
- FRSH_BRK_SEQ

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 다과신청 확정금액 수정 (by FRSH_BRK_SEQ) (TB_ENT_FRSH_BRK_U004)

- 종류: UPDATE
- 테이블: TB_ENT_FRSH_BRK
- 입력: 처리상태 (PROC_ST), CONFIRM_AMT, UPD_USER, FRSH_BRK_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_u001_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U004.xml:10
