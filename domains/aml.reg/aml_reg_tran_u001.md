# 고객확인서등록_거래정보등록(act) (aml_reg_tran_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-40-S | 고객확인서등록_거래정보등록 | 화면 |

## 입력

- CRYPTO_TRAN_PURP
- CRYPTO_TRAN_PURP_TX
- CRYPTO_MNY_ORGIN
- CRYPTO_MNY_ORGIN_TX
- CRYPTO_CHK_YN
- REAL_ACCT_USE_YN
- REAL_ACCT_USE_PLN_YN
- CRYPTO_USR_CHK_YN
- CRYPTO_DEPOSIT_SPER_YN
- CRYPTO_TRAN_SPER_YN
- CRYPTO_RISK_NOTI_YN
- CRYPTO_BALN_SPER_YN
- CRYPTO_COMPLY_YN
- 가맹점 고객확인서 채번 (AML_SEQ)
- 사업자번호 (BIZ_NO)
- 회사가 제공하는 서비스 내용 (SVC_PROVIDE_TX)
- CI
- AC

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 고객확인서등록_거래정보등록 (TB_BP_AFLT_AML_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_AML
- 입력: CRYPTO_TRAN_PURP, CRYPTO_TRAN_PURP_TX, CRYPTO_MNY_ORGIN, CRYPTO_MNY_ORGIN_TX, CRYPTO_CHK_YN, REAL_ACCT_USE_YN, REAL_ACCT_USE_PLN_YN, CRYPTO_USR_CHK_YN, CRYPTO_DEPOSIT_SPER_YN, CRYPTO_TRAN_SPER_YN, CRYPTO_RISK_NOTI_YN, CRYPTO_BALN_SPER_YN, CRYPTO_COMPLY_YN, SVC_PROVIDE_TX, 작성상태 (PAGE_STEP), 가맹점 고객확인서 채번 (AML_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_tran_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_tran_u001_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U003.xml:10
