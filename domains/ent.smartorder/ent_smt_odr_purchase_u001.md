# 픽업 QR/바코드 열람건수 수정 (ent_smt_odr_purchase_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-10-S | 스마트오더 주문내역 상세 | 화면 |
| HIT-HIST-10-20-10-S | 스마트오더 주문내역 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### 구내식당 주문내역 업데이트 (TB_CAFETERIA_ODR_U001)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_ODR
- 입력: PAY_TRX_DT, PAY_TRX_SEQ, CANCEL_TRX_DT, CANCEL_TRX_SEQ, CANCEL_CHNL, PRE_ORDER_PROC_ST, THEFT_YN, 픽업용바코드열람횟수 (PICK_BARCODE_SHOW_CNT), ODR_SEQ, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_u001_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10
