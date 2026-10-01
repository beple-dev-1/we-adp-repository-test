# 웹뷰 API - 계좌 ARS 결과확인(통합웹뷰버전) (zero_webview_acct_000005_v1)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-40-10-S | 계좌 관리 | 화면 |
| EXW-UWV-40-20-S | 계좌 등록 | 화면 |
| EXW-UWV-40-30-S | 계좌 인증 | 화면 |
| EXW-UWV-40-40-S | 본인인증 | EXW-UWV-40-40-S-e03 |
| EXW-UWV-40-50-S | 계좌 등록 완료 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)

## 출력

- 처리상태 (PROC_ST)
- 응답코드 (RSPS_CD)
- 응답메시지 (RSPS_MSG)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### ARS 거래 조회(BY KEY) (TB_CERTIFY_ARS_R001)

- 종류: SELECT
- 테이블: TB_CERTIFY_ARS
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_acct_000005_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_acct_000005_v1_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
