# 엔터프라이즈_비플머니 > 계좌신고 (ent_zero_mny_chrg_c002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MNY-10-10-S | 엔터프라이즈_비플머니 충전 | 화면 |

## 입력

- 은행 코드 (BANK_CD)
- 계좌 번호 (ACCT_NO)
- PROV_AGR_YN

## 출력

- RES_CD
- RES_MSG

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 계좌목록조회(하이브리드 포함) (TB_ACCOUNT_R021)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: DYNAMIC_0

### 하이브리드 계좌원장 조회 (by MEMB_CD, PG_ORG_CD, ACCT_NO) (TB_ACCOUNT_HB_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), PG_ORG_CD, 계좌번호 (ACCT_NO), 은행코드 (BANK_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_chrg_c002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_chrg_c002_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
