# 스마트오더 메인 초기화 (ent_smt_odr_main_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-10-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- LAT
- LNG
- 근무지코드 (WORK_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 매장리스트 (REST_LIST)
- 카페리스트 (CAFE_LIST)
- MYBAG_YN

## 데이터 처리

### ENT 스마트오더 메인 조회 (TB_BP_AFLT_MY_R013)

- 종류: SELECT
- 테이블: TB_WORK_CD_MNG, TB_BP_AFLT_MNG, TB_CAFETERIA_OPEN_HOUR, TB_CAFETERIA_DELV_ADDR, TB_CTGR_CATG_CD, TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE
- 입력: 앱코드 (APP_CD), 앱코드 (APP_CD), WORK_CD, 앱코드 (APP_CD), 앱코드 (APP_CD), WORK_CD

### 비플오더 영업시간 조회 (TB_AFFILIATION_MY_WT_INFO_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

### ENT 메인 카페 조회 (TB_BP_AFLT_MY_R014)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_CTGR_CATG_CD, TB_CAFETERIA_WORK_PLCE, TB_BP_AFLT_ODR, BP_AFLT_MY, ORDER_CNT, CAST, TB_AFFILIATION_MY_WT_INFO
- 입력: START_LAT, END_LAT, START_LNG, END_LNG, 앱코드 (APP_CD), LAT, LNG, LAT, LNG, 앱코드 (APP_CD), START_LAT, END_LAT, START_LNG, END_LNG, 앱코드 (APP_CD)

### 장바구니 확인 (TB_BP_AFLT_MYBAG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플오더 장바구니 메뉴 중 삭제된 메뉴 조회 (TB_BP_AFLT_MYBAG_PDT_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MY_PDT_INFO
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ)

### 비플오더 장바구니 옵션 삭제 (TB_BP_AFLT_MYBAG_OPT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_OPT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 메뉴 삭제(by mybag_seq) (TB_BP_AFLT_MYBAG_PDT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 옵션 중 삭제된 옵션 조회 (TB_BP_AFLT_MYBAG_OPT_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_PDT_OPT_CATG, TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_OPT
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ)

### 비플오더 장바구니 메뉴 가격 수정 (TB_BP_AFLT_MYBAG_PDT_U003)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MY_PDT_INFO, NEW_PRICE
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 비플오더 장바구니 수정(by pdt_seq) (TB_BP_AFLT_MYBAG_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

### 비플오더 장바구니 조회 (TB_BP_AFLT_MYBAG_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD)

### 비플오더 장바구니 삭제 (TB_BP_AFLT_MYBAG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_r001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R013.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
