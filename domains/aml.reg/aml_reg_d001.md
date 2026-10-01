# 고객확인서_작성중인 내역 삭제 (aml_reg_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-50-10-S | 사업자 번호 확인 | 화면 |

## 입력

- 가맹점 고객확인서 채번 (AML_SEQ)
- AC
- CI

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서 삭제 (by seq ) (TB_BP_AFLT_AML_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_AML
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서 대표자 삭제 (by aml_seq) (TB_BP_AFLT_AML_CEO_D002)

- 종류: DELETE
- 테이블: TB_BP_AFLT_AML_CEO
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

### 고객확인서 대표자 삭제 (TB_BP_AFLT_AML_OWNER_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_AML_OWNER
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), DYNAMIC_0

### 고객확인서등록_서류첨부등록 (TB_BP_AFLT_AML_DOC_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_AML_DOC
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_d001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_D002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_D001.xml:10
