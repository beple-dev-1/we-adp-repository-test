# 고객확인서등록_거래정보등록 (aml_reg_tran)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-20-10-S | 고객확인서등록_사장님정보등록(실제소유자) | 화면 |
| MCH-KYC-20-S | 고객확인서등록_사장님정보등록 | 화면 |
| MCH-KYC-50-10-S | 사업자 번호 확인 | MCH-KYC-50-10-S-e05 |

## 입력

- AML_SEQ
- AC
- CI

## 출력

- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- CI
- AC

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_tran.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_tran_act.jsp:17
