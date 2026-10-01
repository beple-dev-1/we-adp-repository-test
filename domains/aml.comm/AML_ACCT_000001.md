# AML - 계좌 1원 인증 요청 (AML_ACCT_000001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-50-S | 고객확인서등록_1원계좌인증 | MCH-KYC-50-S-e10 |

## 입력

- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 생년월일 (BRT_DT)
- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)
- AC
- CI

## 출력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 계좌검증내역 조회- by trx_dt, trx_tm, proc_st (TB_ACCT_VERIFY_R002)

- 종류: SELECT
- 테이블: TB_ACCT_VERIFY
- 입력: 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), SEARCH_DATETIME, 처리상태 (PROC_ST)

### 계좌검증내역 등록 (TB_ACCT_VERIFY_C001)

- 종류: INSERT
- 테이블: TB_ACCT_VERIFY
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), 휴대폰번호 (MOB_NO), 회원명 (MEMB_NM), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), VERIFY_TP, VERIFY_LEN, PTST_TXT, APV_NO, VERIFY_TRX_DT, VERIFY_TRX_TM, VERIFY_TRX_SEQ, 처리상태 (PROC_ST), VERIFY_TYPE

### 기타집계 등록 (TB_ETC_SUM_C001)

- 종류: INSERT
- 테이블: TB_ETC_SUM
- 입력: 거래일자 (TRX_DT), 거래구분 (TRX_TP), TOT_CNT, SUCC_CNT, SUCC_CNT2, FAIL_CNT

### 계좌검증거래 결과 반영 (TB_ACCT_VERIFY_U001)

- 종류: UPDATE
- 테이블: TB_ACCT_VERIFY
- 입력: VERIFY_TRX_DT, VERIFY_TRX_TM, VERIFY_TRX_SEQ, APV_NO, 처리상태 (PROC_ST), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AML_ACCT_000001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/comm/AML_ACCT_000001_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10
