# 브랜드상품권 웹뷰 API - 은행별 약관상세조회 (BRND_CLAUSE_000002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-30-S | 브랜드상품권 웹뷰 API - 계좌관리 | 화면 |

## 입력

- 사용구분 (USE_TP)
- 은행코드 (BANK_CD)
- 이용기관ID (ORG_ID)
- CLS_CD
- TOKEN

## 출력

- 이용기관ID (ORG_ID)
- CLS_CD
- 거래번호 (SEQ)
- 제목 (TITLE)
- 내용 (CTNT)
- APPLY_DT
- 사용구분 (USE_TP)
- 은행코드 (BANK_CD)

## 데이터 처리

### 은행별 약관조회(다이나믹) (TB_CLAUSE_R005)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: DYNAMIC_0

### 약관상세조회 (TB_CLAUSE_R004)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 사용구분 (USE_TP), 은행코드 (BANK_CD), 이용기관ID (ORG_ID), 약관 코드 (CLS_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_CLAUSE_000002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_CLAUSE_000002_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10
