--- 꼬리표 ---
id: BPY-HIST-50-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 거래내역화면 v2 / 과업: []

--- 화면명세 ---
화면명: 거래내역화면 v2
목적: 거래내역화면 v2 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 거래내역 조회 v2 / 처리: 읽기 / 테이블: TB_ZEROPAY_BPPG_COMPLEX_TRAN, TB_TRAN, TB_ZEROPAY_BPPG_TRAN, TB_QR_MNG, TB_STORE_MNG, TB_ZEROPAY_PG_TRAN … / 입력: 페이지번호, TRX_DT1, TRX_DT2, 거래구분, 요청건수, 결제수단 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000002_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000002_v2_act.jsp:17 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R035.xml:10
- 요소: 화면 / 업무: 제로페이 영수증 v2 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN, TB_BRND_TRAN, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 실패: 올바르지 않은 검색 문자가 포함되어있습니다.[0] / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_v2_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=period_tx / 라벨: 3개월 / 앵커: BPY-HIST-50-S-e07 / 해설: 3개월
- 구분: 기능 / 좌표: id=pay_tp_tx / 라벨: 결제수단 / 앵커: BPY-HIST-50-S-e08 / 해설: 결제수단
- 구분: 기능 / 좌표: id=trx_st_tx / 라벨: 결제상태 / 앵커: BPY-HIST-50-S-e09 / 해설: 결제상태
- 구분: 기능 / 좌표: id=go_main / 라벨: 이전페이지로 / 앵커: BPY-HIST-50-S-e10 / 해설: 이전페이지로
- 구분: 기능 / 좌표: - / 라벨: 원 / 앵커: BPY-HIST-50-S-e11 / 해설: 원
- 구분: 기능 / 좌표: - / 라벨: 더보기 / 앵커: BPY-HIST-50-S-e12 / 해설: 더보기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/zero_tran_v2_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
