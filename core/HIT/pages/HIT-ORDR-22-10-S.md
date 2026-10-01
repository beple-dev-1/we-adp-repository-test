--- 꼬리표 ---
id: HIT-ORDR-22-10-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 스마트오더 결제하기(VIEW) > 스마트오더 주문 / 과업: []

--- 화면명세 ---
화면명: 스마트오더 주문
목적: 스마트오더 주문 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-ORDR-22-S

--- 업무 ---
- 요소: 화면 / 업무: 스마트오더 결제하기(VIEW) (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_APP_DELIV … / 입력: ORDER_DT, ORDER_ID, 메뉴개수, MENU_SCHEDULE_ID, SMT_ODR_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bp_order_pay.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_bp_order_pay_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_COMPLEX_BASC_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ROBOT_DELV_ADDR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R004.xml:10
- 요소: HIT-ORDR-22-10-S-e06 / 업무: 엔터프라이즈 배송주소지 등록 / 처리: 읽기 / 테이블: TB_CAFETERIA_WORK_PLCE, TB_BP_AFLT_MY, TB_CAFETERIA_DELV_DETAIL, TB_CAFETERIA_DELV, TB_MEMBER_ENT_APP_DELV / 입력: WORK_CD, 비플가맹점순번, DELV_SEQ, DELV_DETAIL_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_delv_addr_chg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_delv_addr_chg_c001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_WORK_PLCE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_C001.xml:10
- 요소: HIT-ORDR-22-10-S-e10 / 업무: 엔터프라이즈 배송주소지 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_WORK_PLCE, TB_BP_AFLT_MY, TB_CAFETERIA_DELV_DETAIL, TB_CAFETERIA_DELV, TB_MEMBER_ENT_APP_DELV / 입력: WORK_CD, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_delv_addr_chg_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_delv_addr_chg_r001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_WORK_PLCE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R001.xml:10
- 요소: HIT-ORDR-22-10-S-e10 / 업무: 주문원장 등록 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_ODR, TB_BPPAY_TRAN, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR … / 입력: 비플가맹점순번, MENU_SEQ, 제공날짜, 제공방식 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_odr_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_odr_c001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.SMT_ODR_TIMEOUT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_MENU_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.SMT_ODR_LOCK_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C002.xml:10
- 요소: 화면 / 업무: 주문 초기화 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_OPEN_HOUR, TB_BP_AFLT_MNG, TB_MEMBER_ENT_APP … / 입력: 비플가맹점순번, MENU_SEQ, 제공날짜 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_odr_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_odr_r001_act.jsp:17 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=delv_btn1 / 라벨: 저장 / 앵커: HIT-ORDR-22-10-S-e06 / 해설: 저장
- 구분: 기능 / 좌표: - / 라벨: 팝업닫기 / 앵커: HIT-ORDR-22-10-S-e07 / 해설: 팝업닫기
- 구분: 기능 / 좌표: id=backBtn / 라벨: 뒤로가기 / 앵커: HIT-ORDR-22-10-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=addrChange / 라벨: 변경 / 앵커: HIT-ORDR-22-10-S-e09 / 해설: 변경
- 구분: 기능 / 좌표: id=payBtn / 라벨: 결제하기 / 앵커: HIT-ORDR-22-10-S-e10 / 해설: 결제하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_odr_odr_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
