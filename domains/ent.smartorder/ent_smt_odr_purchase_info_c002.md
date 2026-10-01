# 스마트오더 주문 취소내역 등록 (ent_smt_odr_purchase_info_c002)

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

### 주문 원장 (취소내역) insert (TB_BP_AFLT_ODR_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR
- 입력: 결제금액 (AMT), 결제금액 (AMT), ORDER_ID, ORDER_ID, CAN_ST, 회원코드 (MEMB_CD), ORDER_ID, ORDER_TYPE

### 구내식당 주문 취소내역 등록 (TB_CAFETERIA_ODR_C002)

- 종류: INSERT
- 테이블: TB_CAFETERIA_ODR
- 입력: CANCEL_TRX_DT, CANCEL_TRX_SEQ, ORDER_DT, ORDER_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info_c002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_c002_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_C002.xml:10
