--- 꼬리표 ---
id: BPY-HIST-20-10-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 더보기>비대면결제내역>상세 > 더보기>비대면결제내역 / 과업: []

--- 화면명세 ---
화면명: 더보기>비대면결제내역
목적: 더보기>비대면결제내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-HIST-20-S

--- 업무 ---
- 요소: 화면 / 업무: 더보기>비대면결제내역>상세 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_MEMBER, TB_AFFILIATION_MNG … / 입력: MEM_NM, MDN, MEMO, AUTH_DATE, AUTH_TIME, REQ_TYPE, TRADE_AMT, PAY_VAT, PAY_SERVICE_AMT, MCH_SEND_UNIQ_NO … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_LIST_R002.xml:10
- 요소: 화면 / 업무: 더보기>비대면결제내역 조회 / 처리: 읽기 / 테이블: TB_BP_AFLT_MNG, TB_AFFILIATION_MNG, TEMP, TB_CTGR_CATG, TB_MEMBER_AFLT, TB_DANGOL_AFLT_MNG … / 입력: AFLT_ID, START_DATE, END_DATE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_onaf_list_r001_act.jsp:113 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R024.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R001.xml:10
- 요소: BPY-HIST-20-10-S-e05 / 업무: 비대면 결제 알림 설정 / 처리: 읽기 / 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP / 입력: 가맹점ID, 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_list_r002_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- 요소: 화면 / 업무: 비대면 결제 알림 설정 / 처리: 읽기·쓰기 / 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_AFFILIATION_MY_DETAIL_HIST / 입력: 가맹점ID, 회원코드, 앱코드, 푸시수신여부, 알림수신여부, 알림톡 수신여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_list_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_list_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 상위 메뉴로 이동 / 앵커: BPY-HIST-20-10-S-e04 / 해설: 상위 메뉴로 이동
- 구분: 기능 / 좌표: id=alert_set / 라벨: 알림설정 / 앵커: BPY-HIST-20-10-S-e05 / 해설: 알림설정
- 구분: 기능 / 좌표: id=srch_btn / 라벨: 전체 · 1주일 / 앵커: BPY-HIST-20-10-S-e06 / 해설: 전체 · 1주일

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/main_onaf_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
