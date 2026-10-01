# 요기요 영수증 (bp_ygyo_receipt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-30-10-10-S | 주문내역(상세) | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- shop_id
- shop_name
- shop_address
- shop_phone_number
- order_id
- CANCEL_PAYMENT_TRANSACTION_NUMBER
- CANCEL_PAYMENT_TRANSACTION_DT

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
- CARD_TRX_SEQ
- TGTREC
- shop_phone_number
- order_id
- TOTAL_AMOUNT
- MENU_TOTAL_AMOUNT
- DELIVERY_FEE
- EXTRA_PAYMENT_AMOUNT
- SHOP_ADDRESS
- SHOP_NAME
- SHOP_ID
- SERVING_TYPE
- REG_DTTM
- PAY_MEASURE_TP
- MNY_AMT
- MT_AMT
- CARD_AMT
- 결제금액 (PAY_AMT)
- 할인금액 (SALE_AMT)

## 데이터 처리

### 요기요 영수증 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_YGYO_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN, TB_YGYO_ODR
- 입력: COMPLEX_TRX_SEQ, COMPLEX_TRX_SEQ, COMPLEX_TRX_SEQ, 거래번호 (TRX_SEQ), SHOP_ID

### 요기요 영수증 조회2(TRX_DT,TRX_SEQ) (TB_BPPAY_YGYO_TRAN_R002)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN, TB_ZEROPAY_MT_ODR
- 입력: 거래번호 (TRX_SEQ), 거래일자 (TRX_DT)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_receipt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_receipt_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_YGYO_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_YGYO_TRAN_R002.xml:10
