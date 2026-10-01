# 주문원장(취소내역) update (smt_odr_purchase_info_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-10-S | 주문내역 상세 | 화면 |
| BPG-OBO-10-10-10-S | 주문 내역 상세 | 화면 |
| BPG-OBO-10-10-20-S | 주문 거부 사유 | 화면 |
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- 처리상태 (PROC_ST)
- ORDER_ID
- ORDER_DT
- ORDER_PROC_ST
- CAN_DEVICE
- 회원코드 (MEMB_CD)
- CAN_RJCT_CD
- CAN_RJCT_TX

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문원장(취소내역) update (TB_BP_AFLT_ODR_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: 처리상태 (PROC_ST), ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, CAN_DEVICE, CAN_RJCT_CD, CAN_RJCT_TX, 주문처리상태 (ORDER_PROC_ST), 취소상태 (CAN_ST), ORDER_ID, ORDER_DT, 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_u001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10
