--- 꼬리표 ---
id: BPG-OFFD-10-30-S / system: BPG / 기능: 비플PG > 오피스푸드 > 오피스푸드 메인 > 오피스푸드(식사배송) 장바구니 / 과업: []

--- 화면명세 ---
화면명: 오피스푸드(식사배송) 장바구니
목적: 오피스푸드(식사배송) 장바구니 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OFFD-10-S

--- 업무 ---
- 요소: 화면 / 업무: 오피스푸드(식사배송) 주문하기 - 비플오더 주문원장+오피스푸드 주문원장 insert / 처리: 쓰기 / 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_DELIV_ODR_MENU, TB_BP_AFLT_DELIV_MYBAG_MENU / 입력: 비플가맹점 순번, 장바구니 순번, 총 금액, 메뉴 스케줄 ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_c001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
- 요소: 화면 / 업무: 오피스푸드(식사배송) 장바구니 - 삭제 / 처리: 쓰기 / 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU / 입력: 가맹점 장바구니 순번, MENU_SCHEDULE_ID, 거래일자, SERVICE_TIME / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_d001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_D001.xml:10
- 요소: 화면 / 업무: 오피스푸드(식사배송) 장바구니 - 조회 / 처리: 읽기 / 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG / 입력: 처리상태, 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_r001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R001.xml:10
- 요소: BPG-OFFD-10-30-S-e04 / 업무: 오피스푸드(식사배송) 장바구니 - 수량 및 한도 검증 / 처리: 읽기 / 테이블: TB_BP_AFLT_DELIV_MENU / 입력: 메뉴개수, MENU_SCHEDULE_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_r002_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R003.xml:10
- 요소: 화면 / 업무: 오피스푸드(식사배송) 장바구니 - 업데이트 / 처리: 쓰기 / 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU / 입력: MENU_CNT, 가격, 가맹점 장바구니 순번, MENU_SCHEDULE_ID, 거래일자, SERVICE_TIME, TOT_AMT, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_U001.xml:10
- 요소: 화면 / 업무: 오피스푸드(식사배송) 장바구니 - 업데이트(total_amt) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MYBAG / 입력: TOT_AMT, MYBAG_SEQ, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_u002_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
- 요소: 화면 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10
- 요소: 화면 / 업무: 비플오더 가맹점 관리에 신청 가맹점 노출 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_CORP / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R010.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OFFD-10-30-S-e03 / 이동unresolved: uf_back() / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_text / 라벨: 원 주문하기 / 앵커: BPG-OFFD-10-30-S-e04 / 해설: 원 주문하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
