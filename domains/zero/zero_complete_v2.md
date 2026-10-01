# 제로페이 영수증 v2 (zero_complete_v2)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-40-30-S | 제로페이 영수증 v2 | 화면 |
| BPY-HIST-40-S | 거래내역화면 | 화면 |
| BPY-HIST-50-S | 거래내역화면 v2 | 화면 |
| BPY-MNY-10-S | 비플머니 기본정보 | 화면 |
| BPY-ONAF-70-10-S | 통합 비대면결제 결제 완료 | BPY-ONAF-70-10-S-e07 |
| BPY-PAY-10-10-S | 법인 제로페이 결제화면 호출 | 화면 |
| BPY-PAY-20-10-S | 제로페이 결제 메인 > 계좌 상세 | 화면 |
| BPY-PAY-30-S | 개인제로페이 MPM 결제 | 화면 |
| BPY-WELF-40-S | 복지포인트 이용정보 조회 | 화면 |
| MGC-HIST-10-S | 결제내역 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 거래코드 (TRX_CD)
- 업무코드 (BIZ_CD)
- BIZ_CD_NM

## 출력

- TRX_CD
- BIZ_CD
- 거래번호 (TRX_SEQ)
- 결제금액 (AMT)
- VAT
- SVC_AMT
- 메시지 (MSG)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 카드번호 (CARD_NO)
- 목명 (MOK_NM)
- AFLT_NM
- AFLT_SP_NM
- REPR_NM
- ZIP_CD
- ADDRS
- ADDRS2
- TEL_NO
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
- FIRM_AMT
- PREPAID_AMT
- COMPLEX_YN
- TGTREC
- BPPG_YN
- MNY_TRAN_YN
- BIZ_CD_NM
- MNY_TRX_AMT
- CARD_TRX_AMT
- MEAL_TRX_AMT
- ORG_TRX_DT
- ORG_TRX_SEQ
- 한도명 (LMT_NM)
- CPLXREC
- 충건수 (TOT_CNT)

## 데이터 처리

### 거래정보 조회(TRX_DT, TRX_SEQ) (TB_ZEROPAY_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 브랜드상품권 거래원장 조회(다이나믹) (TB_BRND_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BRND_TRAN
- 입력: DYNAMIC_0

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 카드거래내역 조회(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_CARD_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 결제원장 조회(ORDER_ID) (TB_BPPAY_TRAN_R005)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN
- 입력: ORDER_ID

### 비플페이 가맹점정보 조회(BP_AFLT_ID) (TB_BP_AFLT_MNG_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 가맹점아이디 (BP_AFLT_ID)

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_TRAN_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_ODR_PDT, TB_BP_QR_MNG, TB_BPPAY_CARD_TRAN, TB_YGYO_ODR, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### QR정보조회 (TB_QR_MNG_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 식권제로페이 결제 정보(TRX_DT, TRX_SEQ) (TB_ZEROPAY_MT_ODR_R005)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 앱코드 (APP_CD)

### 비플페이 복합결제 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_COMPLEX_TRAN_R004)

- 종류: SELECT
- 테이블: TB_BP_QR_MNG, TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

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

### PG복합결제 거래 내역 조회 (TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), DYNAMIC_0

### 결제내역 상세조회(영수증) (TB_ZEROPAY_TRAN_R007)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), 거래코드 (TRX_CD), DYNAMIC_0

### 비플PG 거래내역 조회 (QR_TRX_DT, QR_TRX_SEQ) (TB_ZEROPAY_BPPG_TRAN_R006)

- 종류: SELECT
- 테이블: TB_ZEROPAY_BPPG_TRAN
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), DYNAMIC_0

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 비대면 결제내역 조회 (by TRX_DT, TRX_SEQ) (TB_ONLN_AFF_TRAN_R002)

- 종류: SELECT
- 테이블: TB_ONLN_AFF_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 복합결제거래내역 원장 조회 (TB_ZEROPAY_COMPLEX_TRAN_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_COMPLEX_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- 메시지: 올바르지 않은 검색 문자가 포함되어있습니다.[0]
  - 조건: StrUtil.isAbleInput(biz_cd_nm) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_v2_act.jsp:45)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete_v2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_v2_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
