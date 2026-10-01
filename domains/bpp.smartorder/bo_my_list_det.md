# 비플오더 주문서비스 영업시간관리 (bo_my_list_det)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-10-10-S | 주문 내역 상세 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID
- ORDER_TYPE

## 출력

- REC
- ORDER_DT
- ORDER_ID
- ORDER_TYPE
- ORDER_TM
- ORD_PDT_NM
- ORD_PDT_NM_CNT
- ORDER_PROC_ST
- ORDER_PROC_ST_NM
- ORDER_DTTM
- CAN_DEVICE
- CAN_RJCT_CD
- CAN_RJCT_TX
- DEAL_NO
- CAN_DTTM
- REPT_DTTM
- COMP_DTTM
- PAY_ST

## 데이터 처리

### 비플오더 주문내역 진행중 상세 (TB_BP_AFLT_ODR_R011)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR_OPT, ORDER_TABLE
- 입력: ORDER_DT, ORDER_ID, ORDER_TYPE, ORDER_DT, ORDER_ID, ORDER_TYPE

### 비플오더 주문내역 진행중 상세2 (TB_BP_AFLT_ODR_R012)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BPPAY_TRAN, TB_BP_AFLT_ORD_SORT
- 입력: ORDER_DT, ORDER_ID, ORDER_TYPE

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_list_det.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_list_det_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R012.xml:10
