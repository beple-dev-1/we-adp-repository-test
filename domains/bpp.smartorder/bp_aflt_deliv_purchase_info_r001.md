# 오피스푸드(식사배송) 주문내역 상세 -1 (bp_aflt_deliv_purchase_info_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-20-10-S | 오피스푸드(식사배송) 구매내역 상세 - 조회 | 화면 |

## 입력

- ORDER_ID
- ORDER_TYPE
- 거래구분 (TRX_TP)

## 출력

- ORDER_DT
- ORDER_TM
- ORDER_ID
- ORDER_TYPE
- 회원코드 (MEMB_CD)
- 가맹점명 (AFLT_NM)
- 비플가맹점순번 (BP_AFLT_SEQ)
- PURCHASE_PRICE
- ORDER_STS
- ORDER_TX
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 결제금액 (AMT)
- 처리상태 (PROC_ST)
- CAN_DT
- CAN_TM
- CAN_TRAN_NO
- 앱코드 (APP_CD)
- BILL_NO
- DEAL_NO
- PAY_MEASURE_TP_NM
- PAY_MEASURE_TP
- AFLT_TEL_NO
- ROBOT_YN
- CAN_DEVICE
- ORDER_RANK
- LOC_TITLE
- SPOT_TITLE_1
- SPOT_TITLE_2
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 오피스푸드(식사배송) 주문내역 상세 -1 (TB_BP_AFLT_ODR_R018)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_MEMBER_APP_DELIV, TB_BPPAY_TRAN
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), ORDER_ID, ORDER_TYPE, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R018.xml:10
