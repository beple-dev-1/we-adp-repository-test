# 오피스푸드(식사배송) 주문하기 - 비플오더 주문원장+오피스푸드 주문원장 insert (bp_aflt_deliv_mybag_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | 화면 |

## 입력

- 비플가맹점 순번 (BP_AFLT_SEQ)
- 장바구니 순번 (MYBAG_SEQ)
- 총 금액 (TOTAL_AMT)
- 메뉴 스케줄 ID (MENU_SCHEDULE_ID)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- ORDER_ID
- ORDER_DT

## 데이터 처리

### 비플오더 주문원장 등록 (TB_BP_AFLT_ODR_C002)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_DT, ORDER_ID, ORDER_TM, ORDER_TYPE, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), PURCHASE_PRICE, ORDER_PROC_ST, ORDER_TX, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 결제금액 (AMT), 처리상태 (PROC_ST), 앱코드 (APP_CD), BILL_NO, DEAL_NO, RECV_TYPE, 가맹점 장바구니 순번 (MYBAG_SEQ), AUTH_CODE

### 오피스푸드(식사배송) 장바구니 - 주문원장등록 (TB_BP_AFLT_DELIV_ODR_MENU_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_DELIV_ODR_MENU, TB_BP_AFLT_DELIV_MYBAG_MENU
- 입력: ORDER_DT, ORDER_ID, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), ORDER_PROC_ST, 가맹점 장바구니 순번 (MYBAG_SEQ), MENU_SCHEDULE_ID

### 주문원장 처리상태 업데이트 (TB_BP_AFLT_ODR_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_PROC_ST, 처리상태 (PROC_ST), CAN_DEVICE, BILL_NO, DEAL_NO, 배송지ID (AREA_ID), EXT_ORDER_NO, ORDER_ID, ORDER_DT, ORDER_TYPE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_c001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
