# 롯데_복지몰 서비스 > 비플머니 웹뷰 > 머니 사용 내역 상세조회(영수증) (webview_receipt_v2)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-10-C | 롯데 복지몰 | 화면 |

## 입력

- COMM
- 이용기관ID (ORG_ID)
- REQ_DATA
- 서비스구분 (SVC_TP)
- 업무코드 (BIZ_CD)
- 거래코드 (TRX_CD)
- 거래번호 (TRX_SEQ)
- 거래일자 (TRX_DT)
- 결제후호출한앱으로복귀할때사용 (CALLBACK_URL)

## 출력

- TRX_CD
- BIZ_CD
- 거래번호 (TRX_SEQ)
- 결제금액 (AMT)
- VAT
- SVC_AMT
- 메시지 (MSG)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 카드번호 (CARD_NO)
- 목명 (MOK_NM)
- AFLT_NM
- AFLT_SP_NM
- REPR_NM
- ZIP_CD
- ADDRS
- ADDRS2
- TEL_NO
- SHOP_NM
- CTGR_CD
- BUSINESS
- CTGRY
- FAX_NO
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)
- 사업자번호 (BIZ_NO)
- 공급가액 (SUPPLY_AMT)
- 거래구분 (TRX_TP)
- 거래구분 (CP_TP)
- TGT_CNT
- TGT_YN
- FIRM_AMT
- PREPAID_AMT
- COMPLEX_YN
- BPPG_YN
- PAY_MEASURE_TP
- POINT_EXP_YN
- SALY_TRAN_YN
- TGTREC
- ORG_TRX_DT
- ORG_TRX_SEQ

## 데이터 처리

### 웹뷰API 내역 조회 (TB_WEBVIEW_API_MNG_R001)

- 종류: SELECT
- 테이블: TB_WEBVIEW_API_MNG, TB_WEBVIEW_API_ORG
- 입력: 이용기관ID (ORG_ID)

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 웹뷰 거래내역 수정 (TB_WEBVIEW_API_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_WEBVIEW_API_TRAN
- 입력: REQ_DATA, RES_DATA, 처리상태 (PROC_ST), 응답코드 (RES_CD), 응답메시지 (RES_MSG), ZT_TRX_DT, ZT_TRX_SEQ, 회원코드 (MEMB_CD), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 카드거래내역 조회(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_CARD_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 결제원장 조회(ORDER_ID) (TB_BPPAY_TRAN_R005)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN
- 입력: ORDER_ID

### 비플페이 가맹점정보 조회(BP_AFLT_ID) (TB_BP_AFLT_MNG_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 가맹점아이디 (BP_AFLT_ID)

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_TRAN_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_ODR_PDT, TB_BP_QR_MNG, TB_BPPAY_CARD_TRAN, TB_YGYO_ODR, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 식권제로페이 결제 정보(TRX_DT, TRX_SEQ) (TB_ZEROPAY_MT_ODR_R005)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 앱코드 (APP_CD)

### 비플페이 복합결제 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_COMPLEX_TRAN_R004)

- 종류: SELECT
- 테이블: TB_BP_QR_MNG, TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 비플PG 거래내역 조회 (by TRX_DT, TRX_SEQ) (TB_ZEROPAY_BPPG_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_TRAN, TB_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 온라인PG 거래내역 조회 (by TRX_DT, TRX_SEQ) (TB_ZEROPAY_PG_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_PG_TRAN, TB_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 편의점 점포 관리 조회(BP_AFLT_SEQ) (TB_STORE_MNG_R002)

- 종류: SELECT
- 테이블: TB_STORE_MNG, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), STORE_CD, STORE_CORP_CD

### 비플페이 가맹점정보 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### QR정보조회 (TB_QR_MNG_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### PG복합결제 거래 내역 조회 (TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), DYNAMIC_0

### 결제내역 상세조회(영수증) (TB_ZEROPAY_TRAN_R007)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), 거래코드 (TRX_CD), DYNAMIC_0

### 복합결제거래내역 원장 조회 (TB_ZEROPAY_COMPLEX_TRAN_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_receipt_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_receipt_v2_act.jsp:36
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
