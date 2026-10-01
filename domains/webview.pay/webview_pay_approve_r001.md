# 웹뷰 API - QR 및 한도 검증 (webview_pay_approve_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-60-20-S | MPM 결제요청 | 화면 |

## 입력

- QR코드 (QR_CODE)
- 결제유형 (PAY_TYPE)
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 수수료 (COMM)
- REQ_DATA
- 이용기관ID (ORG_ID)
- 카드번호 (CARD_NO)

## 출력

- 가맹점명 (AFLT_NM)
- MNY_CUR_PRICE
- MNY_CHRG_ONCE_MIN_AMT
- MNY_CHRG_ONCE_MAX_AMT
- MNY_CHRG_DAY_MAX_AMT
- MNY_CHRG_MON_MAX_AMT
- MNY_POSS_MAX_AMT
- MNY_DAY_TOT_CHRG_AMT
- MNY_MON_TOT_CHRG_AMT
- MNY_CHRG_ACCT_REC
- 한도 (LMT_AMT)
- 한도명 (LMT_NM)
- IMG_URL
- ORDER_ID
- ORDER_DT
- 통합 비플머니 잔액 (ITGR_MNY_CUR_PRICE)

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 가맹점 및 QR코드 조회 (TB_AFFILIATION_MNG_R003)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 제로페이 가맹점QR정보 조회 (TB_AFFILIATION_QR_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_QR
- 입력: AFLT_ID, QR_CODE

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

### 엔터프라이즈 회원 부가정보 조회 (TB_MEMBER_ENT_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR
- 입력: SITE_CD, 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 식권제로페이 주문원장 거래내역 등록 (TB_ZEROPAY_MT_ODR_C001)

- 종류: INSERT
- 테이블: TB_ZEROPAY_MT_ODR
- 입력: ORDER_DT, ORDER_ID, 거래번호 (SEQ), 회원코드 (MEMB_CD), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 결제금액 (PAY_AMT), 한도 (LMT_AMT), 카드번호 (CARD_NO), 고객명 (USER_NM), CLS_DSP_SEQ, 그룹명 (CLS_DSP_NM), 한도일련번호 (LMT_SEQ), 한도명 (LMT_NM), 부서명 (DEPT_NM), 부서코드 (DEPT_CD), TGT_YN, MAIN_YN, REG_DTTM, 거래구분 (TRX_TP)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_pay_approve_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_pay_approve_r001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10
