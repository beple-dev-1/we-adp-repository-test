# 웹뷰 API - 약관 본문 조회(통합웹뷰버전) (zero_webview_clause_000002_v1)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-40-10-S | 계좌 관리 | 화면 |
| EXW-UWV-40-20-S | 계좌 등록 | 화면 |
| EXW-UWV-40-30-S | 계좌 인증 | 화면 |
| EXW-UWV-40-40-S | 본인인증 | 화면 |
| EXW-UWV-40-50-S | 계좌 등록 완료 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 약관제공기관ID (CLAUSE_ORG_ID)
- 사용구분 (USE_TP)
- 은행코드 (BANK_CD)
- 약관구분 (CLS_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 약관제공기관ID (ORG_ID)
- 약관구분 (CLS_CD)
- 일련번호 (SEQ)
- 제목 (TITLE)
- 내용 (CTNT)
- 시행일자 (APPLY_DT)
- 사용구분 (USE_TP)
- 은행코드 (BANK_CD)

## 데이터 처리

### 은행별 약관조회(다이나믹) (TB_CLAUSE_R005)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: DYNAMIC_0

### 약관상세조회 (TB_CLAUSE_R004)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 사용구분 (USE_TP), 은행코드 (BANK_CD), 이용기관ID (ORG_ID), 약관 코드 (CLS_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_clause_000002_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_clause_000002_v1_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10
