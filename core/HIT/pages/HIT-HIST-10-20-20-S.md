--- 꼬리표 ---
id: HIT-HIST-10-20-20-S / system: HIT / 기능: 힛플러스 > 결제내역 > 엔터프라이즈제로페이 영수증_v2 > 스마트오더 주문 상세내역 v2 > 엔터프라이즈_스마트오더 영수증 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_스마트오더 영수증
목적: 엔터프라이즈_스마트오더 영수증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-HIST-10-20-S

--- 업무 ---
- 요소: 화면 / 업무: 결제영수증PDF 조회/생성 (비플오더) / 처리: 읽기·쓰기 / 테이블: TB_EMAIL, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN, TB_CTGR_CATG, TB_BP_AFLT_MY … / 입력: 거래일자, 거래번호, EMAIL / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000006_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_C001.xml:10
- 요소: HIT-HIST-10-20-20-S-e04 / 업무: 스마트오더 주문내역 상세 (화면) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_THEFT … / 입력: ORDER_DT, ORDER_ID, ORDER_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10
- 요소: HIT-HIST-10-20-20-S-e04 / 업무: ent_zero_approve.act / 미확인: WSVC 없음 / 근거: ent_zero_approve.act (WSVC 없음)
- 요소: HIT-HIST-10-20-20-S-e04 / 업무: 엔터프라이즈_개인제로페이 MPM 결제 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY, TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST … / 입력: QR코드, 비플머니 여부, CHNL_CD, ACCT_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_approve_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_approve_v2_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
- 요소: HIT-HIST-10-20-20-S-e04 / 업무: 엔터프라이즈_법인 제로페이 결제화면 호출 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY, TB_ZEROPAY_MT_ODR, TB_MEMBER_MNY, TB_MEMBER_APP … / 입력: CARD_NO, TGT_YN, TGT_ORDER_DT, TGT_ORDER_ID, TGT_AMT, AMT, QR_CODE, REC_INDEX, CHNL_CD, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_corp_approve.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_corp_approve_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_R001.xml:10
- 요소: HIT-HIST-10-20-20-S-e04 / 업무: ent_zero_onaf2_complete.act / 미확인: WSVC 없음 / 근거: ent_zero_onaf2_complete.act (WSVC 없음)
- 요소: HIT-HIST-10-20-20-S-e04 / 업무: ent_zero_one_onaf_complete.act / 미확인: WSVC 없음 / 근거: ent_zero_one_onaf_complete.act (WSVC 없음)

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_close / 라벨: 닫기 / 앵커: HIT-HIST-10-20-20-S-e04 / 해설: 닫기
- 구분: 기능 / 좌표: id=detail_yn / 라벨: 가맹점 정보 / 앵커: HIT-HIST-10-20-20-S-e05 / 해설: 가맹점 정보
- 구분: 기능 / 좌표: id=btn_receipt / 라벨: 영수증 공유하기 / 앵커: HIT-HIST-10-20-20-S-e06 / 해설: 영수증 공유하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pay/ent_smt_odr_receipt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
