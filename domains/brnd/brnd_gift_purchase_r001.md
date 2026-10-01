# 브랜드상품권 상품권 구매 - 계좌조회 (brnd_gift_purchase_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-10-20-S | 브랜드상품권 상품권 구매 | 화면 |

## 입력

- KIND_CARD_IMG
- KIND_FULL_NM
- 브랜드상품권ID (BGC_ID)
- BGC_NM
- SALES_AMT
- STANDARD_AMT
- SUPPORT_AMT
- 총금액 (TOTAL_AMT)
- 할인률 (DC_RATE)
- 보유 금액 (OWN_AMT)
- 보유한도금액 (OWN_LMT_AMT)
- 보유 한도 남은 금액 (OWN_REMAIN_LMT)
- 버튼 타입 (BTN_TYPE)
- 총건수 (TOTAL_CNT)
- 프로모션 여부 (PROM_YN)
- 권종 코드 (KIND_CODE)
- 거래 구분 (TRX_GB)

## 출력

- KIND_CARD_IMG
- KIND_FULL_NM
- 브랜드상품권ID (BGC_ID)
- BGC_NM
- SALES_AMT
- STANDARD_AMT
- SUPPORT_AMT
- 총금액 (TOTAL_AMT)
- 할인률 (DC_RATE)
- 보유 금액 (OWN_AMT)
- 보유한도금액 (OWN_LMT_AMT)
- 보유 한도 남은 금액 (OWN_REMAIN_LMT)
- 버튼 타입 (BTN_TYPE)
- 총건수 (TOTAL_CNT)
- ACCOUNT_REC
- 응답코드 (RES_CD)
- 프로모션 여부 (PROM_YN)
- 권종 코드 (KIND_CODE)
- 거래 구분 (TRX_GB)

## 데이터 처리

### 회원정보 조회(BY CI) (TB_MEMBER_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), CI

### 계좌목록조회(하이브리드 포함) (TB_ACCOUNT_R021)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_r001_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
