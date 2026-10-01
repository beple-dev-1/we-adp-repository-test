# 스마트오더 결제완료(로봇배송 포함) (ent_smt_odr_complete_v2)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 가맹점정보 조회(BP_AFLT_ID) (TB_BP_AFLT_MNG_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 가맹점아이디 (BP_AFLT_ID)

### 수령방법 확인(포장, 식사배송) (TB_BP_AFLT_ODR_R019)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### service_chnl 검색 (TB_BP_AFLT_MY_R012)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_complete_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_complete_v2_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R019.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10
