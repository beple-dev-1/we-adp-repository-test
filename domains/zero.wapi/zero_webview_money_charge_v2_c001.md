# 웹뷰 API - 비플머니 충전 실행 ACTION(v2) (zero_webview_money_charge_v2_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-50-20-S | 충전 | 화면 |
| EXW-UWV-70-30-20-C | 비플머니 충전 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 충전금액 (AMT)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 충전금액 (CHRG_AMT)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 사용자 정보 변경 (TB_MEMBER_APP_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, SMALL_YN, SMALL_JOIN_DTTM, 소상공인 사업자번호 (SMALL_BIZ_NO), QCK_PAY_YN, QCK_UPD_DTTM, MNY_MEMB_CD, OS_VER, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, RE_APRV_YN, RE_APRV_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플머니 일일 충전 금액 조회 (TB_MNY_TRAN_MST_R002)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

### 비플머니 월 충전 금액 조회 (TB_MNY_TRAN_MST_R009)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

### 비플머니 총 잔액 조회(전체 앱 통합 한도) (TB_MEMBER_MNY_R014)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 비플머니 통합 거래내역 원장 등록 (TB_MNY_TRAN_MST_C001)

- 종류: INSERT
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), TRX_AMT, TRX_SIGN, 처리상태 (PROC_ST), 가맹점ID (AFLT_ID), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, AFT_TRX_TOT_MNY_BLC_AMT, WDRW_TP

### 비플머니 충전 및 출금 상세내역 원장 등록 (TB_MNY_CHRG_WDRW_DTL_C001)

- 종류: INSERT
- 테이블: TB_MNY_CHRG_WDRW_DTL
- 입력: 거래번호 (TRX_SEQ), MNY_MEMB_CD, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), 거래금액 (TRX_AMT), AFT_TRX_AMT, TRX_SIGN, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), ORG_TRX_SEQ, ORG_TRX_DT, 펌거래 일련번호 (FIRM_TRX_SEQ), FIRM_TRX_DT, 처리상태 (PROC_ST), 응답코드 (RES_CD), 응답메시지 (RES_MSG), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, CHRG_MSR_TP, CARD_TRX_DT, CARD_TRX_SEQ, BZP_TRX_SEQ

### 하이브리드 계좌원장 조회 (by MEMB_CD, PG_ORG_CD, ACCT_NO) (TB_ACCOUNT_HB_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), PG_ORG_CD, 계좌번호 (ACCT_NO), 은행코드 (BANK_CD)

### 비플머니 충전 및 출금 상세내역 업데이트 (TB_MNY_CHRG_WDRW_DTL_U001)

- 종류: UPDATE
- 테이블: TB_MNY_CHRG_WDRW_DTL
- 입력: 거래구분 (TRX_TP), AFT_TRX_AMT, ORG_TRX_SEQ, ORG_TRX_DT, 펌거래 일련번호 (FIRM_TRX_SEQ), FIRM_TRX_DT, 처리상태 (PROC_ST), 응답코드 (RES_CD), 응답메시지 (RES_MSG), CHRG_MSR_TP, CARD_TRX_DT, CARD_TRX_SEQ, MNY_ID, 거래일자 (TRX_DT), 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 원장 등록 (TB_MEMBER_MNY_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_MNY
- 입력: MNY_ID, MNY_MEMB_CD, 앱코드 (APP_CD), CHRG_TP, CHRG_AMT, BLC_AMT, MNY_ST, EXP_DTTM, UPD_DTTM, REQ_WDRW_AMT

### 회원별 비플머니 조회(Dynamic) (TB_MEMBER_MNY_R006)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 만료일 업데이트 (TB_MEMBER_MNY_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_MNY
- 입력: EXP_DTTM, UPD_DTTM, MNY_MEMB_CD, MNY_ST, CHRG_TP, MNY_ID

### 비플머니 통합 거래내역 수정 (TB_MNY_TRAN_MST_U001)

- 종류: UPDATE
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래구분 (TRX_TP), 처리상태 (PROC_ST), AFT_TRX_TOT_MNY_BLC_AMT, MNY_ID, 거래일자 (TRX_DT), 앱코드 (APP_CD), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_charge_v2_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_charge_v2_c001_act.jsp:44
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_U001.xml:10
