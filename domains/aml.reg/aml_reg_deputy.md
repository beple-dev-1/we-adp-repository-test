# 고객확인서등록_대리인정보입력 (aml_reg_deputy)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-30-S | 고객확인서등록_기본정보등록 | 화면 |
| MCH-KYC-50-10-S | 사업자 번호 확인 | MCH-KYC-50-10-S-e05 |
| MCH-KYC-50-S | 고객확인서등록_1원계좌인증 | 화면 |

## 입력

- AML_SEQ
- AC
- CI
- 수정 여부 (MODIFY_YN)

## 출력

- AML_SEQ
- AC
- 사업자번호 (BIZ_NO)
- 처리상태 (PROC_ST)
- EXPIRED_DT
- REG_USR_TP
- REG_USR_NM
- REG_USR_BRT_DT
- REG_USR_MOB_NO
- REG_USR_BANK_CD
- REG_USR_ACCT_NO
- DEPUTY_NM
- DEPUTY_ENG_NM
- DEPUTY_NATION
- DEPUTY_DOMEST_YN
- DEPUTY_FORGN_NATION
- DEPUTY_ADDR
- DEPUTY_ADDR2
- DEPUTY_ZIP_CD
- DEPUTY_JOB
- DEPUTY_RELATION
- DEPUTY_RELATION_TX
- CORP_NO
- SUBMIT_DT
- SUBMIT_TM
- KYC_SEQ
- KYC_DTTM
- CI
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- DEPUTY_EMAIL

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_deputy.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_deputy_act.jsp:17
