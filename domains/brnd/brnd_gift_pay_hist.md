# 브랜드 상품권 결제내역 조회 (brnd_gift_pay_hist)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-10-S | 브랜드상품권 상품권내역 조회 메뉴리스트 | 화면 |

## 입력

- 페이지번호 (PAGE_NO)
- PAGE_SIZE
- END_TIME
- STR_TIME
- KIND_TYPE
- REQ_TYPE

## 출력

- 페이지번호 (PAGE_NO)
- IS_NEXT_PAGE
- HISTORY_REC
- 코드 (CODE)
- 메시지 (MSG)

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_pay_hist.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_pay_hist_act.jsp:24
