# 고객확인서등록_사장님정보등록(act) (aml_reg_ceo_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-20-S | 고객확인서등록_사장님정보등록 | 화면 |

## 입력

- 가맹점 고객확인서 채번 (AML_SEQ)
- AC
- CI
- 수정 여부 (MODIFY_YN)
- REC

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서 대표자 등록/수정 (TB_BP_AFLT_AML_CEO_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_CEO
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), CEO_SEQ, 대표자 성명 (CEO_NM), CEO_ENG_NM, CEO_EMAIL, CEO_ZIP_CD, CEO_ADDR, CEO_ADDR2, CEO_NATION, CEO_BRT_DT, CEO_MOB_NO, CEO_GNDR, CEO_DOMEST_YN, CEO_FORGN_NATION, 대포자 직업 (CEO_JOB)

### 고객확인서 (작성상태) 수정 (TB_BP_AFLT_AML_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: 작성상태 (PAGE_STEP), FINANCIAL_SKIP_YN, 처리상태 (PROC_ST), SUBMIT_DT, SUBMIT_TM, KYC_SEQ, KYC_DTTM, 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_u001_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U004.xml:10
