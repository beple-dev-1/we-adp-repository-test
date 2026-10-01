# 주문원장(취소내역) update (bo_cancel_u002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-80-S | 비플오더 취소 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 비플오더 주문원장 조회(ORDER_DT, ORDER_ID) (TB_BP_AFLT_ODR_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플오더 가맹점 주문대기정보 조회(Dynamic) (TB_BP_AFLT_ORD_SORT_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ORD_SORT
- 입력: DYNAMIC_0

### 주문원장 처리상태 업데이트 (TB_BP_AFLT_ODR_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_PROC_ST, 처리상태 (PROC_ST), CAN_DEVICE, BILL_NO, DEAL_NO, 배송지ID (AREA_ID), EXT_ORDER_NO, ORDER_ID, ORDER_DT, ORDER_TYPE

### 비플오더 가맹점 주문대기정보 수정 (TB_BP_AFLT_ORD_SORT_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ORD_SORT
- 입력: NOTIFY_TYPE, 처리상태 (PROC_ST), WAIT_CNT, ORDER_CNT, BARCDE_INFO, CANCEL_YN, WAIT_TIME, 거래시간 (TRX_TM), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_u002_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_U001.xml:10
