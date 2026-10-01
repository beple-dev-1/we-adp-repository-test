# 고객확인서등록_사장님정보등록 (aml_reg_ceo)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-20-10-S | 고객확인서등록_사장님정보등록(실제소유자) | 화면 |
| MCH-KYC-30-S | 고객확인서등록_기본정보등록 | 화면 |
| MCH-KYC-50-10-S | 사업자 번호 확인 | MCH-KYC-50-10-S-e05 |

## 입력

- AML_SEQ
- AC
- CI
- 수정 여부 (MODIFY_YN)

## 출력

- AML_SEQ
- 사업자번호 (BIZ_NO)
- 처리상태 (PROC_ST)
- EXPIRED_DT
- REG_USR_TP
- REG_USR_NM
- REG_USR_BRT_DT
- REG_USR_MOB_NO
- REG_USR_BANK_CD
- REG_USR_ACCT_NO
- KYC_SEQ
- 작성상태 (PAGE_STEP)
- CI
- AC
- AML_CEO_REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서 대표자 리스트 조회 (TB_BP_AFLT_AML_CEO_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML_CEO
- 입력: 가맹점 고객확인서 채번 (AML_SEQ), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_R001.xml:10
