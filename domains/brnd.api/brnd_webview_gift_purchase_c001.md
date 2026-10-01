# 브랜드상품권 웹뷰 API -상품권 구매 action (brnd_webview_gift_purchase_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-10-10-20-S | 브랜드상품권 웹뷰 API - 상품권 구매 화면 | 화면 |

## 입력

- 버튼 타입 (BTN_TYPE)
- 직원상태 (STATUS)
- 총금액 (TOTAL_AMT)
- 총건수 (TOTAL_CNT)
- 권종 코드 (KIND_CODE)
- 선물 메세지 (GIFT_MSG)
- SEND_USER_NM
- ORDER_ID
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 브랜드상품권ID (BGC_ID)
- 오픈뱅킹 등록 여부 (OBANK_JOIN_YN)
- SALES_AMT
- RECV_REC
- 은행명 (BANK_NM)
- 선이체인증일련번호 (PREV_TRAN_NO)
- 거래 구분 (TRX_GB)
- TOKEN

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- ORDER_ID
- 브랜드상품권ID (BGC_ID)
- BGC_NM
- SALES_AMT
- STANDARD_AMT
- SUPPORT_AMT
- AUTH_DATE
- AUTH_TIME
- 은행명 (BANK_NM)
- ACCOUNT_NUM
- PUB_DATE
- 직원상태 (STATUS)
- 선이체인증일련번호 (PREV_TRAN_NO)
- 제목 (TITLE)
- GIFT_EXPIRE_DATE
- APP_PARAM
- INIT_BUY_YN
- IMG_URL
- TXT
- BTN_LIST
- 메시지 (MSG)
- 거래 구분 (TRX_GB)

## 데이터 처리

### 브랜드상품권 이용가능 계좌목록조회 (TB_ACCOUNT_R026)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_HBRD_BANK
- 입력: DYNAMIC_0

### 계좌상세조회(BY 계좌번호) (TB_ACCOUNT_R008)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO)

### 하이브리드 계좌원장 조회 (by MEMB_CD, PG_ORG_CD, ACCT_NO) (TB_ACCOUNT_HB_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), PG_ORG_CD, 계좌번호 (ACCT_NO), 은행코드 (BANK_CD)

### 브랜드상품권 주문내역 등록 (TB_BRND_ODR_C001)

- 종류: INSERT
- 테이블: TB_BRND_ODR
- 입력: ORDER_DT, ORDER_ID, 거래구분 (DEAL_DIV_CD), ORDER_TM, 회원코드 (MEMB_CD), PURCHASE_PRICE, ORDER_STS, ORDER_FAIL_MSG, PRE_RETV_TNS_NO, CAN_DT, CAN_TM, CAN_TRAN_NO, CAN_BIGO, 앱코드 (APP_CD), BRND_CHNL_CD

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_purchase_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_purchase_c001_act.jsp:45
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10
