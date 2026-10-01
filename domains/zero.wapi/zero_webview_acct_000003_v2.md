# 웹뷰 API - 계좌 1원인증 확인 v2 (입금자명 뒤 3자리 검증) (zero_webview_acct_000003_v2)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-40-10-S | 계좌 관리 | 화면 |
| EXW-UWV-40-20-S | 계좌 등록 | 화면 |
| EXW-UWV-40-30-S | 계좌 인증 | EXW-UWV-40-30-S-e04 |
| EXW-UWV-40-40-S | 본인인증 | 화면 |
| EXW-UWV-40-50-S | 계좌 등록 완료 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 인증번호 (APV_NO)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 계좌검증내역 조회 (TB_ACCT_VERIFY_R001)

- 종류: SELECT
- 테이블: TB_ACCT_VERIFY
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 계좌검증거래 결과 반영 (TB_ACCT_VERIFY_U001)

- 종류: UPDATE
- 테이블: TB_ACCT_VERIFY
- 입력: VERIFY_TRX_DT, VERIFY_TRX_TM, VERIFY_TRX_SEQ, APV_NO, 처리상태 (PROC_ST), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 기타집계 등록 (TB_ETC_SUM_C001)

- 종류: INSERT
- 테이블: TB_ETC_SUM
- 입력: 거래일자 (TRX_DT), 거래구분 (TRX_TP), TOT_CNT, SUCC_CNT, SUCC_CNT2, FAIL_CNT

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_acct_000003_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_acct_000003_v2_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
