# 브랜드상품권 계좌 1원인증 (brnd_gift_acct_auth)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-10-S | 브랜드상품권 구매가능 상품권 상세조회 | 화면 |

## 입력

- (없음)

## 출력

- REC

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_acct_auth.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_acct_auth_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
