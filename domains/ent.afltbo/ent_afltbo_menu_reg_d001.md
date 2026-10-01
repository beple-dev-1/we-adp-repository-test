# 구내식당 메뉴 삭제 (ent_afltbo_menu_reg_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-10-S | 메뉴 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_SEQ

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 구내식당 메뉴 상세 삭제 (TB_CAFETERIA_MENU_DTL_D002)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_DTL
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 이미지 삭제 (TB_CAFETERIA_MENU_IMG_D001)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 삭제 (TB_CAFETERIA_MENU_NUTR_D002)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_NUTR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 삭제 (TB_CAFETERIA_MENU_D002)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_d001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_D002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_D002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_D002.xml:10
