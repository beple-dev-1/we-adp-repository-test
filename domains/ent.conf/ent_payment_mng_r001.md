# 엔터프라이즈 결제수단 정보 조회 (ent_payment_mng_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-10-10-S | 설정 > 결제수단 설정 | 화면 |

## 입력

- (없음)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 합산결제수단 (CPX_PAY_MTHD)
- NO
- CD
- TYPE

## 데이터 처리

### 주결제계좌 여부 & 주거래카드 등록여부 조회 (TB_CARD_R003)

- 종류: SELECT
- 테이블: TB_CARD, TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), MAIN_CARD_YN, 회원코드 (MEMB_CD), 주계좌여부 (MAIN_ACCT_YN)

### 주 결제 카드정보 조회 (by memb_cd) (TB_CARD_R001)

- 종류: SELECT
- 테이블: TB_CARD
- 입력: 회원코드 (MEMB_CD)

### 주계좌 조회(BY MEMB_CD) (TB_ACCOUNT_R003)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD)

### 엔터프라이즈 결제수단관리 회원조회 (TB_MEMBER_ENT_PAY_MNG_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_PAY_MNG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_payment_mng_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_payment_mng_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_R001.xml:10
