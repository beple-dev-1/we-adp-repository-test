--- 꼬리표 ---
id: HIT-ORDR-40-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 사내 카페 메뉴 조회 / 과업: []

--- 화면명세 ---
화면명: 사내 카페 메뉴 조회
목적: 사내 카페 메뉴 조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: HIT-ORDR-40-S-e12 / 업무: 가맹점 상세 기본정보_v2 (화면) / 처리: 미확인 / 입력: 비플가맹점순번, LAT, LNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_detail_basic_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/ent_smt_odr_detail_basic_v2_act.jsp:25
- 요소: 화면 / 업무: 장바구니 담기 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_MEMBER_APP, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG … / 입력: 구분자, 가맹점순번, 메뉴순번, 메뉴명, 메뉴수량, 가격, 메뉴+옵션, REC, 수령방법 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_menu_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_r002_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_C001.xml:10
- 요소: HIT-ORDR-40-S-e17 / 업무: 장바구니 옵션 변경 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG / 입력: 가격, 메뉴+옵션, 가맹점 장바구니 순번, 장바구니 메뉴 순번, 수량, REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_menu_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_r003_act.jsp:13 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10
- 요소: 화면 / 업무: 장바구니 수량 체크 / 처리: 읽기 / 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MY / 입력: 비플가맹점순번, PLUS_CNT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_menu_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_r004_act.jsp:13 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=minus / 라벨: 빼기 버튼 / 앵커: HIT-ORDR-40-S-e10 / 해설: 빼기 버튼
- 구분: 기능 / 좌표: id=plus / 라벨: 더하기 버튼 / 앵커: HIT-ORDR-40-S-e11 / 해설: 더하기 버튼
- 구분: 기능 / 좌표: id=backBtn / 라벨: 이전 페이지로 / 앵커: HIT-ORDR-40-S-e12 / 해설: 이전 페이지로
- 구분: 기능 / 좌표: - / 라벨: 메뉴 이미지 / 앵커: HIT-ORDR-40-S-e13 / 해설: 메뉴 이미지
- 구분: 기능 / 좌표: - / 라벨: 4,500 원 담기 / 앵커: HIT-ORDR-40-S-e14 / 해설: 4,500 원 담기
- 구분: 기능 / 좌표: id=btn_open / 라벨: 지금은 주문을 받을 수 없어요. / 앵커: HIT-ORDR-40-S-e15 / 해설: 지금은 주문을 받을 수 없어요.
- 구분: 기능 / 좌표: id=btn_sold / 라벨: 다 팔렸어요. / 앵커: HIT-ORDR-40-S-e16 / 해설: 다 팔렸어요.
- 구분: 기능 / 좌표: id=btn_option / 라벨: 옵션 수정하기 / 앵커: HIT-ORDR-40-S-e17 / 해설: 옵션 수정하기
- 구분: 기능 / 좌표: id=close / 라벨: 닫기 / 앵커: HIT-ORDR-40-S-e18 / 해설: 닫기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
