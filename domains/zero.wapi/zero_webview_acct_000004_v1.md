# 웹뷰 API - 계좌 ARS 요청(통합웹뷰버전) (zero_webview_acct_000004_v1)

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

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- ARS응답일자 (ARS_TR_DT)
- ARS응답번호 (ARS_TR_NO)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### ARS 거래 등록 (TB_CERTIFY_ARS_C001)

- 종류: INSERT
- 테이블: TB_CERTIFY_ARS
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), 회원명 (MEMB_NM), 휴대폰번호 (MOB_NO), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), TTS_MENT1, TTS_MENT2, ARS_ORG_CD, ARS_SECR_KEY, 거래코드 (TRX_CD), AUTH_PWD, CERTION_TID, EVDC_FILE_NM, 응답코드 (RSPS_CD), 응답메세지 (RSPS_MSG), 처리상태 (PROC_ST), OPEN_YN

### 기타집계 등록 (TB_ETC_SUM_C001)

- 종류: INSERT
- 테이블: TB_ETC_SUM
- 입력: 거래일자 (TRX_DT), 거래구분 (TRX_TP), TOT_CNT, SUCC_CNT, SUCC_CNT2, FAIL_CNT

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_acct_000004_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_acct_000004_v1_act.jsp:39
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
