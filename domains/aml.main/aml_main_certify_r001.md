# 본인인증 (aml_main_certify_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-10-10-S | 본인인증 | 화면 |

## 입력

- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 휴대폰번호 (MOB_NO)
- 사업자번호 (BIZ_NO)

## 출력

- 충건수 (TOT_CNT)
- ACCESS_TOKEN
- CI

## 데이터 처리

### 비플가맹점 토큰 등록/수정 (TB_BP_AFLT_AML_TOKEN_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_AML_TOKEN, UPSERT
- 입력: ACCESS_TOKEN, CI, CI, ACCESS_TOKEN

### 정상적으로 본인인증을 마치면 (TB_BP_AFLT_AML_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML
- 입력: CI

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_main_certify_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/main/aml_main_certify_r001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_TOKEN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R002.xml:10
