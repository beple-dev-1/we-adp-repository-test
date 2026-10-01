# 웹뷰 API - 계좌 삭제(통합웹뷰버전) (zero_webview_acct_000008_v1)

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
- 계좌일련번호 (SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)

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

### 계좌상세조회(BY KEY) (TB_ACCOUNT_R002)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌조회(하이브리드 조인) (TB_ACCOUNT_R022)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 거래번호 (SEQ), 회원코드 (MEMB_CD)

### 하이브리드 은행정보 조회(dynamic) (TB_HBRD_BANK_R001)

- 종류: SELECT
- 테이블: TB_HBRD_BANK
- 입력: DYNAMIC_0

### 하이브리드 계좌 삭제 (TB_ACCOUNT_HB_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌정보 갱신 (하이브리드 적용) (TB_ACCOUNT_U004)

- 종류: UPDATE
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: HD_ORG_CD, 회원코드 (MEMB_CD), PG_ORG_CD, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), HD_REG_YN, HD_REG_DTTM, 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌삭제(BY KEY) (TB_ACCOUNT_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 주계좌설정(최근등록계좌) (TB_ACCOUNT_U003)

- 종류: UPDATE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_acct_000008_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_acct_000008_v1_act.jsp:37
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HBRD_BANK_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10
