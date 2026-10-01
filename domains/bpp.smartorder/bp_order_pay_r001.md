# 결제상태 조회(카드결제) (bp_order_pay_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- ORDER_ID
- ORDER_DT

## 출력

- 처리상태 (PROC_ST)
- 응답코드 (RES_CD)
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 데이터 처리

### service_chnl 검색 (TB_BP_AFLT_MY_R012)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플페이 거래내역 조회(ORDER_DT, ORDER_ID) (TB_BPPAY_TRAN_R002)

- 종류: SELECT
- 테이블: TB_MNY_CHRG_WDRW_DTL, TB_YGYO_ODR, TB_MEMBER, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_ID, ORDER_DT, 거래구분 (TRX_TP)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_r001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10
