--- 꼬리표 ---
id: EXW-UWV-60-20-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 결제 > MPM 결제요청 / 과업: []

--- 화면명세 ---
화면명: MPM 결제요청
목적: MPM 결제요청 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: webview_pay_approve:191
- 요소: 화면 / 업무: 웹뷰 API - QR 및 한도 검증 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY, TB_MEMBER_MNY … / 입력: QR코드, 결제유형, 회원코드, 앱코드, 수수료, REQ_DATA, 이용기관ID, 카드번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_pay_approve_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_pay_approve_r001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: id=mny_acct_info / 라벨: popup-select--bank / 앵커: EXW-UWV-60-20-S-e01 / 이동modal: popup-select--bank / 해설: popup-select--bank 팝업 열기
- 구분: 이동 / 좌표: id=btn_next / 라벨: 다음 / 앵커: EXW-UWV-60-20-S-e02 / 이동modal: popup-payment--confirm / 해설: popup-payment--confirm 팝업 열기
- 구분: 기능 / 좌표: - / 라벨: 지우기 / 앵커: EXW-UWV-60-20-S-e15 / 해설: 지우기
- 구분: 기능 / 좌표: id=back_btn / 라벨: 이전 페이지로 / 앵커: EXW-UWV-60-20-S-e16 / 해설: 이전 페이지로

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/webview/pay/webview_pay_approve_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
