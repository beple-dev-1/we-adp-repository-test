# 휴대폰본인인증 약관 (lgn_mobile_clause)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-KID-30-S | 보호자가 앱 미설치자인경우 호출되는 웹페이지 | 화면 |
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | 화면 |
| MCH-AFLT-70-S | 본인인증 | 화면 |
| MCH-KSQR-70-S | KSQR온가신 본인인증 | 화면 |
| MCH-KYC-10-10-S | 본인인증 | 화면 |

## 입력

- 거래구분 (TRX_TP)
- 뒤로가기버튼 유무 (BACK_YN)

## 출력

- TITLE
- CTNT

## 데이터 처리

### 약관조회 (TB_CLAUSE_R001)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), CLS_CD, 이용기관ID (ORG_ID), CLS_CD, 이용기관ID (ORG_ID), CLS_CD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_mobile_clause.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_mobile_clause_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
