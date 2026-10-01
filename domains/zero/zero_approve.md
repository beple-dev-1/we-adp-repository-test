# 개인 제로페이 결제화면 호출 (zero_approve)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-20-S | 스마트오더 영수증 | BPG-HIST-10-20-S-e04 |
| BPY-HIST-40-20-S | 제로페이 영수증 | BPY-HIST-40-20-S-e04 |
| BPY-HIST-40-30-S | 제로페이 영수증 v2 | BPY-HIST-40-30-S-e11 |
| BPY-PAY-20-20-S | 개인 제로페이 사용자 체크 | 화면 |

## 입력

- QR코드 (QR_CODE)
- 비플머니 여부 (MNY_YN)

## 출력

- QR코드 (QR_CODE)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 가맹점명 (AFLT_NM)
- 결제 1회 최소금액 (APR_ONCE_MIN_AMT)
- 결제 1회 최대금액 (APR_ONCE_MAX_AMT)
- 결제 1일 최대 금액 (APR_DAY_MAX_AMT)
- 결제 월 최대 금액 (APR_MM_MAX_AMT)
- 사용자 일누적 결제금액 (USER_DAY_AMT)
- 사용자 월누적 금액 (USER_MM_AMT)
- 대표자명 (REPR_NM)
- 결제금액 (AMT)
- 가맹점ID (AFLT_ID)
- 거래구분 (TRX_TP)
- 결제가능한계좌수 (USABLE_ACCT_CNT)
- 비플머니 여부 (MNY_YN)

## 데이터 처리

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 제로페이 가맹점QR정보 조회 (TB_AFFILIATION_QR_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_QR
- 입력: AFLT_ID, QR_CODE

### 일일 거래금액(여러거래 통합) (TB_ZEROPAY_TRAN_R027)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST
- 입력: 거래일자 (TRX_DT), INPUT_0, INPUT_1, INPUT_2, INPUT_3, INPUT_4, CI, 앱코드 (APP_CD), DYNAMIC_0, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_1, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_2

### 월 거래금액(여러거래 통합) (TB_ZEROPAY_TRAN_R026)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST
- 입력: 거래일자 (TRX_DT), INPUT_0, INPUT_1, INPUT_2, INPUT_3, INPUT_4, CI, 앱코드 (APP_CD), DYNAMIC_0, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_1, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_2

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 제로페이 결제가능 계좌목록 조회 (TB_ACCOUNT_R018)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_AFFILIATION_MNG
- 입력: 가맹점ID (AFLT_ID), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_approve.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_approve_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R018.xml:10
