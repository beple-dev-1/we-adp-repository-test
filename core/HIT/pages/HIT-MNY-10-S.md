--- 꼬리표 ---
id: HIT-MNY-10-S / system: HIT / 기능: 힛플러스 > 비플머니 > 엔터프라이즈_비플머니 기본정보 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_비플머니 기본정보
목적: 엔터프라이즈_비플머니 기본정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈 주 충전수단 조회 화면 (화면) / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: CPLX_REF_URL, WACT_CPLX_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R005.xml:10
- 요소: 화면 / 업무: 엔터프라이즈제로페이 영수증_v2 (화면) / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_BPPAY_CARD_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_complete_v2_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R013.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: HIT-MNY-10-S-e27 / 업무: 엔터프라이즈_비플머니 충전 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_TRAN_MST / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_chrg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_chrg_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_비플머니 기본정보 > 이용내역 조회 / 처리: 읽기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_TRAN_MST, TB_MNY_ACU_DTL, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG … / 입력: START_DT, END_DT, 카테고리, 페이지번호, PAGE_SIZE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_info_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_info_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_비플머니 출금 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_wdrw.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_wdrw_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R024.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 취소 / 앵커: HIT-MNY-10-S-e19 / 해설: 취소
- 구분: 기능 / 좌표: - / 라벨: 조회하기 / 앵커: HIT-MNY-10-S-e20 / 해설: 조회하기
- 구분: 기능 / 좌표: - / 라벨: 팝업닫기 / 앵커: HIT-MNY-10-S-e21 / 해설: 팝업닫기
- 구분: 기능 / 좌표: id=btnBack / 라벨: 뒤로가기 / 앵커: HIT-MNY-10-S-e22 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 결제하기 / 앵커: HIT-MNY-10-S-e23 / 해설: 결제하기
- 구분: 기능 / 좌표: - / 라벨: 내역보기 / 앵커: HIT-MNY-10-S-e24 / 해설: 내역보기
- 구분: 기능 / 좌표: id=tot_expr_amt / 라벨: 0원 만료예정내역보기 / 앵커: HIT-MNY-10-S-e25 / 해설: 0원 만료예정내역보기
- 구분: 기능 / 좌표: - / 라벨: 출금신청하기 바로가기 / 앵커: HIT-MNY-10-S-e26 / 해설: 출금신청하기 바로가기
- 구분: 기능 / 좌표: id=btn_chrg / 라벨: 충전하기 / 앵커: HIT-MNY-10-S-e27 / 해설: 충전하기
- 구분: 기능 / 좌표: - / 라벨: 오늘 / 앵커: HIT-MNY-10-S-e28 / 해설: 오늘
- 구분: 기능 / 좌표: - / 라벨: 1주일 / 앵커: HIT-MNY-10-S-e29 / 해설: 1주일
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MNY-10-S-e30 / 해설: 1개월
- 구분: 기능 / 좌표: - / 라벨: 3개월 / 앵커: HIT-MNY-10-S-e31 / 해설: 3개월
- 구분: 기능 / 좌표: - / 라벨: 달력 / 앵커: HIT-MNY-10-S-e32 / 해설: 달력
- 구분: 기능 / 좌표: - / 라벨: 전체 / 앵커: HIT-MNY-10-S-e33 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 사용 / 앵커: HIT-MNY-10-S-e34 / 해설: 사용
- 구분: 기능 / 좌표: - / 라벨: 적립 / 앵커: HIT-MNY-10-S-e35 / 해설: 적립
- 구분: 기능 / 좌표: - / 라벨: 충전 / 앵커: HIT-MNY-10-S-e36 / 해설: 충전

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pay/ent_zero_mny_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
