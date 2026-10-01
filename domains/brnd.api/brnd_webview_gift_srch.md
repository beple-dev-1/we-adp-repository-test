# 브랜드상품권 웹뷰 API - 상품권 검색화면/action (brnd_webview_gift_srch)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-10-20-S | 브랜드상품권 웹뷰 API - 상품권 검색화면/action | 화면 |

## 입력

- TOKEN
- REF_URL
- KEYWORD
- CATE_BGC_ID
- REF_GIFT_TYPE
- REF_MIN_AMT
- REF_MAX_AMT
- REF_SORTING

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- REC
- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- SRCH_HIST_REC
- BGC_REC

## 데이터 처리

### 최근검색내역 조회 (TB_AFLT_SRCH_HIST_R001)

- 종류: SELECT
- 테이블: TB_AFLT_SRCH_HIST
- 입력: MENU_TYPE, 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_srch.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_srch_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10
