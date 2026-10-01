# 가맹점선택 (aml_main_aflt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KYC-10-10-20-S | 고객확인제도 수집정보 안내 | 화면 |
| MCH-KYC-10-10-S | 본인인증 | 화면 |

## 입력

- (없음)

## 출력

- REC

## 데이터 처리

### 비플가맹점 고객확인서 토큰조회 (TB_BP_AFLT_AML_TOKEN_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML_TOKEN
- 입력: CI, ACCESS_TOKEN

### 가맹점선택 (TB_BP_AFLT_AML_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_AML
- 입력: CI, CI

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_main_aflt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/main/aml_main_aflt_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_TOKEN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R003.xml:10
