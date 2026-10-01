# 결제완료 및 영수증(웹뷰) (wapi_zero_complete)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-60-30-S | CPM/MPM 결제 | 화면 |

## 입력

- QR_TRX_DT
- QR_TRX_SEQ

## 출력

- TRX_DT
- TRX_TM
- TRX_SEQ
- TRX_TP
- AMT
- VAT
- SUPPLY_AMT
- SVC_AMT
- AFLT_NM
- BIZ_NO
- CTGR_CD
- REPR_NM
- TEL_NO
- ADDRS
- TGT_YN
- TGT_CNT
- TGT_REC

## 데이터 처리

### 거래내역 조회(TRX_DT, TRX_SEQ, TYPE_CD) (TB_ZEROPAY_TRAN_R030)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_MEMBER, TB_MEMBER_APP, TB_AFFILIATION_MNG
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ), TYPE_CD

### 식권제로페이 결제 정보(TRX_DT, TRX_SEQ) (TB_ZEROPAY_MT_ODR_R005)

- 종류: SELECT
- 테이블: TB_ZEROPAY_MT_ODR, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.wapi_zero_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/wapi_zero_complete_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R030.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
