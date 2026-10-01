# 결제완료 (smt_odr_complete)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 출력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 결제금액 (AMT)
- RES_CD
- 응답메시지 (RES_MSG)
- 가맹점명 (AFLT_NM)
- ORDER_ID
- 수령방법 (RECV_TYPE)

## 데이터 처리

### 비플페이 거래내역 조회(TRX_DT,TRX_SEQ) (TB_BPPAY_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 비플페이 가맹점정보 조회(BP_AFLT_ID) (TB_BP_AFLT_MNG_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 가맹점아이디 (BP_AFLT_ID)

### 수령방법 확인(포장, 식사배송) (TB_BP_AFLT_ODR_R019)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_complete_act.jsp:15
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R019.xml:10
