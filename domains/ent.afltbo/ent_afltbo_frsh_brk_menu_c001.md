# 다과주문관리 메뉴 추가 (ent_afltbo_frsh_brk_menu_c001)

- 처리: 쓰기
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
- ORDER_BY

## 출력

- (없음)

## 데이터 처리

### 다과주문관리 메뉴 추가 (TB_ENT_FRSH_BRK_CORP_MENU_C001)

- 종류: INSERT
- 테이블: TB_ENT_FRSH_BRK_CORP_MENU
- 입력: CORP_SEQ, MENU_ID, MENU_NM, MENU_AMT, PACKAGE_YN, USE_YN, REG_USER, CATG_SEQ, MENU_INFO, ORDER_BY

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_c001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_C001.xml:10
