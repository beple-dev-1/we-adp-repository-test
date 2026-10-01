# 주문원장(취소내역) update (bo_cancel_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-80-S | 비플오더 취소 | 화면 |

## 입력

- ORDER_ID
- ORDER_DT
- 회원코드 (MEMB_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문원장(취소내역) update (TB_BP_AFLT_ODR_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: 처리상태 (PROC_ST), ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, CAN_DEVICE, CAN_RJCT_CD, CAN_RJCT_TX, 주문처리상태 (ORDER_PROC_ST), 취소상태 (CAN_ST), ORDER_ID, ORDER_DT, 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_u001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10
