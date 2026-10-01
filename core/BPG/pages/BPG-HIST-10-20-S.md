--- 꼬리표 ---
id: BPG-HIST-10-20-S / system: BPG / 기능: 비플PG > 결제내역 > 스마트오더 > 스마트오더 영수증 / 과업: []

--- 화면명세 ---
화면명: 스마트오더 영수증
목적: 스마트오더 영수증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 결제영수증PDF 조회/생성 (비플오더) / 처리: 읽기·쓰기 / 테이블: TB_EMAIL, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN, TB_CTGR_CATG, TB_BP_AFLT_MY … / 입력: 거래일자, 거래번호, EMAIL / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.MAIN_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/MAIN_000006_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_C001.xml:10
- 요소: BPG-HIST-10-20-S-e04 / 업무: 개인 제로페이 결제화면 호출 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_QR, TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST … / 입력: QR코드, 비플머니 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_approve.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_approve_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R018.xml:10
- 요소: BPG-HIST-10-20-S-e04 / 업무: 개인제로페이 MPM 결제 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY, TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST … / 입력: QR코드, 비플머니 여부, CHNL_CD, ACCT_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_approve_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_approve_v2_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R006.xml:10
- 요소: BPG-HIST-10-20-S-e04 / 업무: 법인 제로페이 결제화면 호출 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_QR, TB_AFFILIATION_MY, TB_ZEROPAY_MT_ODR, TB_MEMBER_MNY, TB_MEMBER_APP … / 입력: CARD_NO, TGT_YN, TGT_ORDER_DT, TGT_ORDER_ID, TGT_AMT, AMT, QR_CODE, REC_INDEX, CHNL_CD, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_corp_approve.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_corp_approve_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- 요소: BPG-HIST-10-20-S-e04 / 업무: 통합 비대면결제 결제 완료 (화면) / 미확인: IDO 동적 이름 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_complete_act.jsp:32

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_close / 라벨: 페이지나가기 / 앵커: BPG-HIST-10-20-S-e04 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=detail_yn / 라벨: 가맹점 정보 / 앵커: BPG-HIST-10-20-S-e05 / 해설: 가맹점 정보
- 구분: 기능 / 좌표: id=btn_receipt / 라벨: 영수증 공유하기 / 앵커: BPG-HIST-10-20-S-e06 / 해설: 영수증 공유하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_receipt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
