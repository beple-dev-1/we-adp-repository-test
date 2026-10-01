# 엔터프라이즈_법인 제로페이 결제화면 호출 (ent_zero_corp_approve)

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

- CARD_NO
- TGT_YN
- TGT_ORDER_DT
- TGT_ORDER_ID
- TGT_AMT
- AMT
- QR_CODE
- REC_INDEX
- CHNL_CD
- TRX_TP

## 출력

- QR코드 (QR_CODE)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 가맹점명 (AFLT_NM)
- 대표자명 (REPR_NM)
- 결제금액 (AMT)
- 가맹점ID (AFLT_ID)
- 거래구분 (TRX_TP)
- MNY_CUR_PRICE
- MNY_CHRG_ACCT_CNT
- MNY_CHRG_CARD_CNT
- MNY_CHRG_ONCE_MIN_AMT
- MNY_CHRG_ONCE_MAX_AMT
- MNY_CHRG_DAY_MAX_AMT
- MNY_CHRG_MON_MAX_AMT
- MNY_POSS_MAX_AMT
- MNY_DAY_TOT_CHRG_AMT
- MNY_MON_TOT_CHRG_AMT
- TGT_SUM_PAY_AMT
- ADDRS
- ADDRS2
- TEL_NO
- REPR_NO1
- REPR_NO2
- 복합결제 수단 (CPX_PAY_MTHD)
- LAT
- LNG
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

### 식권제로페이 함께결제 총금액 조회 (TB_ZEROPAY_MT_ODR_R006)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR
- 입력: ORDER_DT, ORDER_ID

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

### 엔터프라이즈 결제수단관리 회원조회 (TB_MEMBER_ENT_PAY_MNG_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_PAY_MNG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_corp_approve.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_corp_approve_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_R001.xml:10
