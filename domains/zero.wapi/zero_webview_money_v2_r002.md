# 웹뷰 API - 비플머니 상세 조회 ACTION(v2) (zero_webview_money_v2_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-50-10-S | 기본정보 | EXW-UWV-50-10-S-e01 |

## 입력

- 이용기관ID (ORG_ID)
- 요청봉투 (DATA)

## 출력

- 응답코드 (RES_CD)
- 응답메세지 (RES_MSG)
- 보유 총액 (MNY_CUR_PRICE)
- 보유 충전분 (CHRG_AMT)
- 보유 적립분 (ACU_AMT)
- 소멸예정 총액 (EXPR_TOT_AMT)
- 소멸예정 충전분 (EXPR_CHRG_AMT)
- 소멸예정 적립분 (EXPR_ACU_AMT)
- 소멸예정 건수 (TOTAL_CNT)
- 소멸예정 내역 반복부 (EXPR_REC)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비플머니 보유·소멸예정 구분별 금액 조회 (TB_MNY_TRAN_MST_R023)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_TRAN_MST, TB_MNY_ACU_DTL
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 소멸예정 비플머니 내역 조회 (전체) (TB_MNY_TRAN_MST_R022)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_v2_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_v2_r002_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R023.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R022.xml:10
