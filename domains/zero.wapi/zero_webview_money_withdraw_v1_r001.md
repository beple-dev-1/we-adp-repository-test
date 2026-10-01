# 웹뷰 API - 출금계좌 및 잔액조회 ACTION(통합웹뷰버전) (zero_webview_money_withdraw_v1_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-50-30-S | 출금 | 화면 |
| EXW-UWV-70-30-60-C | 비플머니 출금 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)

## 출력

- 출금가능금액 (TOT_WDRW_AMT)
- 총보유금액 (MNY_CUR_PRICE)
- 계좌건수 (TOTAL_CNT)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- ACCT_REC

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 출장관리 앱 > 출금가능 비플머니 조회 (TB_MEMBER_MNY_R010)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 계좌목록조회(MEMB_CD) (TB_ACCOUNT_R024)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_withdraw_v1_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_withdraw_v1_r001_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R010.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R024.xml:10
