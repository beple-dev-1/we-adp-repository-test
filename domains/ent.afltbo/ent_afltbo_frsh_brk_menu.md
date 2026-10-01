# 다과주문관리 메뉴 (ent_afltbo_frsh_brk_menu)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-20-20-S | 메뉴 | 화면 |

## 입력

- 직원상태 (STATUS)
- CATG_SEQ

## 출력

- REC
- REC_CATG

## 데이터 처리

### 다과주문관리 메뉴 (TB_ENT_FRSH_BRK_CORP_MENU_R001)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP_MENU
- 입력: CORP_SEQ, 직원상태 (STATUS), 직원상태 (STATUS), CATG_SEQ, CATG_SEQ

### 다과주문관리 카테고리 (TB_ENT_FRSH_BRK_CORP_CATG_R001)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP_CATG
- 입력: CORP_SEQ, CATG_NM, CATG_NM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_CATG_R001.xml:10
