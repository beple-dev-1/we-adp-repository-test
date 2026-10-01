# 주문취소 내역 업데이트 (bp_order_pay_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| BPG-YGYO-20-10-S | 요기요 결제 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- 처리상태 (PROC_ST)
- ORDER_ID
- ORDER_DT
- ORDER_PROC_ST
- 회원코드 (MEMB_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문원장(취소내역) update (TB_BP_AFLT_ODR_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: 처리상태 (PROC_ST), ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, CAN_DEVICE, CAN_RJCT_CD, CAN_RJCT_TX, 주문처리상태 (ORDER_PROC_ST), 취소상태 (CAN_ST), ORDER_ID, ORDER_DT, 회원코드 (MEMB_CD)

### 원주문 거래 취소 정보 업데이트 (TB_BP_AFLT_ODR_U009)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: 처리상태 (PROC_ST), ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, CAN_DEVICE, CAN_RJCT_CD, CAN_RJCT_TX, 주문처리상태 (ORDER_PROC_ST), 취소상태 (CAN_ST), ORDER_ID, ORDER_DT, 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_u001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U009.xml:10
