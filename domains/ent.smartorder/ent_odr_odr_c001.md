# 주문원장 등록 (ent_odr_odr_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-22-10-S | 스마트오더 주문 | HIT-ORDR-22-10-S-e10 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_SEQ
- 제공날짜 (MENU_PRVD_DT)
- 제공방식 (PRVD_TP)

## 출력

- ORDER_DT
- ORDER_ID
- RES_CD
- RES_MSG

## 데이터 처리

### 주문 원장 조회 (TB_CAFETERIA_ODR_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_ODR, TB_BPPAY_TRAN
- 입력: ORDER_DT1, ORDER_DT2, 주문유형 (ORDER_TYPE), 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 엔터프라이즈 회원 부가정보 조회 (TB_MEMBER_ENT_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR
- 입력: SITE_CD, 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 사용자 가맹점별 배달주소지 조회 (TB_MEMBER_ENT_APP_DELV_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP_DELV
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), WORK_CD

### 딜리버리 장소 카테고리 조회 (TB_CAFETERIA_DELV_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV_DETAIL, TB_CAFETERIA_DELV
- 입력: WORK_CD, 비플가맹점순번 (BP_AFLT_SEQ)

### 딜리버리 주문시 가맹점 배송지 리스트 (TB_CAFETERIA_DELV_DETAIL_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV, TB_CAFETERIA_DELV_DETAIL
- 입력: WORK_CD, 비플가맹점순번 (BP_AFLT_SEQ)

### 구내식당 메뉴 상세 조회 (TB_CAFETERIA_MENU_R005)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DTL
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ

### 마트오더 채번 트랜잭션 타임아웃 SET LOCAL (SMT_ODR_TIMEOUT_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: (없음)

### 주문 원장 등록 (TB_CAFETERIA_ODR_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_ODR
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE), 주문구분 (ORDER_FORM_TP), 제공방식 (PRVD_TP), MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD), DELV_ADDR, DELV_ADDR2, DELV_DT, 조중식구분 (BLD_TP), 메뉴개수 (MENU_CNT), ORDER_TOT_AMT, PRE_RSRV_YN, THEFT_YN, PAY_TRX_DT, PAY_TRX_SEQ, CANCEL_TRX_DT, CANCEL_TRX_SEQ, PRE_ORDER_PROC_ST, PICK_BARCODE, PICK_BARCODE_SHOW_CNT, DEAD_LINE_DTTM, CANCEL_CHNL, ORDER_TOT_AMT_HIDE_YN

### 주문 메뉴 원장 등록 (TB_CAFETERIA_ODR_MENU_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_ODR_MENU
- 입력: ORDER_DT, ORDER_ID, MENU_SEQ, MENU_DTL_SEQ, 비플가맹점순번 (BP_AFLT_SEQ), 메뉴 가격 (MENU_AMT), QTY, REPR_MENU_YN, MENU_NM, MENU_NM_EN

### 스마트오더 채번 직렬화 advisory락 (SMT_ODR_LOCK_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: LOCK_KEY

### 구내식당용 대기번호 조회 (TB_BP_AFLT_ODR_R027)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_DT, 주문유형 (ORDER_TYPE), 비플가맹점순번 (BP_AFLT_SEQ)

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 주문원장 등록 (TB_BP_AFLT_ODR_C002)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_DT, ORDER_ID, ORDER_TM, ORDER_TYPE, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), PURCHASE_PRICE, ORDER_PROC_ST, ORDER_TX, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 결제금액 (AMT), 처리상태 (PROC_ST), 앱코드 (APP_CD), BILL_NO, DEAL_NO, RECV_TYPE, 가맹점 장바구니 순번 (MYBAG_SEQ), AUTH_CODE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_odr_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_odr_c001_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.SMT_ODR_TIMEOUT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_MENU_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.SMT_ODR_LOCK_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C002.xml:10
