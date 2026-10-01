# 사업자 번호 확인 (aml_reg_biz_no)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-10-10-S | 본인인증 | 화면 |
| MCH-KYC-50-S | 고객확인서등록_1원계좌인증 | 화면 |

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
- 처리상태 (PROC_ST)
- 생년월일 (BRT_DT)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 사업자번호 (BIZ_NO)

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_biz_no.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_biz_no_act.jsp:29
