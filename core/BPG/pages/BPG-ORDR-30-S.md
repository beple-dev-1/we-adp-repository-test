--- 꼬리표 ---
id: BPG-ORDR-30-S / system: BPG / 기능: 비플PG > 스마트오더 주문 > 비플오더 가맹점 관리에 신청 가맹점 노출 / 과업: []

--- 화면명세 ---
화면명: 비플오더 가맹점 관리에 신청 가맹점 노출
목적: 비플오더 가맹점 관리에 신청 가맹점 노출 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 법인제로페이 이용약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 거래번호, 뒤로가기버튼 유무 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_clause1.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_clause1_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
- 요소: 화면 / 업무: 거리순 조회 / 처리: 읽기 / 테이블: CAST, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MY, TB_MEMBER, TB_MEMBER_APP / 입력: LAT, LNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- 요소: 화면 / 업무: 장바구니 확인 / 처리: 읽기 / 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r002_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10
- 요소: 화면 / 업무: 오피스푸드 매장 select / 처리: 읽기 / 테이블: CAST, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MY / 입력: LAT, LNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r005_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R011.xml:10
- 요소: 화면 / 업무: 배송지 등록 여부 판단 / 처리: 읽기 / 테이블: TB_MEMBER_APP_DELIV / 입력: 회원코드, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r006_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R003.xml:10
- 요소: 화면 / 업무: 제3자 동의여부 update / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: SMT_ODR_LOC_AGR_YN, 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_u001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U017.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-ORDR-30-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=oder_detail / 라벨: 주문내역 / 앵커: BPG-ORDR-30-S-e07 / 해설: 주문내역
- 구분: 기능 / 좌표: id=cart / 라벨: 장바구니 / 앵커: BPG-ORDR-30-S-e08 / 해설: 장바구니
- 구분: 기능 / 좌표: id=loca_btn / 라벨: 현재위치 / 앵커: BPG-ORDR-30-S-e09 / 해설: 현재위치
- 구분: 기능 / 좌표: - / 라벨: 거리순 / 앵커: BPG-ORDR-30-S-e10 / 해설: 거리순

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_main_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
