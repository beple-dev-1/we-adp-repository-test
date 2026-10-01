--- 꼬리표 ---
id: BPG-ORDR-10-S / system: BPG / 기능: 비플PG > 스마트오더 주문 > 비플오더 장바구니 / 과업: []

--- 화면명세 ---
화면명: 비플오더 장바구니
목적: 비플오더 장바구니 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 그린메세지 발송 / 처리: 미확인 / 입력: MESSAGE, RECV_USER_MOB_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.comm_send_green_msg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/comm_send_green_msg_act.jsp:29
- 요소: 화면 / 업무: 장바구니 메뉴 삭제 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_MYBAG / 입력: 가맹점 장바구니 순번, 장바구니 메뉴 순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_d001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
- 요소: 화면 / 업무: 비플오더 장바구니 조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R004.xml:10
- 요소: 화면 / 업무: 장바구니 업데이트 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG / 입력: 장바구니순번, 장바구니메뉴순번, 메뉴+옵션, 수량, 메뉴+옵션 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r003_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10
- 요소: 화면 / 업무: 비플오더 주문원장 등록 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_MEMBER_APP, TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT … / 입력: 가격, 비플가맹점순번, ROBOT_MENU_CD, 가맹점 장바구니 순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r004_act.jsp:41 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_PDT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_OPT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10
- 요소: 화면 / 업무: 장바구니 검증(가맹점 영업 여부, 메뉴 품절 여부 검증) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_MNG, TB_BP_KIOSK_CONN / 입력: 비플오더메뉴순번, 비플가맹점순번 / 실패: 필수 값이 누락되었습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r005_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPG-ORDR-10-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=more / 라벨: + 더 담으러 가기 / 앵커: BPG-ORDR-10-S-e06 / 해설: + 더 담으러 가기
- 구분: 기능 / 좌표: id=menu_btn / 라벨: 원 주문하기 / 앵커: BPG-ORDR-10-S-e07 / 해설: 원 주문하기
- 구분: 기능 / 좌표: id=no_menu_btn / 라벨: 메뉴 담으러 가기 / 앵커: BPG-ORDR-10-S-e08 / 해설: 메뉴 담으러 가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
