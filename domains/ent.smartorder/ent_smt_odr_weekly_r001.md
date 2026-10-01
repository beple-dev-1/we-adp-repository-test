# 엔터프라이즈 주간메뉴 전체보기 화면 action (ent_smt_odr_weekly_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-70-10-S | 엔터프라이즈 주간메뉴 전체보기 화면 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- START_DATE
- END_DATE
- DAY

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- BRUNCH_REC
- LUNCH_REC

## 데이터 처리

### 엔터프라이즈 주간메뉴 메인화면 정보 조회 (TB_CAFETERIA_DELV_ADDR_R004)

- 종류: SELECT
- 테이블: TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP, TB_BP_AFLT_MY
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 엔터프라이즈 주간메뉴 전체보기 화면 select (TB_CAFETERIA_MENU_R009)

- 종류: SELECT
- 테이블: CAST, GENERATE_SERIES, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_BP_AFLT_MY
- 입력: START_DATE, END_DATE, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_weekly_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_weekly_r001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_ADDR_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R009.xml:10
