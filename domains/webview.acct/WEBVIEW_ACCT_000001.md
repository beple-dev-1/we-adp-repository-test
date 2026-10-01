# 웹뷰 API - 사용자 계좌목록 조회 (WEBVIEW_ACCT_000001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-10-10-S | 계좌 관리 | 화면 |
| BPG-PGM-10-20-S | 계좌 선택 | 화면 |
| BPG-PGM-10-30-S | 계좌번호 입력 | 화면 |
| BPG-PGM-10-40-S | 계좌 등록 완료 | BPG-PGM-10-40-S-e04 |
| BPG-PGM-10-50-S | 오픈뱅킹 약관 동의 | 화면 |
| BPG-PGM-10-60-S | 오픈뱅킹 금융정보조회 약관 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 조회건수 (INQ_CNT)
- 계좌목록 (ACCT_LIST)

## 데이터 처리

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
