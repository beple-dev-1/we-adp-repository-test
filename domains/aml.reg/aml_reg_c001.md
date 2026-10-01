# 고객확인서등록 (aml_reg_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-50-S | 고객확인서등록_1원계좌인증 | 화면 |

## 입력

- 사업자번호 (BIZ_NO)
- REG_USR_TP
- REG_USR_NM
- REG_USR_BRT_DT
- REG_USR_MOB_NO
- REG_USR_BANK_CD
- REG_USR_ACCT_NO
- 신청자 CI (REG_USR_CI)
- 신청자 성별 (REG_USR_GNDR)
- AC
- CI
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 출력

- 가맹점 고객확인서 채번 (AML_SEQ)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 계좌검증내역 조회 (TB_ACCT_VERIFY_R001)

- 종류: SELECT
- 테이블: TB_ACCT_VERIFY
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 고객확인서 정보 조회 (by biz_no) (TB_BP_AFLT_AML_R004)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML, TB_BP_AFLT_AML_EXM
- 입력: 사업자번호 (BIZ_NO)

### 고객확인서 (신청자타입, 계좌정보) 수정 (TB_BP_AFLT_AML_U006)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: 신청자 타입 (REG_USR_TP), REG_USR_BANK_CD, REG_USR_ACCT_NO, 작성상태 (PAGE_STEP), 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서 (디리인 정보) 수정 (TB_BP_AFLT_AML_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: DEPUTY_NM, DEPUTY_ENG_NM, DEPUTY_NATION, DEPUTY_DOMEST_YN, DEPUTY_FORGN_NATION, DEPUTY_ZIP_CD, DEPUTY_ADDR, DEPUTY_ADDR2, DEPUTY_JOB, DEPUTY_EMAIL, DEPUTY_RELATION, DEPUTY_RELATION_TX, 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서 신청자 정보 등록 (TB_BP_AFLT_AML_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), 사업자번호 (BIZ_NO), 처리상태 (PROC_ST), 신청자 타입 (REG_USR_TP), REG_USR_NM, REG_USR_BRT_DT, REG_USR_MOB_NO, 신청자 CI (REG_USR_CI), 신청자 성별 (REG_USR_GNDR), REG_USR_BANK_CD, REG_USR_ACCT_NO, 작성상태 (PAGE_STEP), REG_DTTM, MOD_DTTM

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_c001_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_C001.xml:10
