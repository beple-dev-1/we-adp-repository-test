# 브랜드상품권 구매내역 상세조회 (brnd_webview_gift_purchase_info)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-60-S | 브랜드상품권 구매내역 상세조회 (info) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 브랜드상품권 번호 (BGC_NO)
- TOKEN

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- BGC_NM
- 브랜드상품권ID (BGC_ID)
- 권종 코드 (KIND_CODE)
- 브랜드상품권 번호 (BGC_NO)
- PIN_NO
- KIND_CARD_IMG
- KIND_FULL_NM
- KIND_TYPE
- REMAIN_AMT
- 직원상태 (STATUS)
- CREATE_TYPE
- REFUND_ABL_YN
- PROC_ABL_STATUS
- GIFT_ABL_YN
- PUB_INIT_AMT
- 할인률 (DC_RATE)
- SALES_AMT
- REFUND_AMT
- PUB_DATE
- PERIOD_END
- PERIOD_EXPIRE_DAY
- ADD_AUTH_YN
- ADD_AUTH_NM
- ADD_AUTH_NO
- KIND_NOTI_INFORMATION
- KIND_RFD_INFORMATION
- SEND_ORDER_ID
- GIFT_SRNO
- HISTORY_REC
- KIND_INFORMATION
- KIND_BGC_NM
- 권종 유효기간일 (KIND_EFCT_DAY)
- 권종사용가능매장 (KIND_PAY_ABL_COMPANY)
- KIND_BASE_INFORMATION

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_purchase_info.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_purchase_info_act.jsp:37
