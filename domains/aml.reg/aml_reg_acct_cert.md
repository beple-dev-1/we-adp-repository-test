# 고객확인서등록_1원계좌인증 (aml_reg_acct_cert)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-30-S | 고객확인서등록_기본정보등록 | 화면 |
| MCH-KYC-50-10-S | 사업자 번호 확인 | MCH-KYC-50-10-S-e05 |
| MCH-KYC-60-S | 고객확인서등록_대리인정보입력 | 화면 |

## 입력

- CI
- AC
- 생년월일 (BRT_DT)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 성별 (GNDR)
- 사업자번호 (BIZ_NO)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- CI
- AC
- 사업자번호 (BIZ_NO)

## 데이터 처리

### 고객확인서 정보 조회 (TB_BP_AFLT_AML_R001)

- 종류: SELECT
- 테이블: TB_CTGRY_CODE, TB_BP_AFLT_AML
- 입력: 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_acct_cert.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_acct_cert_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R001.xml:10
