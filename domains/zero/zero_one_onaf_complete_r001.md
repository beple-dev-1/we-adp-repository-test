# 통합 비대면결제 결제 완료(boxpos callback) (zero_one_onaf_complete_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-70-10-S | 통합 비대면결제 결제 완료 | 화면 |

## 입력

- TYPE_CD
- 거래번호 (TRX_SEQ)
- 거래일자 (TRX_DT)
- ORDER_ID

## 출력

- RESULTCODE
- MESSAGE
- APPROVALNO
- AUTHDATE
- AUTHTIME
- 결제총금액 (PAY_AMOUNT)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 처리상태 (PROC_ST)
- 결제사정보 (PAY_CD)
- boxpos 제로페이가맹점번호 (STORE_CAT_ID)
- BOX POST 고유아이디 (PARTNER_ID)
- BOX 자체 식별번호 (PARTNER_IDNT_NO)
- 가맹점사업자번호(제로페이일련번호) (STORE_NUMBER)
- 가맹점명 (STORE_NAME)
- PHONE_NUMBER
- AMOUNT
- 공급가 (ORDER_SUPPLY)
- 부가세 (ORDER_VAT)
- 면세액 (ORDER_TAX)
- ORDER_SVC
- INSTALLMENT
- ADDITIONINFO
- 결제후호출한앱으로복귀할때사용 (CALLBACK_URL)

## 데이터 처리

### 직불 boxpos (TB_ZEROPAY_BOXPOS_TRAN_R002)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BOXPOS_TRAN, TB_ZEROPAY_TRAN
- 입력: ZERO_TRX_DT, ZERO_TRX_SEQ

### 상품권 boxpos (TB_ZEROPAY_BOXPOS_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BOXPOS_TRAN, TB_ZEROPAY_GIFT_ONAF_TRAN
- 입력: ORDER_ID

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_complete_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_complete_r001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BOXPOS_TRAN_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BOXPOS_TRAN_R003.xml:10
