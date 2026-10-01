# 구내식당 주문 업데이트 (ent_bp_order_pay_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- ORDER_DT
- ORDER_ID

## 출력

- 코드 (CODE)
- MSG
- 남은수량 (QTY_LEFT)

## 데이터 처리

### 구내식당 주문내역 조회 (TB_CAFETERIA_ODR_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID

### 주문원장 처리상태 업데이트 (TB_BP_AFLT_ODR_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_PROC_ST, 처리상태 (PROC_ST), CAN_DEVICE, BILL_NO, DEAL_NO, 배송지ID (AREA_ID), EXT_ORDER_NO, ORDER_ID, ORDER_DT, ORDER_TYPE

### 구내식당 주문가능여부 검증(시퀀스 기준 주문가능 여부 판단) (TB_CAFETERIA_ODR_R011)

- 종류: SELECT
- 테이블: TB_CAFETERIA_ODR, TB_BPPAY_TRAN
- 입력: MENU_SEQ, DELV_DT, MENU_TOTAL_QTY, ORDER_ID

### 구내식당 주문 상세내역 조회 (TB_CAFETERIA_ODR_R003)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_QR_MNG, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bp_order_pay_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_bp_order_pay_u001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
