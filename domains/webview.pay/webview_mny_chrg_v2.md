# 웹뷰 API - 비플머니 충전 (webview_mny_chrg_v2)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-10-C | 롯데 복지몰 | EXW-UWV-70-10-C-e06 |

## 입력

- 수수료 (COMM)
- REQ_DATA
- 이용기관ID (ORG_ID)
- PWD_RES_CD
- 결제후호출한앱으로복귀할때사용 (CALLBACK_URL)

## 출력

- MNY_CUR_PRICE
- TOTAL_CNT
- 비플머니 1회 충전 최소 금액 (MNY_CHRG_ONCE_MIN_AMT)
- 비플머니 1회 충전 최대 금액 (MNY_CHRG_ONCE_MAX_AMT)
- 비플머니 1일 충전 최대 금액 (MNY_CHRG_DAY_MAX_AMT)
- 비플머니 보유 한도 금액 (MNY_POSS_MAX_AMT)
- 일일 충전 금액 (DAY_TOTAMT)
- 비플머니 월 충전 최대 금액 (MNY_CHRG_MM_MAX_AMT)
- 월 충전 금액 (MON_TOTAMT)
- ACCT_REC
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 통합 비플머니 잔액 (ITGR_MNY_CUR_PRICE)

## 데이터 처리

### 웹뷰API 내역 조회 (TB_WEBVIEW_API_MNG_R001)

- 종류: SELECT
- 테이블: TB_WEBVIEW_API_MNG, TB_WEBVIEW_API_ORG
- 입력: 이용기관ID (ORG_ID)

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_mny_chrg_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_mny_chrg_v2_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
