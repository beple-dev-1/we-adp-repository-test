--- 꼬리표 ---
id: HIT-HIST-10-30-S / system: HIT / 기능: 힛플러스 > 결제내역 > 엔터프라이즈제로페이 영수증_v2 > 엔터프라이즈_거래내역 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_거래내역
목적: 엔터프라이즈_거래내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-HIST-10-S

--- 업무 ---
- 요소: 화면 / 업무: 거래내역 조회 / 처리: 읽기 / 테이블: TB_ZEROPAY_BPPG_COMPLEX_TRAN, TB_TRAN, TB_ZEROPAY_BPPG_TRAN, TB_QR_MNG, TB_STORE_MNG, TB_ZEROPAY_PG_TRAN … / 입력: 페이지번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000002_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R006.xml:10
- 요소: 화면 / 업무: 엔터프라이즈제로페이 영수증_v2 (화면) / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_BPPAY_CARD_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_complete_v2_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R013.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_main / 라벨: 뒤로가기 / 앵커: HIT-HIST-10-30-S-e02 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pay/ent_zero_tran_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
