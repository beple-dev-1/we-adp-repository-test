--- 꼬리표 ---
id: EXW-UWV-60-40-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 결제 > 결제 완료 / 과업: []

--- 화면명세 ---
화면명: 결제 완료
목적: 결제 완료 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: CPM 결제 및 MPM 결제가 정상적으로 처리되었을 경우 노출되는 화면 웹뷰 / 처리: 읽기·쓰기 / 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_WEBVIEW_API_TRAN / 입력: 거래일자, 거래번호, API_TRX_DT, API_TRX_SEQ, TRX_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_pay_complete_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_pay_complete_r001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_TRAN_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_close / 라벨: 확인 / 앵커: EXW-UWV-60-40-S-e03 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/webview/pay/webview_pay_complete_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
