# 다과주문관리 메뉴 수정/순서변경 (ent_afltbo_frsh_brk_menu_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-20-20-S | 메뉴 | 화면 |

## 입력

- MENU_NM
- MENU_AMT
- PACKAGE_YN
- USE_YN
- CATG_SEQ
- MENU_INFO
- 직원상태 (STATUS)
- ORDER_BY
- REC
- MENU_ID

## 출력

- (없음)

## 데이터 처리

### 다과주문관리 메뉴 수정/순서변경 (TB_ENT_FRSH_BRK_CORP_MENU_U001)

- 종류: UPDATE
- 테이블: TB_ENT_FRSH_BRK_CORP_MENU
- 입력: MENU_NM, MENU_AMT, PACKAGE_YN, USE_YN, UPD_USER, CATG_SEQ, MENU_INFO, CORP_SEQ, MENU_ID

### 다과주문관리 메뉴 (TB_ENT_FRSH_BRK_CORP_MENU_R001)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP_MENU
- 입력: CORP_SEQ, 직원상태 (STATUS), 직원상태 (STATUS), CATG_SEQ, CATG_SEQ

### 다과주문관리 메뉴 수정/순서변경 (TB_ENT_FRSH_BRK_CORP_MENU_U002)

- 종류: UPDATE
- 테이블: TB_ENT_FRSH_BRK_CORP_MENU
- 입력: 직원상태 (STATUS), ORDER_BY, UPD_USER, CORP_SEQ, MENU_ID

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_u001_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_U002.xml:10
