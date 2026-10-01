# 주문취소시 업데이트(order_proc_st) (bp_aflt_deliv_purchase_cancel_confirm_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- ORDER_PROC_ST
- ORDER_ID
- ORDER_DT
- 회원코드 (MEMB_CD)
- MENU_SCHEDULE_ID

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문취소시 update (TB_BP_AFLT_DELIV_ODR_MENU_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_DELIV_ODR_MENU
- 입력: ORDER_PROC_ST, ORDER_ID, ORDER_DT, 회원코드 (MEMB_CD), MENU_SCHEDULE_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_cancel_confirm_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_cancel_confirm_u001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_U001.xml:10
