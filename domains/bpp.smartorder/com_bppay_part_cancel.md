# 오피스푸드(식사배송) 취소 - 부분취소 (com_bppay_part_cancel)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- 원거래주문ID (ORG_ORDER_ID)
- 원거래주문일자 (ORG_ORDER_DT)
- 원거래배송일자 (ORG_TRX_DT)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### service_chnl 검색 (TB_BP_AFLT_MY_R012)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플페이 거래내역 조회(ORDER_DT, ORDER_ID) (TB_BPPAY_TRAN_R002)

- 종류: SELECT
- 테이블: TB_MNY_CHRG_WDRW_DTL, TB_YGYO_ODR, TB_MEMBER, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_ID, ORDER_DT, 거래구분 (TRX_TP)

### 오피스푸드 푸딩 - 비플오더 주문원장 조회 (부분취소) (TB_BP_AFLT_ODR_R020)

- 종류: SELECT
- 테이블: TB_BP_AFLT_DELIV_ODR_MENU, TB_BP_AFLT_DELIV_MENU, TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_ID, DYNAMIC_0, ORDER_ID, DYNAMIC_1, ORDER_ID, DYNAMIC_2, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 복합결제 승인, 환불, 취소 조회 (ORDER_ID) (TB_BPPAY_COMPLEX_TRAN_R003)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN
- 입력: ORDER_ID

### 비플페이 가맹점정보 조회(BP_AFLT_ID) (TB_BP_AFLT_MNG_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 가맹점아이디 (BP_AFLT_ID)

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 오피스푸드 부분취소 (TB_BPPAY_TRAN_R004)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN
- 입력: ORDER_ID, ORDER_DT

### 비플 QR 원장 조회 (TB_BP_QR_MNG_R007)

- 종류: SELECT
- 테이블: TB_BP_QR_MNG
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD), 거래구분 (TRX_TP), 거래번호 (TRX_SEQ)

### 비플페이 거래내역 등록 (TB_BPPAY_TRAN_C001)

- 종류: INSERT
- 테이블: TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 거래구분 (TRX_TP), 결제금액 (AMT), VAT, FEE_TOT, FEE_VAT, MSG, ORG_TRX_DT, ORG_TRX_SEQ, 가맹점아이디 (BP_AFLT_ID), PG_MID, 회원코드 (MEMB_CD), CI, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), FIRM_TRX_DT, 펌거래 일련번호 (FIRM_TRX_SEQ), 응답코드 (RES_CD), 응답메시지 (RES_MSG), 처리상태 (PROC_ST), REFD_PROC_ST, HUB_NOTI_YN, HUB_NOTI_CNT, HUB_NOTI_DTTM, UPD_DTTM, 거래구분 (CP_TP), 앱코드 (APP_CD), TGT_YN, CLS_DSP_SEQ, 한도일련번호 (LMT_SEQ), MNY_UCD_TRX_SEQ, MNY_UCD_TRX_DT, MNY_TRAN_YN, COMPLEX_YN, MNY_CHRG_TRX_SEQ, MNY_CHRG_TRX_DT, MNY_AUTO_CHRG_YN, CNCL_FIRM_TRX_DT, CNCL_FIRM_TRX_SEQ, QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), PAY_MEASURE_TP, ORDER_ID, ORDER_DT, 할인금액 (SALE_AMT), PG_EVENT_SEQ, 결제금액 (PAY_AMT), SALE_YN, 후불결제여부 (POSTPAID_YN), 구내식당 복합결제 고정차감금액 (CAFE_COMPLEX_FIX_AMT), 구내식당 복합결제 고정차감 결제수단구분 (CAFE_COMPLEX_FIX_PAY_MSR_TP), 구내식당 복합결제여부 (CAFE_COMPLEX_YN), MNY_CHRG_ACCT_NO, MNY_CHRG_BANK_CD, SALE_TP

### 비플페이 복합결제 거래내역 등록 (TB_BPPAY_COMPLEX_TRAN_C001)

- 종류: INSERT
- 테이블: TB_BPPAY_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), PAY_MEASURE_TP, 거래시간 (TRX_TM), MNY_MEMB_CD, 회원코드 (MEMB_CD), 결제금액 (AMT), 수수료 (FEE), VAT, 처리상태 (PROC_ST), UPD_DTTM

### 비플오더 주문원장 결제 거래번호 업데이트 (TB_BP_AFLT_ODR_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), ORDER_DT, ORDER_ID, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 주문유형 (ORDER_TYPE), ORDER_DT, ORDER_ID

### 비플머니 통합 거래내역 조회(TRX_SEQ, TRX_DT) (TB_MNY_TRAN_MST_R005)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래번호 (TRX_SEQ), 거래일자 (TRX_DT)

### 비플머니 사용 및 취소 상세내역 조회 (TB_MNY_USE_CNCL_DTL_R001)

- 종류: SELECT
- 테이블: TB_MNY_USE_CNCL_DTL, TB_MEMBER_MNY
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 거래번호 (TRX_SEQ), 거래일자 (TRX_DT), DYNAMIC_0

### 비플페이 카드거래내역 조회(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_CARD_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 비플페이 카드거래내역 등록 (TB_BPPAY_CARD_TRAN_C001)

- 종류: INSERT
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), ORDER_ID, 거래시간 (TRX_TM), TRX_AMT, BP_AFLT_ID, 회원명 (MEMB_NM), PROD_NM, VAN_AUTH_NO, QUOTA, 카드번호 (CARD_NO), RES_CD, 응답메시지 (RES_MSG), ORG_TRX_DT, ORG_TRX_SEQ, PART_YN, VAN_ORG_CD, 회원코드 (MEMB_CD), UPD_DTTM

