# 주문원장 등록 (ent_smt_odr_mybag_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-16-S | 장바구니 조회 | 화면 |

## 입력

- 가격 (PRICE)
- 비플가맹점순번 (BP_AFLT_SEQ)
- ROBOT_MENU_CD
- 가맹점 장바구니 순번 (MYBAG_SEQ)
- 수령방법 (RECV_TYPE)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- ORDER_ID
- ORDER_DT
- 그린메세지정보 (GRN_MSG_INFO)

## 데이터 처리

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 장바구니 조회(옵션포함) (TB_BP_AFLT_MYBAG_R004)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_MY_PDT_INFO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 처리상태 (PROC_ST), DYNAMIC_0

### 비플오더 KIOSK 접속정보 조회 (TB_BP_KIOSK_CONN_R001)

- 종류: SELECT
- 테이블: TB_BP_KIOSK_CONN
- 입력: 거래일자 (TRX_DT), BRAND_CD, STORE_NO, POS_NO

### 비플오더 주문원장 등록 (TB_BP_AFLT_ODR_C002)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_DT, ORDER_ID, ORDER_TM, ORDER_TYPE, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), PURCHASE_PRICE, ORDER_PROC_ST, ORDER_TX, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 결제금액 (AMT), 처리상태 (PROC_ST), 앱코드 (APP_CD), BILL_NO, DEAL_NO, RECV_TYPE, 가맹점 장바구니 순번 (MYBAG_SEQ), AUTH_CODE

### 비플오더 주문메뉴 등록 (TB_BP_AFLT_ODR_PDT_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR_PDT
- 입력: ORDER_DT, ORDER_ID, ORD_PDT_SEQ, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), ORD_PDT_NM, PDT_CNT, PDT_PRICE, 앱코드 (APP_CD)

### 비플오더 주문옵션 등록 (TB_BP_AFLT_ODR_OPT_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR_OPT
- 입력: ORDER_DT, ORDER_ID, ORD_PDT_SEQ, ORD_OPT_SEQ, OPT_NM, OPT_CATG_NM, 앱코드 (APP_CD)

### 주문원장 처리상태 업데이트 (TB_BP_AFLT_ODR_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_PROC_ST, 처리상태 (PROC_ST), CAN_DEVICE, BILL_NO, DEAL_NO, 배송지ID (AREA_ID), EXT_ORDER_NO, ORDER_ID, ORDER_DT, ORDER_TYPE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_mybag_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_mybag_c001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_PDT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_OPT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
