--- 꼬리표 ---
id: BPG-ORDR-20-S / system: BPG / 기능: 비플PG > 스마트오더 주문 > 가맹점 상세 기본정보 / 과업: []

--- 화면명세 ---
화면명: 가맹점 상세 기본정보
목적: 가맹점 상세 기본정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 비플 오더 가맹점 정보 조회 / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_MEMBER_APP, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_CATG_PDT … / 입력: 비플가맹점순번, LAT, LNG / 실패: 필수 값 BP_AFLT_SEQ가 누락되었습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_detail_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_detail_r001_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_IMG_INFO_R002.xml:10
- 요소: 화면 / 업무: 장바구니 확인 / 처리: 읽기 / 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r002_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-ORDR-20-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 기본정보 / 앵커: BPG-ORDR-20-S-e06 / 해설: 기본정보
- 구분: 기능 / 좌표: - / 라벨: 안내사항 / 앵커: BPG-ORDR-20-S-e07 / 해설: 안내사항
- 구분: 기능 / 좌표: - / 라벨: 지도 / 앵커: BPG-ORDR-20-S-e08 / 해설: 지도

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_detail_basic_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
