# 엔터프라이즈_가맹점 어드민_메뉴 관리 추가 act앱 버전) (ent_aflt_menu_reg_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBOA-20-10-S | 엔터프라이즈_가맹점 어드민_메뉴 관리 서비스(앱 버전) — 메뉴 추가/수정 step2(상세 폼) | HIT-MBOA-20-10-S-e21, HIT-MBOA-20-10-S-e22 |

## 입력

- 제공형태 (PRVD_TP)
- 제공날짜 (MENU_PRVD_DT)
- 조식유무 (BRUNCH_YN)
- 중식유무 (LUNCH_YN)
- 메뉴분류코드 (MENU_DV_SEQ)
- 대표메뉴명 (REPR_MENU_NM)
- 메뉴구성 (MENU_PACK_NM)
- 대표메뉴명(영문) (REPR_MENU_NM_EN)
- 메뉴구성(영문) (MENU_PACK_NM_EN)
- 원산지 (ORIGIN_NM)
- 수량 (QTY)
- 파일 (FILE)
- FILE_NAME
- 파일확장자 (FILE_EXT)
- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_SEQ
- 메뉴 이미지 순번 (MENU_IMG_SEQ)
- KCAL_INFO
- MENU_INFO
- 영양정보 순번 (NUTR_SEQ)
- 메뉴 가격 (MENU_AMT)
- FLAG
- 금액숨김여부 (AMT_HIDE_YN)
- 매장식사-품절 여부 (C_SOLDOUT_YN)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 구내식당 이용시간 조회 (TB_CAFETERIA_OPEN_HOUR_R004)

- 종류: SELECT
- 테이블: TB_CAFETERIA_OPEN_HOUR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 주문구분 (ORDER_FORM_TP), 조중식구분 (BLD_TP), 제공방식 (PRVD_TP), 앱코드 (APP_CD)

### 구내식당 메뉴 채번 (ENT_CAFE_SEQ_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: (없음)

### 구내식당 메뉴 메뉴원장 등록 (TB_CAFETERIA_MENU_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_MENU
- 입력: MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ), 대표메뉴 (REPR_MENU_NM), 주문구분 (ORDER_FORM_TP), 제공날짜 (MENU_PRVD_DT), BRUNCH_YN, LUNCH_YN, 제공방식 (PRVD_TP), 영양정보 순번 (NUTR_SEQ), 영양정보 순번 (NUTR_SEQ), 메뉴 이미지 순번 (MENU_IMG_SEQ), 메뉴 이미지 순번 (MENU_IMG_SEQ), 메뉴구성명 (MENU_PACK_NM), REPR_MENU_NM_EN, MENU_PACK_NM_EN, ORIGIN_NM, 메뉴 가격 (MENU_AMT), QTY, QTY, 남은수량 (QTY_LEFT), 남은수량 (QTY_LEFT), 앱코드 (APP_CD), REG_USER, UPD_USER, SMT_ODR_PAY_YN, MENU_DV_SEQ, 마감일시 (DEAD_LINE_DTTM), 금액숨김여부 (AMT_HIDE_YN), 매장식사-품절 여부 (C_SOLDOUT_YN)

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴조회 (TB_CAFETERIA_MENU_R011)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU
- 입력: MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

### 구내식당 메뉴 이미지 삭제 (TB_CAFETERIA_MENU_IMG_D001)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 수정 (TB_CAFETERIA_MENU_U004)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_MENU
- 입력: 대표메뉴 (REPR_MENU_NM), 주문구분 (ORDER_FORM_TP), 제공날짜 (MENU_PRVD_DT), BRUNCH_YN, LUNCH_YN, 제공방식 (PRVD_TP), 영양정보 순번 (NUTR_SEQ), 영양정보 순번 (NUTR_SEQ), 메뉴 이미지 순번 (MENU_IMG_SEQ), 메뉴 이미지 순번 (MENU_IMG_SEQ), 메뉴구성명 (MENU_PACK_NM), REPR_MENU_NM_EN, MENU_PACK_NM_EN, ORIGIN_NM, 메뉴 가격 (MENU_AMT), 메뉴 가격 (MENU_AMT), QTY, QTY, 남은수량 (QTY_LEFT), 남은수량 (QTY_LEFT), UPD_USER, SMT_ODR_PAY_YN, MENU_DV_SEQ, MENU_DV_SEQ, 마감일시 (DEAD_LINE_DTTM), 금액숨김여부 (AMT_HIDE_YN), 매장식사-품절 여부 (C_SOLDOUT_YN), MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

### 구내식당 메뉴 상세 삭제 (TB_CAFETERIA_MENU_DTL_D002)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_DTL
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 삭제 (TB_CAFETERIA_MENU_NUTR_D002)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_NUTR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 메뉴상세 등록 (TB_CAFETERIA_MENU_DTL_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ, MENU_NM, MENU_NM_EN, CALORIE, WEIGHT, REPR_MENU_YN, 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 구내식당 메뉴 영양정보 등록 (TB_CAFETERIA_MENU_NUTR_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_MENU_NUTR, TB_CAFETERIA_MENU
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ, NUTR_SEQ, INGR, CALORIE, 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ, NUTR_SEQ

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴 등록/수정 (TB_CAFETERIA_MENU_IMG_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_MENU_IMG, TBL, IMG_PATH
- 입력: MENU_SEQ, 메뉴 이미지 순번 (MENU_IMG_SEQ), 비플가맹점순번 (BP_AFLT_SEQ), IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, THUMB_IMG_PATH, THUMB_IMG_FILE_NM, THUMB_IMG_FILE_EXT, 앱코드 (APP_CD), REG_USER, IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, THUMB_IMG_PATH, THUMB_IMG_FILE_NM, THUMB_IMG_FILE_EXT, 앱코드 (APP_CD), UPD_USER

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_c001_act.jsp:53
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ENT_CAFE_SEQ_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_D002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_D002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_C001.xml:10
