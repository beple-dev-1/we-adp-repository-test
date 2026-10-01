# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴상세 조회 (ent_afltbo_menu_reg_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-10-S | 메뉴 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_SEQ
- 메뉴 이미지 순번 (MENU_IMG_SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- DTL_REC
- NUTR_REC
- MENU
- IMG
- AFLT_HOUR

## 데이터 처리

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴조회 (TB_CAFETERIA_MENU_R011)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU
- 입력: MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

### 구내식당 메뉴 상세 조회(BP_AFLT_SEQ, MENU_SEQ) (TB_CAFETERIA_MENU_DTL_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DTL
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 이미지 조회 (TB_CAFETERIA_MENU_IMG_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴분류 이미지 조회 (TB_CAFETERIA_MENU_DV_IMG_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 메뉴분류순번 (MENU_DV_SEQ)

### 구내식당 메뉴 영양정보 조회 (TB_CAFETERIA_MENU_NUTR_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_NUTR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 이용시간 조회(BP_AFLT_SEQ) (TB_CAFETERIA_OPEN_HOUR_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_OPEN_HOUR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_r002_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R002.xml:10
