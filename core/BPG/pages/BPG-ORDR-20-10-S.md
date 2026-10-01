--- 꼬리표 ---
id: BPG-ORDR-20-10-S / system: BPG / 기능: 비플PG > 스마트오더 주문 > 가맹점 상세 기본정보 > 스마트 오더 메뉴 상세 / 과업: []

--- 화면명세 ---
화면명: 스마트 오더 메뉴 상세
목적: 스마트 오더 메뉴 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-ORDR-20-S

--- 업무 ---
- 요소: BPG-ORDR-20-10-S-e11 / 업무: 장바구니 담기 처리 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT / 입력: 구분자, 가맹점순번, 메뉴순번, 메뉴명, 메뉴수량, 옵션리스트, 가격, 메뉴+옵션 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_menu_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_menu_r001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_C001.xml:10
- 요소: BPG-ORDR-20-10-S-e14 / 업무: 장바구니 옵션 변경 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG / 입력: 가격, 메뉴+옵션, 가맹점 장바구니 순번, 장바구니 메뉴 순번, 옵션리스트, 수량 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_menu_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_menu_r002_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10
- 요소: 화면 / 업무: 장바구니 수량 체크 / 처리: 읽기 / 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MY / 입력: 비플가맹점순번, PLUS_CNT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r002_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-ORDR-20-10-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 수량빼기 / 앵커: BPG-ORDR-20-10-S-e09 / 해설: 수량빼기
- 구분: 기능 / 좌표: - / 라벨: 수량추가 / 앵커: BPG-ORDR-20-10-S-e10 / 해설: 수량추가
- 구분: 기능 / 좌표: id=btn_next / 라벨: 4,500 원 담기 / 앵커: BPG-ORDR-20-10-S-e11 / 해설: 4,500 원 담기
- 구분: 기능 / 좌표: - / 라벨: 다 팔렸어요. / 앵커: BPG-ORDR-20-10-S-e12 / 해설: 다 팔렸어요.
- 구분: 기능 / 좌표: - / 라벨: 지금은 주문을 받을 수 없어요. / 앵커: BPG-ORDR-20-10-S-e13 / 해설: 지금은 주문을 받을 수 없어요.
- 구분: 기능 / 좌표: id=btn_option / 라벨: 옵션 수정하기 / 앵커: BPG-ORDR-20-10-S-e14 / 해설: 옵션 수정하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_menu_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
