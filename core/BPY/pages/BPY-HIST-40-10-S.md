--- 꼬리표 ---
id: BPY-HIST-40-10-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 거래내역화면 > 브랜드상품권 구매 영수증 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 구매 영수증
목적: 브랜드상품권 구매 영수증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-HIST-40-S

--- 업무 ---
- 요소: 화면 / 업무: 구매영수증PDF 조회/생성 / 처리: 읽기·쓰기 / 테이블: TB_ZEROPAY_TRAN, TB_ZEROPAY_GIFT_TRAN, TB_TRAN_CONFIRMATION, TB_EMAIL / 입력: 거래일자, 거래번호, 거래코드, EMAIL / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000005_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_GIFT_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_COMFIRMATION_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_COMFIRMATION_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_COMFIRMATION_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_close / 라벨: 페이지나가기 / 앵커: BPY-HIST-40-10-S-e02 / 해설: 페이지나가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/zero_brd_complete_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
