--- 꼬리표 ---
id: BPY-MYAF-40-10-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > MY가맹점 > 가맹점 인증 > 가맹점 인증 / 과업: []

--- 화면명세 ---
화면명: 가맹점 인증
목적: 가맹점 인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-40-S

--- 업무 ---
- 요소: 화면 / 업무: 마이가맹점 등록 / 처리: 읽기·쓰기 / 테이블: TB_CTGR_CATG_CD, TB_BP_AFLT_MNG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO … / 입력: APP_CD, MNG_LVL, AFLT_ID, MEMB_CD, REPR_MOB_NO, REPR_NO1, REPR_NO2, ADDR1, ADDR2, ZIP_CD … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_aflt_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_aflt_reg_c001_act.jsp:43 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=backBtn / 라벨: 뒤로가기 / 앵커: BPY-MYAF-40-10-S-e03 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_ok1 / 라벨: 다음 / 앵커: BPY-MYAF-40-10-S-e04 / 해설: 다음

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_my_aflt_reg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
