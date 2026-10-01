--- 꼬리표 ---
id: BPY-HIST-40-50-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 거래내역화면 > 제로페이 영수증( 온라인 PG ) / 과업: []

--- 화면명세 ---
화면명: 제로페이 영수증( 온라인 PG )
목적: 제로페이 영수증( 온라인 PG ) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-HIST-40-S

--- 업무 ---
- 요소: 화면 / 업무: 결제영수증PDF 조회/생성 (온라인 PG) / 처리: 읽기·쓰기 / 테이블: TB_EMAIL, TB_ZEROPAY_PG_TRAN, TB_TRAN, TB_ZEROPAY_BPPG_TRAN, TB_TRAN_CONFIRMATION, TB_AFFILIATION_MNG … / 입력: 거래일자, 거래번호, 거래코드, EMAIL, BIZ_CD_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000004_act.jsp:49 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_COMFIRMATION_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_COMFIRMATION_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_COMFIRMATION_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_close / 라벨: 페이지나가기 / 앵커: BPY-HIST-40-50-S-e04 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=detail_yn / 라벨: 가맹점 정보 / 앵커: BPY-HIST-40-50-S-e05 / 해설: 가맹점 정보
- 구분: 기능 / 좌표: id=btn_receipt / 라벨: 영수증 공유하기 / 앵커: BPY-HIST-40-50-S-e06 / 해설: 영수증 공유하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_pg_complete_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
