# 가맹점 서비스채널 조회 (bp_order_pay_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |

## 입력

- ORDER_ID
- ORDER_DT
- 주문유형 (ORDER_TYPE)

## 출력

- SERVICE_CHNL
- SERVICE_DTL_CHNL

## 데이터 처리

### service_chnl 검색 (TB_BP_AFLT_MY_R012)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_r003_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10
