# 주문내역조회 - 복합결제(비플식권+비플머니, 비플식권+신용/체크카드) (smt_odr_purchase_info_r005)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-10-S | 주문내역 상세 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID
- ORDER_TYPE

## 출력

- ORDER_DT
- ORDER_ID
- ORDER_TM
- ORDER_TYPE
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 거래구분 (TRX_TP)
- TOT_AMT
- MT_AMT
- MNY_AMT
- CARD_AMT
- PAY_MEASURE_TP
- 회원코드 (MEMB_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- PURCHASE_PRICE
- ORDER_TX
- CAN_DT
- CAN_TM
- CAN_TRAN_NO
- 앱코드 (APP_CD)
- BILL_NO
- DEAL_NO
- ORDER_PROC_ST
- CAN_DEVICE
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 급여공제금액 (SALY_AMT)
- 한도명 (LMT_NM)

## 데이터 처리

### 주문내역조회 - 복합결제(비플식권+비플머니, 비플식권+신용/체크카드) (TB_BP_AFLT_ODR_R006)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_AFLT_ODR, TB_BPPAY_TRAN, TB_BP_QR_MNG
- 입력: DYNAMIC_0, DYNAMIC_1, DYNAMIC_2, DYNAMIC_3, 앱코드 (APP_CD), ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_r005.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_r005_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R006.xml:10
