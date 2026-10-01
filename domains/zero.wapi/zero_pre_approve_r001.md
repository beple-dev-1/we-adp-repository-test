# QR/바코드 토큰 생성(결제웹뷰) (zero_pre_approve_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-60-30-S | CPM/MPM 결제 | 화면 |

## 입력

- MEMB_CD
- WAPI_APP_CD
- WAPI_ORG_ID
- USER

## 출력

- CODE
- MSG
- QR_CODE
- BAR_CODE
- TRX_DT
- TRX_SEQ

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 결제코드정보 입력 (TB_QR_MNG_C001)

- 종류: INSERT
- 테이블: TB_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), CI, 거래구분 (TRX_TP), ORG_CD, 가맹점ID (AFLT_ID), DVC_ID, FILLER, QR_TP, QR_CHECK_TXT, BAR_CHECK_TXT, QR_TOKEN, BAR_TOKEN, EVT_CD, MSG, 결제금액 (AMT), VAT, SVC_AMT, 이용기관구분 (ORG_TP), 이용기관ID (ORG_ID), 기관명 (ORG_NM), 사업자번호 (BIZ_NO), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), 카드번호 (CARD_NO), 부서코드 (DEPT_CD), 부서명 (DEPT_NM), 회계코드 (ACCO_CD), 회계명 (ACCO_NM), 계정코드 (ACNT_CD), 계정명 (ACNT_NM), 목코드 (MOK_CD), 목명 (MOK_NM), 한도일련번호 (LMT_SEQ), 한도명 (LMT_NM), 1회한도 (ONCE_LIM_AMT), 일한도 (DD_LIM_AMT), 월한도 (MM_LIM_AMT), 한도 (LMT_AMT), 1회한도사용여부 (ONCE_LMT_YN), 일한도사용여부 (DD_LMT_YN), 월한도사용여부 (MM_LMT_YN), 그룹명 (CLS_DSP_NM), 처리상태 (PROC_ST), 거래구분 (CP_TP), 앱코드 (APP_CD), CLS_DSP_SEQ, MNY_TRAN_YN, WAPI_TRAN_YN, WAPI_APP_CD, WAPI_ORG_ID, TGT_YN, MNY_CHRG_ACCT_NO, MNY_CHRG_BANK_CD, 대행정산여부 (PRXY_YN), TG_STTL_YN, APV_AUTH_DV, SETL_IMPS_RSN, SETL_IMPS_RSN_DTL, 정산여부 (CALC_YN), SETL_PSBL_TIME_YN, SALY_DUCT_USE_YN, POINT_EXP_YN, MEAL_REQ_DV, MEAL_TYPE, ONLINE_PSBL_YN, MEAL_REQ_NO, REQ_EMPL_NO, 소속회사명 (ORG_COMP_NM), MEAL_USE_NM, TERM_ID, PTNR_NO, ZERO_AMT_SETL_YN, CPMT_YN, CPMT_AMT, MIX_SETL_USE_YN, HUB_PAY_TYPE, WLFE_AGNC_YN, WLFE_AGNC_DV, API_APP_CD, UUID, 거래번호 (TNO), POINT_VAR_YN

### QR발급정보조회 5분내(by QR결제토큰) (TB_QR_MNG_R004)

- 종류: SELECT
- 테이블: TB_QR_MNG
- 입력: 거래일자 (TRX_DT), QR_TOKEN, BAR_TOKEN, ORG_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_pre_approve_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_pre_approve_r001_act.jsp:37
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R004.xml:10
