# 은행별 약관조히 (set_clause_r001)

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
| HIT-MNY-10-10-S | 엔터프라이즈_비플머니 충전 | HIT-MNY-10-10-S-e11 |

## 입력

- 은행코드 (BANK_CD)

## 출력

- REC
- 오픈뱅크 여부 (OPEN_BANK_YN)

## 데이터 처리

### 은행별 약관조회(다이나믹) (TB_CLAUSE_R005)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.set_clause_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/set_clause_r001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
