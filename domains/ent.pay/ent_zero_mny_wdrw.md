# 엔터프라이즈_비플머니 출금 (ent_zero_mny_wdrw)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MNY-10-S | 엔터프라이즈_비플머니 기본정보 | 화면 |

## 입력

- (없음)

## 출력

- TOT_WDRW_AMT
- TOTAL_CNT
- ACCT_REC

## 데이터 처리

### 회원별 비플머니 출금 가능 금액 조회 (TB_MEMBER_MNY_R005)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 계좌목록조회(MEMB_CD) (TB_ACCOUNT_R024)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_wdrw.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_wdrw_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R024.xml:10
