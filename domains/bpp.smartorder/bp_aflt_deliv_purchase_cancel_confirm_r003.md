# 오피스푸드(식사배송) 주문취소 금액확인 조회 - 복합결제 (bp_aflt_deliv_purchase_cancel_confirm_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID
- 주문유형 (ORDER_TYPE)
- 거래일자 (TRX_DT)

## 출력

- 머니 취소된 금액 (MNY_CANCEL_AMT)
- 카드 취소된 금액 (CARD_CANCEL_AMT)
- 식권 취소된 금액 (MEAL_CANCEL_AMT)
- 머니 승인된 금액 (MNY_AMT)
- 카드 승인된 금액 (CARD_AMT)
- 식권 승인된 금액 (MEAL_AMT)
- 승인된 총 금액 (TOTAL_PRICE)
- 지불수단 (PAY_MEASURE_TP)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 오피스푸드(식사배송) 주문취소 금액확인 조회 -2 (TB_BP_AFLT_DELIV_ODR_MENU_R002)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_AFLT_ODR, TB_BP_AFLT_DELIV_ODR_MENU, TB_BPPAY_TRAN
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE), DYNAMIC_0

### 복합결제 취소된건 합계 (머니, 카드, 식권 별) (TB_BPPAY_COMPLEX_TRAN_R002)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN, TB_BPPAY_COMPLEX_TRAN
- 입력: ORDER_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_cancel_confirm_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_cancel_confirm_r003_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R002.xml:10
