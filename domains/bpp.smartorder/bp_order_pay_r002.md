# 오더퀸(kiosk) 주문요청 전문 호출 (bp_order_pay_r002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- ORDER_ID
- ORDER_DT
- PAY_TRX_DT
- PAY_TRX_SEQ
- 배송지ID (AREA_ID)

## 출력

- RES_CD
- RES_MSG
- 그린메세지정보 (GRN_MSG_INFO)

## 데이터 처리

### 비플오더 주문원장 조회(ORDER_DT, ORDER_ID) (TB_BP_AFLT_ODR_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 KIOSK 접속정보 조회 (TB_BP_KIOSK_CONN_R001)

- 종류: SELECT
- 테이블: TB_BP_KIOSK_CONN
- 입력: 거래일자 (TRX_DT), BRAND_CD, STORE_NO, POS_NO

### 오더퀸 주문 요청(0002) 전문 요청부 productItems 내역 조회 (TB_BP_AFLT_ODR_R008)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_OPT, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG, TEST
- 입력: ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT

### 마트오더 채번 트랜잭션 타임아웃 SET LOCAL (SMT_ODR_TIMEOUT_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: (없음)

### 스마트오더 채번 직렬화 advisory락 (SMT_ODR_LOCK_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: LOCK_KEY

### 주문조회(ORDER_DT, ORDER_TYPE, BP_AFLT_SEQ) (TB_BP_AFLT_ODR_R034)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_DT, 주문유형 (ORDER_TYPE), 비플가맹점순번 (BP_AFLT_SEQ)

### 주문원장 조회(by order_dt,bp_aflt_seq) (TB_BP_AFLT_ODR_R007)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_DT, 주문유형 (ORDER_TYPE), 비플가맹점순번 (BP_AFLT_SEQ), 비플가맹점순번 (BP_AFLT_SEQ)

### 주문원장 처리상태 업데이트 (TB_BP_AFLT_ODR_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_PROC_ST, 처리상태 (PROC_ST), CAN_DEVICE, BILL_NO, DEAL_NO, 배송지ID (AREA_ID), EXT_ORDER_NO, ORDER_ID, ORDER_DT, ORDER_TYPE

### 비플오더 가맹점 주문대기정보 등록 (TB_BP_AFLT_ORD_SORT_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ORD_SORT
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), BRAND_CD, STORE_NO, POS_NO, BILL_NO, DEAL_NO, DEVICE_TYPE, NOTIFY_TYPE, ORDER_ID, CANCEL_YN, ORG_TRX_DT, ORG_TRX_SEQ, 처리상태 (PROC_ST), WAIT_CNT, ORDER_CNT, BARCDE_INFO, UPD_DTTM, 비플가맹점순번 (BP_AFLT_SEQ)

### 회원정보조회(부가정보) (TB_MEMBER_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플오더 장바구니 조회(옵션포함) - 취소 (TB_BP_AFLT_MYBAG_R008)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_MY_PDT_INFO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 가맹점 장바구니 순번 (MYBAG_SEQ), DYNAMIC_0

### 비플오더 가맹점 주문대기정보 수정 (TB_BP_AFLT_ORD_SORT_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ORD_SORT
- 입력: NOTIFY_TYPE, 처리상태 (PROC_ST), WAIT_CNT, ORDER_CNT, BARCDE_INFO, CANCEL_YN, WAIT_TIME, 거래시간 (TRX_TM), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), DYNAMIC_0

### 상태변경 (TB_BP_AFLT_MYBAG_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 처리상태 (PROC_ST), 가맹점 장바구니 순번 (MYBAG_SEQ)

### 비플오더 주문관련 PUSH (TB_BP_AFLT_ODR_R010)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_MEMBER_APP
- 입력: ORDER_DT, ORDER_ID, ORDER_TYPE

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_r002_act.jsp:45
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.SMT_ODR_TIMEOUT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.SMT_ODR_LOCK_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R034.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R010.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
