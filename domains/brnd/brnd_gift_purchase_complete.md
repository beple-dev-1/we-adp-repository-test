# 브랜드상품권 구매내역 상세조회(영수증) (brnd_gift_purchase_complete)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-10-20-10-S | 브랜드상품권 구매내역 상세조회 (info) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 브랜드상품권 번호 (BGC_NO)
- ORDER_ID

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- BGC_NM
- KIND_BGC_NM
- REQ_TYPE
- REQ_TYPE_NM
- REQ_AMT
- KIND_TYPE
- AUTH_DATE
- AUTH_TIME
- ORDER_ID
- PAY_COMPANY_NM
- RECV_USER_NM
- GIFT_STATUS_NM
- STANDARD_AMT
- SUPPORT_AMT
- SALES_AMT
- PAY_METHOD
- PAY_CANCEL_STATUS_NM
- REFUND_AMT
- PIN_NO
- KIND_FULL_NM
- PERIOD_END
- SEND_USER_NM

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_complete_act.jsp:37
