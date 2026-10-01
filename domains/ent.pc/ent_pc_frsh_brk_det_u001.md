# 다과 신청 상태 변경 (ent_pc_frsh_brk_det_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-50-S | 다과 예약 신청 (list) | 화면 |

## 입력

- 처리상태 (PROC_ST)
- 회원코드 (MEMB_CD)
- FRSH_BRK_SEQ

## 출력

- MSG
- 코드 (CODE)

## 데이터 처리

### 다과신청 상태변경 (TB_ENT_FRSH_BRK_U001)

- 종류: UPDATE
- 테이블: TB_ENT_FRSH_BRK
- 입력: 처리상태 (PROC_ST), 회원코드 (MEMB_CD), FRSH_BRK_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_det_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_det_u001_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U001.xml:10
