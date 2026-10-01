# 정보 상세 초기화 (ent_odr_menu_info_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-28-20-S | 정보 상세 초기화 | 화면 |

## 입력

- MENU_SEQ
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- MENU_LIST
- NUTRITION_LIST
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 구내식당 메뉴 상세 조회 (TB_CAFETERIA_MENU_DTL_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DTL
- 입력: MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

### 구내식당 메뉴 영양성분 조회 (TB_CAFETERIA_MENU_NUTR_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_NUTR
- 입력: MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_menu_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_menu_info_r001_act.jsp:17
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_R001.xml:10
