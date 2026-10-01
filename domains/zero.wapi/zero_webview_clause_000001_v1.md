# 웹뷰 API - 은행별 약관 목록 조회ACTION (통합웹뷰버전) (zero_webview_clause_000001_v1)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-40-10-S | 계좌 관리 | 화면 |
| EXW-UWV-40-20-S | 계좌 등록 | EXW-UWV-40-20-S-e04 |
| EXW-UWV-40-30-S | 계좌 인증 | 화면 |
| EXW-UWV-40-40-S | 본인인증 | 화면 |
| EXW-UWV-40-50-S | 계좌 등록 완료 | 화면 |

## 입력

- DATA
- 이용기관ID (ORG_ID)
- 은행코드 (BANK_CD)

## 출력

- REC
- 오픈뱅크 여부 (OPEN_BANK_YN)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 은행별 약관조회(다이나믹) (TB_CLAUSE_R005)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: DYNAMIC_0

### 은행 정보 조회 (TB_BANK_R006)

- 종류: SELECT
- 테이블: TB_BANK
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_clause_000001_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_clause_000001_v1_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10
