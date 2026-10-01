--- 꼬리표 ---
id: HIT-PAY-40-S / system: HIT / 기능: 힛플러스 > 결제 > 엔터프라이즈_제로페이 결제 메인 > 계좌 상세 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_제로페이 결제 메인 > 계좌 상세
목적: 엔터프라이즈_제로페이 결제 메인 > 계좌 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈 주 충전수단 조회 화면 (화면) / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: CPLX_REF_URL, WACT_CPLX_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R005.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_스마트오더 영수증 (화면) / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_BPPAY_CARD_TRAN … / 입력: 거래일자, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_receipt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_smt_odr_receipt_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R013.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_제로페이 영수증 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG, TB_ZEROPAY_BPPG_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_ZEROPAY_MT_ODR … / 입력: 거래일자, 거래번호, 거래코드, 업무코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_complete_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈제로페이 영수증_v2 (화면) / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_BPPAY_CARD_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_complete_v2_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R013.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, PROD_DV, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_meal_ticket_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_meal_ticket_c002_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_제로페이 결제 메인 > 계좌 상세 > 이용내역 / 처리: 읽기 / 테이블: TB_ZEROPAY_COMPLEX_TRAN, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_ZEROPAY_MT_ODR, TB_ZEROPAY_BPPG_COMPLEX_TRAN, TB_ZEROPAY_BPPG_TRAN … / 입력: START_DT, END_DT, CTGRY, ACCT_NO, CLS_DSP_SEQ, LMT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_multi_info_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_multi_info_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_제로페이 영수증( 온라인 PG ) (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_BPPG_TRAN, TB_TRAN, TB_ZEROPAY_PG_TRAN, TB_STORE_MNG, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG … / 입력: TRX_DT, TRX_SEQ, BIZ_CD_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_pg_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_pg_complete_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_more / 라벨: 더보기 / 앵커: HIT-PAY-40-S-e16 / 해설: 더보기
- 구분: 기능 / 좌표: - / 라벨: 취소 / 앵커: HIT-PAY-40-S-e17 / 해설: 취소
- 구분: 기능 / 좌표: - / 라벨: 조회하기 / 앵커: HIT-PAY-40-S-e18 / 해설: 조회하기
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: HIT-PAY-40-S-e19 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=apprCorp / 라벨: 결제하기 / 앵커: HIT-PAY-40-S-e20 / 해설: 결제하기
- 구분: 기능 / 좌표: id=srch_btn / 라벨: 전체 · 1주일 유효기간 선택 / 앵커: HIT-PAY-40-S-e21 / 해설: 전체 · 1주일 유효기간 선택
- 구분: 기능 / 좌표: - / 라벨: 오늘 / 앵커: HIT-PAY-40-S-e22 / 해설: 오늘
- 구분: 기능 / 좌표: - / 라벨: 1주일 / 앵커: HIT-PAY-40-S-e23 / 해설: 1주일
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-PAY-40-S-e24 / 해설: 1개월
- 구분: 기능 / 좌표: - / 라벨: 3개월 / 앵커: HIT-PAY-40-S-e25 / 해설: 3개월
- 구분: 기능 / 좌표: - / 라벨: 달력 / 앵커: HIT-PAY-40-S-e26 / 해설: 달력
- 구분: 기능 / 좌표: - / 라벨: 전체 / 앵커: HIT-PAY-40-S-e27 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 승인내역 / 앵커: HIT-PAY-40-S-e28 / 해설: 승인내역
- 구분: 기능 / 좌표: - / 라벨: 취소내역 / 앵커: HIT-PAY-40-S-e29 / 해설: 취소내역
- 구분: 기능 / 좌표: - / 라벨: 함께결제 / 앵커: HIT-PAY-40-S-e30 / 해설: 함께결제

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pay/ent_zero_multi_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
