# 웹뷰 API - 계좌 등록(통합웹뷰버전) (zero_webview_acct_000006_v1)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-40-10-S | 계좌 관리 | 화면 |
| EXW-UWV-40-20-S | 계좌 등록 | 화면 |
| EXW-UWV-40-30-S | 계좌 인증 | 화면 |
| EXW-UWV-40-40-S | 본인인증 | 화면 |
| EXW-UWV-40-50-S | 계좌 등록 완료 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 제공동의여부 (PROV_AGR_YN)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### ARS 거래 조회(BY KEY) (TB_CERTIFY_ARS_R001)

- 종류: SELECT
- 테이블: TB_CERTIFY_ARS
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 은행 정보 조회 (TB_BANK_R006)

- 종류: SELECT
- 테이블: TB_BANK
- 입력: DYNAMIC_0

### 계좌등록 (TB_ACCOUNT_C001)

- 종류: INSERT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), 회원코드 (MEMB_CD), PAYR_NO, EVDC_TP, EVDC_FILE_NM, EVDC_DTTM, OPEN_MEMB_NO, OPEN_ACCT_NO, OPEN_ACCT_INFO

### 하이브리드 은행정보 조회(dynamic) (TB_HBRD_BANK_R001)

- 종류: SELECT
- 테이블: TB_HBRD_BANK
- 입력: DYNAMIC_0

### 계좌상세조회(BY 계좌번호) (TB_ACCOUNT_R008)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO)

### 하이브리드 계좌원장 조회 (by MEMB_CD, PG_ORG_CD, ACCT_NO) (TB_ACCOUNT_HB_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), PG_ORG_CD, 계좌번호 (ACCT_NO), 은행코드 (BANK_CD)

### 하이브리드 계좌 원장 갱신 (TB_ACCOUNT_HB_U001)

- 종류: UPDATE
- 테이블: TB_ACCOUNT_HB
- 입력: USR_SEQ_NO, FT_USE_NO, USR_PAYR_NO, USR_BNK_TRAN_ID, USR_BNK_TRAN_DATE, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), FIRM_JOIN_YN, OBANK_JOIN_YN, TERM_AGR_YN, TERM_AGR_DTTM, 회원코드 (MEMB_CD), PG_ORG_CD, 거래번호 (SEQ)

### 하이브리드 오픈뱅킹 원장 등록 (TB_ACCOUNT_HB_C001)

- 종류: INSERT
- 테이블: TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), PG_ORG_CD, 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), USR_SEQ_NO, FT_USE_NO, USR_PAYR_NO, USR_BNK_TRAN_ID, USR_BNK_TRAN_DATE, FIRM_JOIN_YN, OBANK_JOIN_YN, TERM_AGR_YN, TERM_AGR_DTTM

### 계좌정보 갱신 (하이브리드 적용) (TB_ACCOUNT_U004)

- 종류: UPDATE
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: HD_ORG_CD, 회원코드 (MEMB_CD), PG_ORG_CD, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), HD_REG_YN, HD_REG_DTTM, 회원코드 (MEMB_CD), 거래번호 (SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_acct_000006_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_acct_000006_v1_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HBRD_BANK_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U004.xml:10
