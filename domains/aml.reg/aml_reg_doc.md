# 고객확인서등록_서류첨부등록 (aml_reg_doc)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-50-10-S | 사업자 번호 확인 | MCH-KYC-50-10-S-e05 |

## 입력

- 가맹점 고객확인서 채번 (AML_SEQ)
- CI
- AC

## 출력

- 사업자번호 (BIZ_NO)
- 가맹점 고객확인서 채번 (AML_SEQ)
- AC
- CI
- CNT
- 법인구분 (CORP_TP)
- 신청자 타입 (REG_USR_TP)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서등록_사장님정보 (count) (TB_BP_AFLT_AML_OWNER_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML_OWNER, TB_BP_AFLT_AML_CEO
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_doc.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_doc_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_R001.xml:10
