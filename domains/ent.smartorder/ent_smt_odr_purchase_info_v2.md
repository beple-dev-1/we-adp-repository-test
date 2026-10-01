# 스마트오더 주문 상세내역 v2 (ent_smt_odr_purchase_info_v2)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-20-10-S | 스마트오더 주문내역 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |
| HIT-HIST-10-S | 엔터프라이즈제로페이 영수증_v2 | HIT-HIST-10-S-e10 |

## 입력

- ORDER_DT
- ORDER_ID
- 주문유형 (ORDER_TYPE)

## 출력

- (없음)

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 거래 타입 확인 (TB_BPPAY_TRAN_R015)

- 종류: SELECT
- 테이블: TB_CAFETERIA_ODR, TB_BPPAY_TRAN
- 입력: ORDER_ID, ORDER_DT, 주문유형 (ORDER_TYPE), ORDER_DT, ORDER_ID, 앱코드 (APP_CD)

### 구내식당 주문 상세내역 조회 (TB_CAFETERIA_ODR_R003)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_QR_MNG, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플페이 복합결제 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_COMPLEX_TRAN_R004)

- 종류: SELECT
- 테이블: TB_BP_QR_MNG, TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 스마트오더 주문 기본정보 조회 (TB_BP_AFLT_ODR_R030)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT, TB_BP_AFLT_ODR, TB_CAFETERIA_ROBOT_DELV_ADDR, TB_BPPAY_TRAN, TB_BP_QR_MNG
- 입력: 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), ORDER_ID, 주문유형 (ORDER_TYPE), DYNAMIC_0

### 스마트오더 상품/옵션 조회 (TB_BP_AFLT_ODR_R031)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_ODR_OPT, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), ORDER_ID, 주문유형 (ORDER_TYPE)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_v2_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R015.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R030.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R031.xml:10
