# 엔터프라이즈 주 충전수단 조회 화면 (ent_mny_chrg_mng)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ACCT-10-10-S | 계좌 관리 | 화면 |
| HIT-ACCT-10-20-S | 계좌 선택 | 화면 |
| HIT-ACCT-10-30-S | 계좌번호 입력 | 화면 |
| HIT-ACCT-10-40-S | 계좌 등록 완료 | 화면 |
| HIT-ACCT-10-50-S | 오픈뱅킹 약관 동의 | 화면 |
| HIT-ACCT-10-60-S | 오픈뱅킹 금융정보조회 약관 | 화면 |
| HIT-CONF-10-S | 엔터프라이즈 주 충전수단 조회 화면 | HIT-CONF-10-S-e13, HIT-CONF-10-S-e14 |
| HIT-MNY-10-S | 엔터프라이즈_비플머니 기본정보 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |
| HIT-PAY-10-10-S | 엔터프라이즈_개인제로페이 MPM 결제 | 화면 |
| HIT-PAY-10-20-S | 식권제로페이 함께결제 (list) | 화면 |
| HIT-PAY-10-S | 엔터프라이즈_비플식권 혼자/함께결제 선택 | 화면 |
| HIT-PAY-20-S | 엔터프라이즈_법인 제로페이 결제화면 호출 | 화면 |
| HIT-PAY-30-S | 엔터프라이즈_식권제로페이 결제(보유식권 1개) | 화면 |
| HIT-PAY-40-S | 엔터프라이즈_제로페이 결제 메인 > 계좌 상세 | 화면 |

## 입력

- CPLX_REF_URL
- WACT_CPLX_PARAM

## 출력

- PAY_LIST
- RETURN_TO_PAYMENT_YN
- PAY_CNT
- 등록 계좌 수 (ACCOUNT_CNT)
- 등록 카드 수 (CARD_CNT)

## 데이터 처리

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 카드원장 조회(by memb_Cd) (TB_CARD_R002)

- 종류: SELECT
- 테이블: TB_CARD
- 입력: 회원코드 (MEMB_CD)

### 계좌 & 카드 조회 (TB_CARD_R005)

- 종류: SELECT
- 테이블: TB_CARD, TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R005.xml:10
