# 주문내역 별 결제수단 조회 (ent_afltbo_odr_list_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-40-20-S | 주문내역 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- ORDER_ID
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 거래시간 (TRX_TM)
- 거래구분 (TRX_TP)
- 결제금액 (AMT)
- VAT
- FEE_TOT
- FEE_VAT
- MSG
- ORG_TRX_DT
- ORG_TRX_SEQ
- 가맹점아이디 (BP_AFLT_ID)
- PG_MID
- 회원코드 (MEMB_CD)
- CI
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- FIRM_TRX_DT
- 펌거래 일련번호 (FIRM_TRX_SEQ)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 처리상태 (PROC_ST)
- REFD_PROC_ST
- HUB_NOTI_YN
- HUB_NOTI_CNT
- HUB_NOTI_DTTM
- 거래구분 (CP_TP)
- 앱코드 (APP_CD)
- TGT_YN
- CLS_DSP_SEQ
- 한도일련번호 (LMT_SEQ)
- MNY_UCD_TRX_SEQ
- MNY_UCD_TRX_DT
- MNY_TRAN_YN
- COMPLEX_YN
- MNY_CHRG_TRX_SEQ
- MNY_CHRG_TRX_DT
- MNY_AUTO_CHRG_YN
- CNCL_FIRM_TRX_DT
- CNCL_FIRM_TRX_SEQ
- QR거래일자 (QR_TRX_DT)
- QR거래번호 (QR_TRX_SEQ)
- ORDER_ID
- ORDER_DT
- PAY_MEASURE_TP
- MNY_AMT
- MT_AMT
- CARD_AMT
- 급여공제금액 (SALY_AMT)
- 결제금액 (PAY_AMT)
- 할인금액 (SALE_AMT)
- SALE_YN
- 후불결제여부 (POSTPAID_YN)
- 한도명 (LMT_NM)
- 취소일시 (CANCEL_DTTM)

## 데이터 처리

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 주문 정보 보기 (TB_CAFETERIA_ODR_R010)

- 종류: SELECT
- 테이블: TB_CAFETERIA_ODR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), ORDER_ID, 주문유형 (ORDER_TYPE), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r002_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R010.xml:10
