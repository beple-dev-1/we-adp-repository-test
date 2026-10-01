# 웹뷰 API - 휴대폰본인인증 약관 (webview_lgn_mobile_clause)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-20-10-10-S | 통합PG 거래승인번호 재설정 | 화면 |

## 입력

- 거래구분 (TRX_TP)
- 뒤로가기버튼 유무 (BACK_YN)
- 앱코드 (APP_CD)

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_lgn_mobile_clause.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bzp/com/webview_lgn_mobile_clause_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
