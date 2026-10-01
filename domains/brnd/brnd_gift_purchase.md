# 브랜드상품권 상품권 구매 (brnd_gift_purchase)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-10-S | 브랜드상품권 구매가능 상품권 상세조회 | 화면 |

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
- 다건 선물 가능 여부 (MULTI_GIFT_ABL_YN)
- KIND_TYPE
- 개인정보 제3자 제공동의항목 (THRD_PRTY_AGREE_INFO)
- 개인정보 제3자 제공동의여부 (THRD_PRTY_AGREE_YN)
- 가맹점명 (COMPANY_NM)
- TOT_SALES_AMT
- TOT_STANDARD_AMT
- TOT_SUPPORT_AMT
- AMT_KEY
- 결제금액 (AMT)
- WON_AUTH_YN

## 출력

- ACCOUNT_REC
- 응답코드 (RES_CD)
- TOT_SALES_AMT
- TOT_STANDARD_AMT
- TOT_SUPPORT_AMT
- AMT_KEY

## 데이터 처리

### 회원정보 조회(BY CI) (TB_MEMBER_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), CI

### 계좌목록조회(하이브리드 포함) (TB_ACCOUNT_R021)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: DYNAMIC_0

### 사용자 정보 변경(앱별 정보 (TB_MEMBER_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, 이벤트약관동의여부 (EVT_AGR_YN), 이벤트약관동의일자 (EVT_AGR_DT), 이벤트약관동의여부 (EVT_AGR2_YN), 이벤트약관동의일자 (EVT_AGR2_DT), JSESSION_ID, BADGE_GIFT_SEND_USER_NM, BADGE_GIFT_SEND_DTTM, BADGE_GIFT_YN, GIFT_CERT_PUSH_YN, GIFT_PUSH_YN, QCK_PAY_YN, QCK_UPD_DTTM, TAXI_USE_YN, TAXI_UPD_DTTM, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_act.jsp:36
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
