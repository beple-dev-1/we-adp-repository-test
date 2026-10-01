# 엔터프라이즈 주간메뉴 메인 화면 조회 (ent_smt_odr_weekly_main_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-70-S | 엔터프라이즈 주간메뉴 메인 화면 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 조회일자 (SEARCH_DATE)

## 출력

- DAY_REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 시간 정보 (HOUR_INFO)

## 데이터 처리

### 엔터프라이즈 주간메뉴 메인화면 정보 조회 (TB_CAFETERIA_DELV_ADDR_R004)

- 종류: SELECT
- 테이블: TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP, TB_BP_AFLT_MY
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 엔터프라이즈 주간메뉴 메인화면 조회 (TB_CAFETERIA_MENU_R008)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_DV_IMG, TB_BP_AFLT_MY
- 입력: 시작일자 (START_DT), 종료일자 (END_DT), DYNAMIC_0

### 구내식당 이용시간 조회(BP_AFLT_SEQ) (TB_CAFETERIA_OPEN_HOUR_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_OPEN_HOUR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_weekly_main_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_weekly_main_r001_act.jsp:43
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_ADDR_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R002.xml:10
