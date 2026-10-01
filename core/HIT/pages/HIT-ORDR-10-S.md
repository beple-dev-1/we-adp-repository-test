--- 꼬리표 ---
id: HIT-ORDR-10-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 비플오더 가맹점 관리에 신청 가맹점 노출 / 과업: []

--- 화면명세 ---
화면명: 비플오더 가맹점 관리에 신청 가맹점 노출
목적: 비플오더 가맹점 관리에 신청 가맹점 노출 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 오피스푸드 상세 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP_DELIV, TB_BP_AFLT_MNG, TB_BP_AFLT_MYBAG, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MY, TB_CTGR_CATG_CD … / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R005.xml:10
- 요소: 화면 / 업무: 가맹점 상세 기본정보_v2 (화면) / 처리: 미확인 / 입력: 비플가맹점순번, LAT, LNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_detail_basic_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/ent_smt_odr_detail_basic_v2_act.jsp:25
- 요소: 화면 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10
- 요소: 화면 / 업무: 스마트오더 메인 초기화 / 처리: 읽기·쓰기 / 테이블: TB_WORK_CD_MNG, TB_BP_AFLT_MNG, TB_CAFETERIA_OPEN_HOUR, TB_CAFETERIA_DELV_ADDR, TB_CTGR_CATG_CD, TB_BP_AFLT_MY … / 입력: LAT, LNG, 근무지코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_r001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R013.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 근무지 설정 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR, TB_MEMBER_ENT_APP_DELV, TB_CAFETERIA_DELV … / 입력: TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_work_place_mng.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_work_place_mng_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=backBtn / 라벨: 이전 페이지로 / 앵커: HIT-ORDR-10-S-e03 / 해설: 이전 페이지로
- 구분: 기능 / 좌표: id=myBag / 라벨: 장바구니 / 앵커: HIT-ORDR-10-S-e04 / 해설: 장바구니

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
