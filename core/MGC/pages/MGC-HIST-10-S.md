--- 꼬리표 ---
id: MGC-HIST-10-S / system: MGC / 기능: 모바일상품권 > 결제내역 > 결제내역 / 과업: []

--- 화면명세 ---
화면명: 결제내역
목적: 결제내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 거래내역 조회 / 처리: 읽기 / 테이블: TB_ZEROPAY_BPPG_COMPLEX_TRAN, TB_TRAN, TB_ZEROPAY_BPPG_TRAN, TB_QR_MNG, TB_STORE_MNG, TB_ZEROPAY_PG_TRAN … / 입력: 페이지번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000002_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R006.xml:10
- 요소: 화면 / 업무: 브랜드상품권 구매 영수증 (화면) / 처리: 읽기 / 테이블: TB_BRND_TRAN / 입력: 거래일자, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_brd_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_brd_complete_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10
- 요소: 화면 / 업무: 제로페이 영수증 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG, TB_ZEROPAY_BPPG_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_ZEROPAY_MT_ODR … / 입력: 거래일자, 거래번호, 거래코드, 업무코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_act.jsp:17 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: 화면 / 업무: 제로페이 영수증 v2 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN, TB_BRND_TRAN, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 실패: 올바르지 않은 검색 문자가 포함되어있습니다.[0] / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_v2_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: 화면 / 업무: 상품권 구매 영수증 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN / 입력: 거래일자, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_gift_complete_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10
- 요소: 화면 / 업무: 제로페이 영수증( 온라인 PG ) (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_BPPG_TRAN, TB_TRAN, TB_ZEROPAY_PG_TRAN, TB_STORE_MNG, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG … / 입력: TRX_DT, TRX_SEQ, BIZ_CD_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_pg_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_pg_complete_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 이전 / 앵커: MGC-HIST-10-S-e02 / 해설: 이전

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/localgift/main/tranhist/TRANHIST0000_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
