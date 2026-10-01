# 브랜드 상품권 구매내역 조회 (brnd_webview_gift_purchase_hist_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-20-30-S | 브랜드 상품권 구매내역 조회 (hist) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- KIND_TYPE
- REQ_TYPE
- 페이지번호 (PAGE_NO)
- PAGE_SIZE
- END_TIME
- STR_TIME
- TOKEN

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- 페이지번호 (PAGE_NO)
- IS_NEXT_PAGE
- AVAILABLE_REC

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_purchase_hist_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_purchase_hist_r001_act.jsp:37
