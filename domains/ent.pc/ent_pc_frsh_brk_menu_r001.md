# PC_다과신청 업체 조회 (ent_pc_frsh_brk_menu_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-50-S | 다과 예약 신청 (list) | 화면 |

## 입력

- (없음)

## 출력

- REC
- MSG
- 코드 (CODE)

## 데이터 처리

### 다과신청 업체 조회 (TB_ENT_FRSH_BRK_CORP_R001)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_menu_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_menu_r001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_R001.xml:10
