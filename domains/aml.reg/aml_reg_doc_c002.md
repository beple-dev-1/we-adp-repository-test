# 파일 업로드 (aml_reg_doc_c002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-40-10-S | 고객확인서등록_서류첨부등록 | 화면 |

## 입력

- 가맹점 고객확인서 채번 (AML_SEQ)
- CI
- AC
- REC
- FINANCIAL_SKIP_YN

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서등록_서류첨부등록 (TB_BP_AFLT_AML_DOC_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML_DOC
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서등록_서류첨부등록 (TB_BP_AFLT_AML_DOC_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_AML_DOC
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서등록_서류첨부등록 (TB_BP_AFLT_AML_DOC_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_DOC
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), DOC_SEQ, DOC_TP, DOC_ORD, FILE_SAV_FILE_NM, FILE_ORG_FILE_NM, FILE_PATH, FILE_EXT

### 고객확인서 (작성상태) 수정 (TB_BP_AFLT_AML_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: 작성상태 (PAGE_STEP), FINANCIAL_SKIP_YN, 처리상태 (PROC_ST), SUBMIT_DT, SUBMIT_TM, KYC_SEQ, KYC_DTTM, 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서_제출내역 등록 (TB_BP_AFLT_AML_HIST_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_HIST, TB_BP_AFLT_AML
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서_대표자_제출내역 등록 (TB_BP_AFLT_AML_CEO_HIST_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_CEO_HIST, TB_BP_AFLT_AML_CEO
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서_서류_제출내역 등록 (TB_BP_AFLT_AML_DOC_HIST_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_DOC_HIST, TB_BP_AFLT_AML_DOC
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서_소유자_제출내역 등록 (TB_BP_AFLT_AML_OWNER_HIST_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_OWNER_HIST, TB_BP_AFLT_AML_OWNER
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서_KYC수행이력 (TB_BP_AFLT_AML_KYC_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_KYC
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), KYC_SEQ, KYC_NO, CONDUCT_TP

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_doc_c002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_doc_c002_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_KYC_C001.xml:10
