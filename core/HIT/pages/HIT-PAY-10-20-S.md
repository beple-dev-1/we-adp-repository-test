--- 꼬리표 ---
id: HIT-PAY-10-20-S / system: HIT / 기능: 힛플러스 > 결제 > 엔터프라이즈_비플식권 혼자/함께결제 선택 > 식권제로페이 함께결제 (list) / 과업: []

--- 화면명세 ---
화면명: 식권제로페이 함께결제 (list)
목적: 식권제로페이 함께결제 (list) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-PAY-10-S

--- 업무 ---
- 요소: 화면 / 업무: 빠른결제 검증 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_ONLN_AFF_TRAN / 입력: 회원코드, 앱코드, 가맹점ID, 결제금액, TYPE, 비픞머니 결제여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000015.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000015_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R018.xml:10
- 요소: HIT-PAY-10-20-S-e04 / 업무: 스마트오더 결제하기(VIEW) (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_APP_DELIV … / 입력: ORDER_DT, ORDER_ID, 메뉴개수, MENU_SCHEDULE_ID, SMT_ODR_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bp_order_pay.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_bp_order_pay_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_COMPLEX_BASC_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ROBOT_DELV_ADDR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R004.xml:10
- 요소: 화면 / 업무: ent_bp_ygyo_pay.act / 미확인: WSVC 없음 / 근거: ent_bp_ygyo_pay.act (WSVC 없음)
- 요소: 화면 / 업무: 엔터프라이즈 주 충전수단 조회 화면 (화면) / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: CPLX_REF_URL, WACT_CPLX_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R005.xml:10
- 요소: 화면 / 업무: 식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: TRX_TP, USER_LIST / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_tgt_list_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_tgt_list_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10
- 요소: 화면 / 업무: 식권제로페이 함께결제 대상자 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: REQ_USER_NM, REQ_PAGE, REC_INDEX / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_tgt_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_tgt_list_r001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R029.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btnBack / 라벨: 뒤로가기 / 앵커: HIT-PAY-10-20-S-e04 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=okA / 라벨: 확인 / 앵커: HIT-PAY-10-20-S-e05 / 해설: 확인
- 구분: 항목 / 좌표: id=money / 라벨: 금액입력 / 앵커: HIT-PAY-10-20-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/ent_zero_tgt_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
