# 엔터프라이즈_제로페이 영수증( 온라인 PG ) (ent_zero_pg_complete)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-PAY-40-S | 엔터프라이즈_제로페이 결제 메인 > 계좌 상세 | 화면 |

## 입력

- TRX_DT
- TRX_SEQ
- BIZ_CD_NM

## 출력

- SHOP_NM
- CTGR_CD
- BUSINESS
- CTGRY
- FAX_NO
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)
- 사업자번호 (BIZ_NO)
- 공급가액 (SUPPLY_AMT)
- 거래구분 (TRX_TP)
- 거래구분 (CP_TP)
- TGT_CNT
- TGT_YN
- BIZ_CD_NM
- LMT_NM
- MNY_TRX_AMT
- MEAL_TRX_AMT
- SALY_TRX_AMT
- COMPLEX_YN
- MNY_TRAN_YN
- SALY_TRAN_YN
- 포인트노출여부 (POINT_EXP_YN)
- TGTREC
- KIOSK 대기번호 (KIOSK_DEAL_NO)

## 데이터 처리

### 비플PG 거래내역 조회 (by TRX_DT, TRX_SEQ) (TB_ZEROPAY_BPPG_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_TRAN, TB_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 온라인PG 거래내역 조회 (by TRX_DT, TRX_SEQ) (TB_ZEROPAY_PG_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_PG_TRAN, TB_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 편의점 점포 관리 조회(BP_AFLT_SEQ) (TB_STORE_MNG_R002)

- 종류: SELECT
- 테이블: TB_STORE_MNG, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), STORE_CD, STORE_CORP_CD

### 비플페이 가맹점정보 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### QR정보조회 (TB_QR_MNG_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 식권제로페이 결제 정보(TRX_DT, TRX_SEQ) (TB_ZEROPAY_MT_ODR_R005)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 앱코드 (APP_CD)

### PG복합결제 거래 내역 조회 (TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_pg_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_pg_complete_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10
