# 스마트오더 매장 메뉴 초기화 (ent_odr_menu_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-28-10-S | 스마트오더 매장 메뉴 | 화면 |

## 입력

- BP_AFLT_SEQ
- 메뉴 제공 날짜 (MENU_PRVD_DT)
- 초기화 여부 (INIT_YN)
- 채널구분 (CHNL_TP)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- DAY_REC
- HOUR_REC
- REC

## 데이터 처리

### 엔터프라이즈 주간메뉴 메인화면 정보 조회 (TB_CAFETERIA_DELV_ADDR_R004)

- 종류: SELECT
- 테이블: TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP, TB_BP_AFLT_MY
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 구내식당 메뉴 조회 (TB_CAFETERIA_MENU_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_DV_IMG, TB_BP_AFLT_MY
- 입력: 앱코드 (APP_CD), 제공날짜 (MENU_PRVD_DT), DYNAMIC_0

### 구내식당 이용시간 조회 (TB_CAFETERIA_OPEN_HOUR_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_OPEN_HOUR, TB_BP_AFLT_MY
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0, 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: 필수 값 BP_AFLT_SEQ 누락되었습니다.
  - 조건: "".equals(bpAfltSeq) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_menu_r001_act.jsp:54)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_menu_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_menu_r001_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_ADDR_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R001.xml:10
