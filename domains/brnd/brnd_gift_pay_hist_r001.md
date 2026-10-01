# 브랜드 상품권 결제내역 조회 (brnd_gift_pay_hist_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-10-10-S | 브랜드 상품권 결제내역 조회 | 화면 |

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
- 코드 (CODE)
- 메시지 (MSG)
- HISTORY_REC

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_pay_hist_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_pay_hist_r001_act.jsp:35
