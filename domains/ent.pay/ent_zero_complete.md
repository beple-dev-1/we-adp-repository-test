# 엔터프라이즈_제로페이 영수증 (ent_zero_complete)

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
- 거래코드 (TRX_CD)
- 업무코드 (BIZ_CD)

## 출력

- TRX_CD
- BIZ_CD
- 거래번호 (TRX_SEQ)
- 결제금액 (AMT)
- VAT
- SVC_AMT
- 메시지 (MSG)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 카드번호 (CARD_NO)
- 목명 (MOK_NM)
- AFLT_NM
- AFLT_SP_NM
- REPR_NM
- ZIP_CD
- ADDRS
- ADDRS2
- TEL_NO
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
- FIRM_AMT
- PREPAID_AMT
- COMPLEX_YN
- BPPG_YN
- PAY_MEASURE_TP
- POINT_EXP_YN
- SALY_TRAN_YN
- TGTREC

## 데이터 처리

### 결제내역 상세조회(영수증) (TB_ZEROPAY_TRAN_R007)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), 거래코드 (TRX_CD), DYNAMIC_0

### QR정보조회 (TB_QR_MNG_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플PG 거래내역 조회 (QR_TRX_DT, QR_TRX_SEQ) (TB_ZEROPAY_BPPG_TRAN_R006)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_TRAN
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), DYNAMIC_0

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 식권제로페이 결제 정보(TRX_DT, TRX_SEQ) (TB_ZEROPAY_MT_ODR_R005)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 앱코드 (APP_CD)

### 복합결제거래내역 원장 조회 (TB_ZEROPAY_COMPLEX_TRAN_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_complete_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
