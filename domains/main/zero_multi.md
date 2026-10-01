# 제로페이 결제 메인 (zero_multi)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-PAY-20-S | 제로페이 결제 메인 > 계좌 목록 | 화면 |

## 입력

- (없음)

## 출력

- 이용기관구분 (ORG_TP)
- 기관명 (ORG_NM)
- 비플머니 잔액 (MNY_CUR_PRICE)
- ACCT_REC
- REC

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 기업제로페이 이용기관 구분 정보 변경 (TB_MEMBER_APP_U012)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: CORP_ORG_TP, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 제로페이 결제가능 계좌목록 조회(비대면결제) (TB_ACCOUNT_R006)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_multi.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_multi_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