### 급여공제 집계내역 등록 (TB_SALY_SUM_C001)

- 종류: INSERT
- 테이블: TB_SALY_SUM
- 입력: 거래일자 (TRX_DT), 가맹점ID (AFLT_ID), 거래구분 (TRX_TP), PAY_CNT, 결제금액 (PAY_AMT), PAY_FEE, PAY_FEE_VAT, SETTLE_YN, SETTLE_DT

### 오피스푸드 부분취소시 상태값 업데이트(CAN_ST) (TB_BPPAY_TRAN_U006)

- 종류: UPDATE
- 테이블: TB_BPPAY_TRAN
- 입력: CAN_ST, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 구내식당 주문내역 조회 (TB_CAFETERIA_ODR_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID

### 비플페이 복합결제 거래내역 수정(일괄 수정) (TB_BPPAY_COMPLEX_TRAN_U002)

- 종류: UPDATE
- 테이블: TB_BPPAY_COMPLEX_TRAN
- 입력: 처리상태 (PROC_ST), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 비플페이 카드거래내역 수정(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_CARD_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: RES_CD, 응답메시지 (RES_MSG), VAN_ORG_CD, VAN_AUTH_NO, QUOTA, 카드번호 (CARD_NO), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 비플페이 거래내역 수정(TRX_DT, TRX_SEQ) (TB_BPPAY_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_BPPAY_TRAN
- 입력: FIRM_TRX_DT, 펌거래 일련번호 (FIRM_TRX_SEQ), RES_CD, 응답메시지 (RES_MSG), 처리상태 (PROC_ST), REFD_PROC_ST, HUB_NOTI_YN, HUB_NOTI_CNT, MNY_UCD_TRX_SEQ, MNY_UCD_TRX_DT, MNY_TRAN_YN, COMPLEX_YN, MNY_CHRG_TRX_SEQ, MNY_CHRG_TRX_DT, MNY_AUTO_CHRG_YN, CNCL_FIRM_TRX_DT, CNCL_FIRM_TRX_SEQ, QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), PAY_MEASURE_TP, ORDER_ID, PLFM_TRX_SEQ, PLFM_TRX_DT, PLFM_TRX_TM, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 복합결제 거래내역 수정(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_COMPLEX_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_BPPAY_COMPLEX_TRAN
- 입력: 처리상태 (PROC_ST), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), PAY_MEASURE_TP

### 오피스푸드 부분취소 - 직전취소금액 1건 (TB_MNY_USE_CNCL_DTL_R002)

- 종류: SELECT
- 테이블: TB_MNY_USE_CNCL_DTL
- 입력: 거래번호 (TRX_SEQ), MNY_ID

### 오피스푸드 부분취소 - 기취소금액누계 (TB_MNY_USE_CNCL_DTL_R003)

- 종류: SELECT
- 테이블: TB_MNY_USE_CNCL_DTL
- 입력: 거래번호 (TRX_SEQ), MNY_ID

### 회원별 비플머니 원장 조회(MNY_ID) (TB_MEMBER_MNY_R004)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY
- 입력: MNY_MEMB_CD, MNY_ID, 앱코드 (APP_CD)

### 비플머니 사용 및 취소 상세내역 등록 (TB_MNY_USE_CNCL_DTL_C001)

- 종류: INSERT
- 테이블: TB_MNY_USE_CNCL_DTL
- 입력: 거래번호 (TRX_SEQ), DTL_SEQ, MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), 가맹점ID (AFLT_ID), TOT_TRX_AMT, TRX_AMT, AFT_TRX_AMT, TRX_SIGN, UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), ORG_TRX_SEQ, ORG_DTL_SEQ, ORG_TRX_DT, MNY_MEMB_CD

### 회원별 비플머니 업데이트 (TB_MEMBER_MNY_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_MNY
- 입력: CHRG_TP, MNY_ST, EXP_DTTM, REG_DTTM, BLC_TP, BLC_AMT, BLC_TP, BLC_AMT, REQ_WDRW_AMT, MNY_ID, MNY_MEMB_CD, 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 통합 거래내역 원장 등록 (TB_MNY_TRAN_MST_C001)

- 종류: INSERT
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), TRX_AMT, TRX_SIGN, 처리상태 (PROC_ST), 가맹점ID (AFLT_ID), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, AFT_TRX_TOT_MNY_BLC_AMT, WDRW_TP

### 비플페이PG 대표모계좌 집계내역 등록 (TB_BPPG_REPR_SUM_C001)

- 종류: INSERT
- 테이블: TB_BPPG_REPR_SUM
- 입력: 서비스코드 (SVC_CD), 거래일자 (TRX_DT), 가맹점ID (AFLT_ID), APRV_SUCC_CNT, APRV_SUCC_AMT, APRV_FEE, APRV_FEE_VAT, CNCL_SUCC_CNT, CNCL_SUCC_AMT, CNCL_FEE, CNCL_FEE_VAT, RFND_SUCC_CNT, RFND_SUCC_AMT, RFND_FEE, RFND_FEE_VAT, SETTLE_YN, SETTLE_DT

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.com_bppay_part_cancel.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/com_bppay_part_cancel_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R020.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_QR_MNG_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SALY_SUM_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPG_REPR_SUM_C001.xml:10
