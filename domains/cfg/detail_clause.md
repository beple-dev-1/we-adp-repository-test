# 약관상세조회 (detail_clause)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-10-10-S | 계좌 관리 | 화면 |
| BPG-PGM-10-20-S | 계좌 선택 | 화면 |
| BPG-PGM-10-30-S | 계좌번호 입력 | 화면 |
| BPG-PGM-10-40-S | 계좌 등록 완료 | 화면 |
| BPG-PGM-10-50-S | 오픈뱅킹 약관 동의 | 화면 |
| BPG-PGM-10-60-S | 오픈뱅킹 금융정보조회 약관 | 화면 |
| BPY-ACCT-20-10-S | 계좌 관리 | 화면 |
| BPY-ACCT-20-20-S | 계좌 선택 | 화면 |
| BPY-ACCT-20-30-S | 계좌번호 입력 | 화면 |
| BPY-ACCT-20-40-S | 계좌 1원 인증 | 화면 |
| BPY-ACCT-20-50-S | 계좌 등록 완료 | 화면 |
| BPY-ACCT-20-60-S | 오픈뱅킹 약관 동의 | 화면 |
| BPY-ACCT-20-70-S | 오픈뱅킹 금융정보조회 약관 | 화면 |
| BPY-MNY-10-10-S | 비플머니 충전 | 화면 |
| HIT-ACCT-10-10-S | 계좌 관리 | 화면 |
| HIT-ACCT-10-20-S | 계좌 선택 | 화면 |
| HIT-ACCT-10-30-S | 계좌번호 입력 | 화면 |
| HIT-ACCT-10-40-S | 계좌 등록 완료 | 화면 |
| HIT-ACCT-10-50-S | 오픈뱅킹 약관 동의 | 화면 |
| HIT-ACCT-10-60-S | 오픈뱅킹 금융정보조회 약관 | 화면 |
| HIT-MNY-10-10-S | 엔터프라이즈_비플머니 충전 | 화면 |

## 입력

- 사용구분 (USE_TP)
- 은행코드 (BANK_CD)
- 이용기관ID (ORG_ID)
- CLS_CD

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

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.detail_clause.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/detail_clause_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10
