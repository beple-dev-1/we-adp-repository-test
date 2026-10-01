# 브랜드상품권 웹뷰 API - 사용자 계좌목록 조회 (BRND_ACCT_000001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-30-S | 브랜드상품권 웹뷰 API - 계좌관리 | 화면 |

## 입력

- TOKEN

## 출력

- 조회건수 (INQ_CNT)
- 계좌목록 (ACCT_LIST)

## 데이터 처리

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
