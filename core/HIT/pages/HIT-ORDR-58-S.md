--- 꼬리표 ---
id: HIT-ORDR-58-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 가맹점 상세 기본정보 / 과업: []

--- 화면명세 ---
화면명: 가맹점 상세 기본정보
목적: 가맹점 상세 기본정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 오피스푸드(식사배송) 장바구니 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_act.jsp:25
- 요소: 화면 / 업무: 비플 오더 가맹점 정보 조회 / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_MEMBER_APP, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_CATG_PDT … / 입력: 비플가맹점순번, LAT, LNG / 실패: 필수 값 BP_AFLT_SEQ가 누락되었습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_detail_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_detail_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_IMG_INFO_R002.xml:10
- 요소: HIT-ORDR-58-S-e09 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10
- 요소: 화면 / 업무: 장바구니 확인 / 처리: 읽기 / 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_r002_act.jsp:13 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10
- 요소: 화면 / 업무: 사내 카페 메뉴 조회 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_PDT_OPT_CATG, TB_BP_AFLT_OPT_CATG … / 입력: 비플가맹점순번, 비플오더메뉴순번, 가맹점 장바구니 순번, 장바구니 메뉴 순번, 수량, 옵션리스트, 수령방법 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_menu.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 기본정보 / 앵커: HIT-ORDR-58-S-e07 / 해설: 기본정보
- 구분: 기능 / 좌표: - / 라벨: 안내사항 / 앵커: HIT-ORDR-58-S-e08 / 해설: 안내사항
- 구분: 기능 / 좌표: id=backBtn / 라벨: 뒤로가기 / 앵커: HIT-ORDR-58-S-e09 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_ready / 라벨: 지금은 주문가능 시간이 아닙니다. / 앵커: HIT-ORDR-58-S-e10 / 해설: 지금은 주문가능 시간이 아닙니다.
- 구분: 기능 / 좌표: id=btn_box / 라벨: 원 장바구니 보기 / 앵커: HIT-ORDR-58-S-e11 / 해설: 원 장바구니 보기
- 구분: 기능 / 좌표: - / 라벨: 닫기 / 앵커: HIT-ORDR-58-S-e12 / 해설: 닫기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_smt_odr_detail_basic_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
