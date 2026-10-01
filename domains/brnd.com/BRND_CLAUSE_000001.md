# 브랜드상품권 웹뷰 API - 은행별 약관조회 (BRND_CLAUSE_000001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-30-S | 브랜드상품권 웹뷰 API - 계좌관리 | 화면 |

## 입력

- 은행코드 (BANK_CD)
- TOKEN

## 출력

- REC
- 오픈뱅크 여부 (OPEN_BANK_YN)

## 데이터 처리

### 은행별 약관조회(다이나믹) (TB_CLAUSE_R005)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_CLAUSE_000001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_CLAUSE_000001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
