--- 꼬리표 ---
id: EXW-BRWV-10-10-20-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 상품권 구매 > 브랜드상품권 웹뷰 API - 구매가능 상품권목록 조회 화면 > 브랜드상품권 웹뷰 API - 상품권 구매 화면 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 웹뷰 API - 상품권 구매 화면
목적: 브랜드상품권 웹뷰 API - 상품권 구매 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API -상품권 구매 action / 처리: 읽기·쓰기 / 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_HBRD_BANK, TB_BRND_ODR / 입력: 버튼 타입, 직원상태, 총금액, 총건수, 권종 코드, 선물 메세지, SEND_USER_NM, ORDER_ID, 은행코드, 계좌번호 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_purchase_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_purchase_c001_act.jsp:45 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API -상품권 구매 가등록 action / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_BRND_ODR / 입력: 버튼 타입, 직원상태, 총금액, 총건수, 권종 코드, 선물 메세지, SEND_USER_NM, ORDER_ID, 은행코드, 계좌번호 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_purchase_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_purchase_c002_act.jsp:44 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_pay / 라벨: 결제하기 / 앵커: EXW-BRWV-10-10-20-S-e02 / 해설: 결제하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_gift_purchase_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
