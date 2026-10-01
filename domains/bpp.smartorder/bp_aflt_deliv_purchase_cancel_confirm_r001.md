# 오피스푸드(식사배송) 주문취소 금액확인 조회 (bp_aflt_deliv_purchase_cancel_confirm_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- ORDER_ID
- 거래일자 (TRX_DT)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### 오피스푸드(식사배송) 주문내역 상세 -2 (TB_BP_AFLT_DELIV_ODR_MENU_R001)

- 종류: SELECT
- 테이블: CAST, TB_BP_AFLT_DELIV_ODR_MENU, TB_BP_AFLT_DELIV_MENU, TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: ORDER_ID, DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_cancel_confirm_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_cancel_confirm_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_R001.xml:10
