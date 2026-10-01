# 상품권 구매 영수증 (zero_gift_complete)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-HIST-10-S | 결제내역 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

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

## 데이터 처리

### 거래정보 조회(TRX_DT, TRX_SEQ) (TB_ZEROPAY_TRAN_R003)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_gift_complete_act.jsp:15
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10
