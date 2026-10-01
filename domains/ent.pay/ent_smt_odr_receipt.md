# 엔터프라이즈_스마트오더 영수증 (ent_smt_odr_receipt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-PAY-40-S | 엔터프라이즈_제로페이 결제 메인 > 계좌 상세 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 출력

- SHOP_NM
- CTGR_CD
- BUSINESS
- CTGRY
- FAX_NO
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)
- 사업자번호 (BIZ_NO)
- 공급가액 (SUPPLY_AMT)
- 거래구분 (TRX_TP)
- 거래구분 (CP_TP)
- TGT_CNT
- TGT_YN
- BIZ_CD_NM
- LMT_NM
- MNY_TRX_AMT
- MEAL_TRX_AMT
- SALY_TRX_AMT
- COMPLEX_YN
- TGTREC
- 금액숨김여부 (AMT_HIDE_YN)

## 데이터 처리

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_TRAN_R013)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 카드거래내역 조회(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_CARD_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 결제원장 조회(ORDER_ID) (TB_BPPAY_TRAN_R005)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN
- 입력: ORDER_ID

### 비플페이 가맹점정보 조회(BP_AFLT_ID) (TB_BP_AFLT_MNG_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 가맹점아이디 (BP_AFLT_ID)

### 가맹점명 조회(case 중식 딜리버리) (TB_CAFETERIA_ODR_R004)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_MY, TB_BPPAY_TRAN, TB_CAFETERIA_ODR
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 가맹점아이디 (BP_AFLT_ID)

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_TRAN_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_ODR_PDT, TB_BP_QR_MNG, TB_BPPAY_CARD_TRAN, TB_YGYO_ODR, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 식권제로페이 결제 정보(TRX_DT, TRX_SEQ) (TB_ZEROPAY_MT_ODR_R005)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_receipt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_smt_odr_receipt_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R013.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
