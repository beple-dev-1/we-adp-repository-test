# 엔터프라이즈_비플머니 출금 > 출금거래등록 (ent_zero_mny_wdrw_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MNY-10-30-S | 엔터프라이즈_비플머니 출금 | 화면 |

## 입력

- AMT
- BANK_CD
- ACCT_NO

## 출력

- RES_CD
- RES_MSG

## 데이터 처리

### 비플머니 원장 조회(MEMB_CD) (TB_MEMBER_MNY_R003)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), DYNAMIC_0

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

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_wdrw_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_wdrw_c001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_ACU_DTL_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
