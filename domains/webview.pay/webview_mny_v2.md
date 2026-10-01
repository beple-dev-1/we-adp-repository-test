# 롯데_복지몰 서비스 > 비플머니 웹뷰 > 기본정보 (webview_mny_v2)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-10-C | 롯데 복지몰 | 화면 |

## 입력

- 요청공통부 (COMM)
- 기관코드 (ORG_ID)
- 요청개별부 (REQ_DATA)

## 출력

- CANCEL_URL
- FAIL_URL
- CI
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 스마트캠퍼스 비플회원여부 (SCS_JOIN)

## 데이터 처리

### 웹뷰API 내역 조회 (TB_WEBVIEW_API_MNG_R001)

- 종류: SELECT
- 테이블: TB_WEBVIEW_API_MNG, TB_WEBVIEW_API_ORG
- 입력: 이용기관ID (ORG_ID)

### 사용자ID로 CI 조회 (TB_MEMBER_R038)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_MEMBER
- 입력: 앱코드 (APP_CD), ORG_USER_ID

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 웹뷰 거래내역 수정 (TB_WEBVIEW_API_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_WEBVIEW_API_TRAN
- 입력: REQ_DATA, RES_DATA, 처리상태 (PROC_ST), 응답코드 (RES_CD), 응답메시지 (RES_MSG), ZT_TRX_DT, ZT_TRX_SEQ, 회원코드 (MEMB_CD), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_mny_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_mny_v2_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R038.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_TRAN_U001.xml:10
