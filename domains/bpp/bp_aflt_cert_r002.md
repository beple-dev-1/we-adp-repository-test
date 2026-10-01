# bp_aflt_cert_r002 (bp_aflt_cert_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-40-S | 가맹점 정보 입력 | 화면 |

## 입력

- 사업자번호 (BIZ_NO)

## 출력

- 사업자번호 (BIZ_NO)
- TEL_NO

## 데이터 처리

### 가맹점 조회 (by BIZ_NO) (TB_AFFILIATION_MNG_R025)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG
- 입력: 사업자번호 (BIZ_NO)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_cert_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_cert_r002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R025.xml:10
