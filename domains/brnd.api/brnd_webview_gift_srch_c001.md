# 브랜드상품권 웹뷰 API - 상품권 검색내역 저장 action (brnd_webview_gift_srch_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-10-20-S | 브랜드상품권 웹뷰 API - 상품권 검색화면/action | 화면 |

## 입력

- MENU_TYPE
- SRCH_TYPE
- SRCH_WORD
- TOKEN

## 출력

- (없음)

## 데이터 처리

### 최근검색 등록 (TB_AFLT_SRCH_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFLT_SRCH_HIST
- 입력: MENU_TYPE, 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD), SRCH_WORD

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_srch_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_srch_c001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
