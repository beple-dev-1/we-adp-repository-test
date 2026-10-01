# 웹뷰 API - 사용자 계좌목록 조회ACTION(통합웹뷰버전) (zero_webview_acct_000001_v1)

- 처리: 읽기
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
- DATA

## 출력

- 조회건수 (INQ_CNT)
- 계좌목록 (ACCT_LIST)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_acct_000001_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_acct_000001_v1_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
