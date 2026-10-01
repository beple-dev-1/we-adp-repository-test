# 스마트오더 주문 취소내역 수정 (ent_smt_odr_purchase_info_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-10-S | 스마트오더 주문내역 상세 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID
- 결제금액 (AMT)
- 거래일자 (TRX_DT)
- 거래구분 (TRX_TP)
- 거래번호 (TRX_SEQ)

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 비플페이 거래내역 조회(ORDER_DT, ORDER_ID) (TB_BPPAY_TRAN_R002)

- 종류: SELECT
- 테이블: TB_MNY_CHRG_WDRW_DTL, TB_YGYO_ODR, TB_MEMBER, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_ID, ORDER_DT, 거래구분 (TRX_TP)

### 오피스푸드 부분취소시 상태값 업데이트(CAN_ST) (TB_BPPAY_TRAN_U006)

- 종류: UPDATE
- 테이블: TB_BPPAY_TRAN
- 입력: CAN_ST, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 주문원장(취소내역) update (TB_BP_AFLT_ODR_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: 처리상태 (PROC_ST), ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, ORDER_DT, CAN_DEVICE, CAN_RJCT_CD, CAN_RJCT_TX, 주문처리상태 (ORDER_PROC_ST), 취소상태 (CAN_ST), ORDER_ID, ORDER_DT, 회원코드 (MEMB_CD)

### 구내식당 주문내역 업데이트 (TB_CAFETERIA_ODR_U001)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_ODR
- 입력: PAY_TRX_DT, PAY_TRX_SEQ, CANCEL_TRX_DT, CANCEL_TRX_SEQ, CANCEL_CHNL, PRE_ORDER_PROC_ST, THEFT_YN, 픽업용바코드열람횟수 (PICK_BARCODE_SHOW_CNT), ODR_SEQ, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_u001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10
