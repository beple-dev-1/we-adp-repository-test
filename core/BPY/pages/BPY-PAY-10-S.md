--- 꼬리표 ---
id: BPY-PAY-10-S / system: BPY / 기능: 비플페이 앱 > 제로페이 결제 > 식권제로페이 결제방식선택 / 과업: []

--- 화면명세 ---
화면명: 식권제로페이 결제방식선택
목적: 식권제로페이 결제방식선택 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 빠른결제 검증 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_ONLN_AFF_TRAN / 입력: 회원코드, 앱코드, 가맹점ID, 결제금액, TYPE, 비픞머니 결제여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000015.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000015_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R018.xml:10
- 요소: 화면 / 업무: 스마트오더 결제 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_APP_DELIV … / 입력: ORDER_DT, ORDER_ID, SMT_ODR_PARAM, 메뉴개수, MENU_SCHEDULE_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_REQ_R001.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
- 요소: BPY-PAY-10-S-e04 / 업무: 비플오더 가맹점 관리에 신청 가맹점 노출 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_CORP / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R010.xml:10
- 요소: 화면 / 업무: 식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_meal_ticket_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_meal_ticket_c001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10
- 요소: 화면 / 업무: 식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, PROD_DV, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_meal_ticket_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_meal_ticket_c002_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-PAY-10-S-e04 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 혼자 결제하기 내 식권으로 결제 / 앵커: BPY-PAY-10-S-e05 / 해설: 혼자 결제하기 내 식권으로 결제
- 구분: 기능 / 좌표: - / 라벨: 함께 결제하기 직원들과 함께 결제 / 앵커: BPY-PAY-10-S-e06 / 해설: 함께 결제하기 직원들과 함께 결제

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_meal_ticket_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
