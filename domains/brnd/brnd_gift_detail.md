# 브랜드상품권 구매가능 상품권 상세조회 (brnd_gift_detail)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-10-20-10-S | 브랜드상품권 구매가능 상품권 목록조회 | 화면 |
| BPY-BRND-10-20-30-S | 브랜드상품권 상품권 검색 webview | 화면 |
| BPY-BRND-10-S | 브랜드상품권 구매가능 상품권 상세조회 | 화면 |

## 입력

- 브랜드상품권ID (BGC_ID)
- 권종 코드 (KIND_CODE)
- 거래 구분 (TRX_GB)

## 출력

- GIFT_ABL_YN
- KIND_CARD_IMG
- SALES_AMT
- 브랜드상품권ID (BGC_ID)
- BGC_NM
- 프로모션 여부 (PROM_YN)
- KIND_TYPE
- 권종 코드 (KIND_CODE)
- SUPPORT_AMT
- KIND_BGC_NM
- KIND_FULL_NM
- STANDARD_AMT
- KIND_NM
- 할인률 (DC_RATE)
- 다건 선물 가능 여부 (MULTI_GIFT_ABL_YN)
- 구매가능수량 (BUY_ABL_QTY)
- 보유 금액 (OWN_AMT)
- 보유한도금액 (OWN_LMT_AMT)
- 보유 한도 남은 금액 (OWN_REMAIN_LMT)
- 피싱경고 팝업활성여부 (PSI_WRN_POP_ACT_YN)
- REC
- 코드 (CODE)
- 메시지 (MSG)
- 총건수 (TOTAL_CNT)
- 계좌 등록 여부 (ACCT_YN)
- 프로모션 상태 (PROM_STATUS)
- 가맹점명 (COMPANY_NM)
- 개인정보 제3자 제공동의항목 (THRD_PRTY_AGREE_INFO)
- 개인정보 제3자 제공동의여부 (THRD_PRTY_AGREE_YN)
- TODAY_JOIN_YN
- KIND_NOTI_INFORMATION
- WON_AUTH_TYPE
- TODAY_BUY_LMT_MSG

## 데이터 처리

### 브랜드상품권 이용가능 계좌목록조회 (TB_ACCOUNT_R026)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_HBRD_BANK
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_detail.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_detail_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R026.xml:10
