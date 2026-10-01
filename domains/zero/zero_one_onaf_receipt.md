# 비대면결제 모바일상품권 영수증 (zero_one_onaf_receipt)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-70-10-S | 통합 비대면결제 결제 완료 | BPY-ONAF-70-10-S-e07 |

## 입력

- ORDER_ID

## 출력

- REQ_TYPE
- COMPANY_ID
- COMPANY_NM
- ORDER_ID
- MCH_SEND_UNIQ_NO
- TOTAL_PRICE
- AMOUNT
- PAY_VAT
- PAY_SERVICE_AMT
- MCH_SEND_DATE
- REG_TIME
- CATEGORY_NM
- CEO_NM
- COMPANY_PHONE
- ADDR1
- ADDR2
- COMPANY_SNO
- 캐시백 적립 금액 (CSBC_AMT)
- 캐시백 적립 유형 (CSBC_ACU_TYPE)
- 캐시백 여부 (CSBC_YN)
- PAYMENT_INFO_LIST

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_receipt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_receipt_act.jsp:26
