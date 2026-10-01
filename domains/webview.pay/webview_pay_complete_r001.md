# CPM 결제 및 MPM 결제가 정상적으로 처리되었을 경우 노출되는 화면 웹뷰 (webview_pay_complete_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-60-40-S | 결제 완료 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- API_TRX_DT
- API_TRX_SEQ
- TRX_TYPE

## 출력

- 가맹점명 (AFLT_NM)
- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)
- 거래번호 (TRX_SEQ)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 결제금액 (AMT)
- COMPLEX_YN
- 거래구분 (CP_TP)
- 한도명 (LMT_NM)

## 데이터 처리

### QR정보조회 (TB_QR_MNG_R001)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 웹뷰 거래내역 수정 (TB_WEBVIEW_API_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_WEBVIEW_API_TRAN
- 입력: REQ_DATA, RES_DATA, 처리상태 (PROC_ST), 응답코드 (RES_CD), 응답메시지 (RES_MSG), ZT_TRX_DT, ZT_TRX_SEQ, 회원코드 (MEMB_CD), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_pay_complete_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_pay_complete_r001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_TRAN_U001.xml:10
