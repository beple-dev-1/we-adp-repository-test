# 비플오더 바코드 관리 원장 등록 (bp_order_pay_c003)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- REC_INDEX
- CARD_NO
- BP_AFLT_ID
- AMT
- SERVICE_CHNL

## 출력

- BP_QR_TRX_DT
- BP_QR_TRX_SEQ

## 데이터 처리

### 비플오더 QR코드 관리 원장 등록 (TB_BP_QR_MNG_C001)

- 종류: INSERT
- 테이블: TB_BP_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), CI, 거래구분 (TRX_TP), 가맹점아이디 (BP_AFLT_ID), QR코드 (QR_CODE), 결제금액 (AMT), VAT, SVC_AMT, 이용기관구분 (ORG_TP), 이용기관ID (ORG_ID), 기관명 (ORG_NM), 사업자번호 (BIZ_NO), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), 카드번호 (CARD_NO), 부서코드 (DEPT_CD), 부서명 (DEPT_NM), 회계코드 (ACCO_CD), 회계명 (ACCO_NM), 계정코드 (ACNT_CD), 계정명 (ACNT_NM), 목코드 (MOK_CD), 목명 (MOK_NM), 한도일련번호 (LMT_SEQ), 한도명 (LMT_NM), 그룹명 (CLS_DSP_NM), 1회한도 (ONCE_LIM_AMT), 일한도 (DD_LIM_AMT), 월한도 (MM_LIM_AMT), 한도 (LMT_AMT), 1회한도사용여부 (ONCE_LMT_YN), 일한도사용여부 (DD_LMT_YN), 월한도사용여부 (MM_LMT_YN), 처리상태 (PROC_ST), TG_STTL_YN, 대행정산여부 (PRXY_YN), APV_AUTH_DV, SETL_IMPS_RSN, SETL_IMPS_RSN_DTL, CLS_DSP_SEQ, 거래구분 (CP_TP), 정산여부 (CALC_YN), DANGOL_ZPP_ID, DANGOL_BLC_AMT, 앱코드 (APP_CD), SETL_PSBL_TIME_YN, SALY_DUCT_USE_YN, POINT_EXP_YN, MEAL_REQ_DV, MEAL_TYPE, ONLINE_PSBL_YN, MEAL_REQ_NO, REQ_EMPL_NO, MEAL_USE_NM, TERM_ID, PTNR_NO, 연락처 (TEL_NO), 소속회사명 (ORG_COMP_NM), MIX_SETL_USE_YN

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay_c003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_c003_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_QR_MNG_C001.xml:10
