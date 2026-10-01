# 웹뷰 API - 결제수단 목록 조회 (webview_payable_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-60-10-S | 결제수단 선택 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 수수료 (COMM)
- CI
- 이용기관ID (ORG_ID)
- REQ_DATA

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- WELFARE_REC
- MEAL_REC
- MNY_INFO

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 엔터프라이즈 회원 부가정보 조회 (TB_MEMBER_ENT_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR
- 입력: SITE_CD, 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_payable_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_payable_list_r001_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
