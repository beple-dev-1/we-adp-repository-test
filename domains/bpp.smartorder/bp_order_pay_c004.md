# 카드결제 등록 (bp_order_pay_c004)

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
- COMPLEX_YN
- TOT_AMT
- CARD_AMT
- 거래구분 (TRSC_TP)

## 출력

- VV
- ID
- RQ_DTIME
- TNO
- EV
- TRX_DT
- TRX_SEQ

## 데이터 처리

### service_chnl 검색 (TB_BP_AFLT_MY_R012)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비플오더 주문원장 조회(ORDER_DT, ORDER_ID) (TB_BP_AFLT_ODR_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플오더 가맹점관리 원장 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MY_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플페이 거래내역 등록 (TB_BPPAY_TRAN_C001)

- 종류: INSERT
- 테이블: TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 거래구분 (TRX_TP), 결제금액 (AMT), VAT, FEE_TOT, FEE_VAT, MSG, ORG_TRX_DT, ORG_TRX_SEQ, 가맹점아이디 (BP_AFLT_ID), PG_MID, 회원코드 (MEMB_CD), CI, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), FIRM_TRX_DT, 펌거래 일련번호 (FIRM_TRX_SEQ), 응답코드 (RES_CD), 응답메시지 (RES_MSG), 처리상태 (PROC_ST), REFD_PROC_ST, HUB_NOTI_YN, HUB_NOTI_CNT, HUB_NOTI_DTTM, UPD_DTTM, 거래구분 (CP_TP), 앱코드 (APP_CD), TGT_YN, CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), MNY_UCD_TRX_SEQ, MNY_UCD_TRX_DT, MNY_TRAN_YN, COMPLEX_YN, MNY_CHRG_TRX_SEQ, MNY_CHRG_TRX_DT, MNY_AUTO_CHRG_YN, CNCL_FIRM_TRX_DT, CNCL_FIRM_TRX_SEQ, QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), PAY_MEASURE_TP, ORDER_ID, ORDER_DT, 할인금액 (SALE_AMT), PG_EVENT_SEQ, 결제금액 (PAY_AMT), SALE_YN, 후불결제여부 (POSTPAID_YN), 구내식당 복합결제 고정차감금액 (CAFE_COMPLEX_FIX_AMT), 구내식당 복합결제 고정차감 결제수단구분 (CAFE_COMPLEX_FIX_PAY_MSR_TP), 구내식당 복합결제여부 (CAFE_COMPLEX_YN), MNY_CHRG_ACCT_NO, MNY_CHRG_BANK_CD, SALE_TP

### 비플페이 카드거래내역 등록 (TB_BPPAY_CARD_TRAN_C001)

- 종류: INSERT
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), ORDER_ID, 거래시간 (TRX_TM), TRX_AMT, BP_AFLT_ID, 회원명 (MEMB_NM), PROD_NM, VAN_AUTH_NO, QUOTA, 카드번호 (CARD_NO), RES_CD, 응답메시지 (RES_MSG), ORG_TRX_DT, ORG_TRX_SEQ, PART_YN, VAN_ORG_CD, 회원코드 (MEMB_CD), UPD_DTTM

### 비플오더 주문원장 결제 거래번호 업데이트 (TB_BP_AFLT_ODR_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), ORDER_DT, ORDER_ID, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 주문유형 (ORDER_TYPE), ORDER_DT, ORDER_ID

### 비플페이 복합결제 거래내역 등록 (TB_BPPAY_COMPLEX_TRAN_C001)

- 종류: INSERT
- 테이블: TB_BPPAY_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), PAY_MEASURE_TP, 거래시간 (TRX_TM), MNY_MEMB_CD, 회원코드 (MEMB_CD), 결제금액 (AMT), 수수료 (FEE), VAT, 처리상태 (PROC_ST), UPD_DTTM

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay_c004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_c004_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_C001.xml:10
