# 엔터프라이즈_개인제로페이 MPM 결제 (ent_zero_approve_v2)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-20-20-S | 엔터프라이즈_스마트오더 영수증 | HIT-HIST-10-20-20-S-e04 |
| HIT-HIST-10-S | 엔터프라이즈제로페이 영수증_v2 | HIT-HIST-10-S-e10 |
| HIT-HIST-30-S | 엔터프라이즈_제로페이 영수증 | HIT-HIST-30-S-e04 |

## 입력

- QR코드 (QR_CODE)
- 비플머니 여부 (MNY_YN)
- CHNL_CD
- ACCT_NO

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
- 비플머니 여부 (MNY_YN)
- MNY_CUR_PRICE
- MNY_CHRG_ACCT_CNT
- MNY_CHRG_CARD_CNT
- BANK_NM
- ACCT_NO
- ACCT_NO_ENC
- BANK_CD
- SEQ
- MNY_CHRG_ONCE_MIN_AMT
- MNY_CHRG_ONCE_MAX_AMT
- MNY_CHRG_DAY_MAX_AMT
- MNY_CHRG_MON_MAX_AMT
- MNY_POSS_MAX_AMT
- MNY_DAY_TOT_CHRG_AMT
- MNY_MON_TOT_CHRG_AMT
- ADDRS
- ADDRS2
- TEL_NO
- REPR_NO1
- REPR_NO2
- MNY_CHRG_TYPE
- EXIST_YN
- MNY_CHRG_ACCT_REC
- MNY_CHRG_CARD_REC
- 통합 비플머니 잔액 (ITGR_MNY_CUR_PRICE)

## 데이터 처리

### 가맹점 및 QR코드 조회 (TB_AFFILIATION_MNG_R003)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY
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

### 비플머니 총 잔액 조회(전체 앱 통합 한도) (TB_MEMBER_MNY_R014)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 비플머니 일일 충전 금액 조회 (TB_MNY_TRAN_MST_R002)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

### 비플머니 월 충전 금액 조회 (TB_MNY_TRAN_MST_R009)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_approve_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_approve_v2_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
