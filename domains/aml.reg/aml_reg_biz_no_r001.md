# 사업자번호 확인_고객확인서 제출내역 조회 (aml_reg_biz_no_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-50-10-S | 사업자 번호 확인 | MCH-KYC-50-10-S-e05 |

## 입력

- 사업자번호 (BIZ_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 휴대폰번호 (MOB_NO)
- CI
- AC

## 출력

- 가맹점 고객확인서 채번 (AML_SEQ)
- 처리상태 (PROC_ST)
- 작성상태 (PAGE_STEP)
- 만료 여부 (EXPIRED_YN)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 신청자 타입 (REG_USR_TP)
- 새로작성허용여부 (REWRITE_YN)

## 데이터 처리

### 직가맹원장 조회(biz_no, sub_biz_no) (TB_BP_AFLT_MNG_R027)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG
- 입력: 사업자번호 (BIZ_NO), DYNAMIC_0

### 고객확인서 정보 조회 (by biz_no) (TB_BP_AFLT_AML_R004)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML, TB_BP_AFLT_AML_EXM
- 입력: 사업자번호 (BIZ_NO)

- 공통 헤더 처리(이 업무 아님): TB_BP_AFLT_AML_TOKEN_R001, TB_BP_AFLT_AML_TOKEN_U001, TB_BP_AFLT_AML_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_biz_no_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_biz_no_r001_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R004.xml:10
