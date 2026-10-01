# 고객확인서등록_대리인정보입력(act) (aml_reg_deputy_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-60-S | 고객확인서등록_대리인정보입력 | 화면 |

## 입력

- AML_SEQ
- AC
- CI
- 수정 여부 (MODIFY_YN)
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
- DEPUTY_EMAIL

## 출력

- ERROR_MSG
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서 (디리인 정보) 수정 (TB_BP_AFLT_AML_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: DEPUTY_NM, DEPUTY_ENG_NM, DEPUTY_NATION, DEPUTY_DOMEST_YN, DEPUTY_FORGN_NATION, DEPUTY_ZIP_CD, DEPUTY_ADDR, DEPUTY_ADDR2, DEPUTY_JOB, DEPUTY_EMAIL, DEPUTY_RELATION, DEPUTY_RELATION_TX, 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_deputy_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_deputy_u001_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U001.xml:10
