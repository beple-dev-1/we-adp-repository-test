# 오피스푸드(식사배송) 주문취소 금액확인 (bp_aflt_deliv_purchase_cancel_confirm)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(IDO 동적 이름)

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- ORDER_ID
- 주문유형 (ORDER_TYPE)
- 거래구분 (TRX_TP)
- 거래일자 (TRX_DT)
- 취소구분 (CANCEL_TYPE)

## 출력

- ORDER_ID
- 주문유형 (ORDER_TYPE)
- 거래구분 (TRX_TP)
- 거래일자 (TRX_DT)
- 취소구분 (CANCEL_TYPE)

## 데이터 처리

- (IDO 호출 없음) — IDO 동적 이름

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_cancel_confirm.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_cancel_confirm_act.jsp:29
