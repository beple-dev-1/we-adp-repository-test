# 웹뷰 API - 비플머니 출금 실행 ACTION(통합웹뷰버전) (zero_webview_money_withdraw_v1_c001)

- 처리: 읽기·쓰기
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
- 출금금액 (AMT)
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

### 계좌상세조회(BY 계좌번호) (TB_ACCOUNT_R008)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO)

### 출장관리 앱 > 회원별 비플머니 조회 (TB_MEMBER_MNY_R011)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 회원별 비플머니 업데이트 (TB_MEMBER_MNY_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_MNY
- 입력: CHRG_TP, MNY_ST, EXP_DTTM, REG_DTTM, BLC_TP, BLC_AMT, BLC_TP, BLC_AMT, REQ_WDRW_AMT, MNY_ID, MNY_MEMB_CD, 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 충전 및 출금 상세내역 원장 출금거래 조회 (TB_MNY_CHRG_WDRW_R001)

- 종류: SELECT
- 테이블: TB_MNY_CHRG_WDRW_DTL
- 입력: MNY_ID, 처리상태 (PROC_ST), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 거래구분 (TRX_TP)

### 비플머니 적립 내역 조회 (TB_MNY_ACU_DTL_R001)

- 종류: SELECT
- 테이블: TB_MNY_ACU_DTL
- 입력: MNY_ID, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플머니 충전 및 출금 상세내역 원장 등록 (TB_MNY_CHRG_WDRW_DTL_C001)

- 종류: INSERT
- 테이블: TB_MNY_CHRG_WDRW_DTL
- 입력: 거래번호 (TRX_SEQ), MNY_MEMB_CD, 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), 거래금액 (TRX_AMT), AFT_TRX_AMT, TRX_SIGN, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), ORG_TRX_SEQ, ORG_TRX_DT, 펌거래 일련번호 (FIRM_TRX_SEQ), FIRM_TRX_DT, 처리상태 (PROC_ST), 응답코드 (RES_CD), 응답메시지 (RES_MSG), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, CHRG_MSR_TP, CARD_TRX_DT, CARD_TRX_SEQ, BZP_TRX_SEQ

### 비플머니 통합 거래내역 원장 등록 (TB_MNY_TRAN_MST_C001)

- 종류: INSERT
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), TRX_AMT, TRX_SIGN, 처리상태 (PROC_ST), 가맹점ID (AFLT_ID), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, AFT_TRX_TOT_MNY_BLC_AMT, WDRW_TP

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_withdraw_v1_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_withdraw_v1_c001_act.jsp:40
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_ACU_DTL_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
