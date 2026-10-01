# 웹뷰 API - 비플머니 충전 v2 조회 (zero_webview_money_charge_v2_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-50-20-S | 충전 | 화면 |
| EXW-UWV-70-30-20-C | 비플머니 충전 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청봉투 (DATA)

## 출력

- 응답코드 (RES_CD)
- 응답메세지 (RES_MSG)
- 앱별 비플머니 잔액 (MNY_CUR_PRICE)
- 통합 비플머니 잔액 (ITGR_MNY_CUR_PRICE)
- 1회 최소 충전금액 (MNY_CHRG_ONCE_MIN_AMT)
- 1회 최대 충전금액 (MNY_CHRG_ONCE_MAX_AMT)
- 1일 최대 충전금액 (MNY_CHRG_DAY_MAX_AMT)
- 월 최대 충전금액 (MNY_CHRG_MM_MAX_AMT)
- 최대 보유 한도 (MNY_POSS_MAX_AMT)
- 일 충전 누계 (DAY_TOTAMT)
- 월 충전 누계 (MON_TOTAMT)
- 계좌 건수 (TOTAL_CNT)
- 충전계좌 반복부 (ACCT_REC)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 총 잔액 조회(전체 앱 통합 한도) (TB_MEMBER_MNY_R014)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 비플머니 일일 충전 금액 조회 (TB_MNY_TRAN_MST_R002)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

### 비플머니 월 충전 금액 조회 (TB_MNY_TRAN_MST_R009)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_charge_v2_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_charge_v2_r001_act.jsp:36
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
