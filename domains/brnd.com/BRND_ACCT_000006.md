# 브랜드상품권 웹뷰 API - 계좌등록 (BRND_ACCT_000006)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-30-S | 브랜드상품권 웹뷰 API - 계좌관리 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 오픈뱅킹 검증번호 (VERIFY_NO)
- 오픈뱅킹인증일자 (VERIFY_TR_DT)
- 오픈뱅킹 검증거래번호 (VERIFY_TR_NO)
- 오픈뱅킹ARS승인일자 (ARS_TR_DT)
- 오픈뱅킹ARS거래번호 (ARS_TR_NO)
- 개인정보 수집 이용 및 제공 동의 (PROV_AGR_YN)
- TOKEN

## 출력

- (없음)

## 데이터 처리

### ARS 거래 조회(BY KEY) (TB_CERTIFY_ARS_R001)

- 종류: SELECT
- 테이블: TB_CERTIFY_ARS
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 은행 정보 조회 (TB_BANK_R006)

- 종류: SELECT
- 테이블: TB_BANK
- 입력: DYNAMIC_0

### 계좌등록 (TB_ACCOUNT_C001)

- 종류: INSERT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), 회원코드 (MEMB_CD), PAYR_NO, EVDC_TP, EVDC_FILE_NM, EVDC_DTTM, OPEN_MEMB_NO, OPEN_ACCT_NO, OPEN_ACCT_INFO

### 계좌상세조회(BY 계좌번호) (TB_ACCOUNT_R008)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO)

### 하이브리드 계좌원장 조회 (by MEMB_CD, PG_ORG_CD, ACCT_NO) (TB_ACCOUNT_HB_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), PG_ORG_CD, 계좌번호 (ACCT_NO), 은행코드 (BANK_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000006.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000006_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
