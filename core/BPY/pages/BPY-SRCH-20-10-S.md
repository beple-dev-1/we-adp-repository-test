--- 꼬리표 ---
id: BPY-SRCH-20-10-S / system: BPY / 기능: 비플페이 앱 > 가맹점 찾기 > 가맹점찾기 > 메인 > 가맹점찾기 > 상품권 사용처별 가맹점 검색 / 과업: []

--- 화면명세 ---
화면명: 가맹점찾기 > 상품권 사용처별 가맹점 검색
목적: 가맹점찾기 > 상품권 사용처별 가맹점 검색 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-SRCH-20-S

--- 업무 ---
- 요소: 화면 / 업무: 가맹점찾기 > 사용자 검색 내역 히스토리 원장 등록 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 >사용자 검색 내역 전체삭제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 >사용자 검색 내역 건별삭제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d002_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 상품권 사용처별 가맹점 검색 API / 처리: 읽기 / 테이블: TB_CTGR_CATG_CD, TB_AFFILIATION_MST, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TEMP, TB_CTGR_CATG_CD_V2 … / 입력: ZPP_ID, SEARCH_KEYWORD, LAT, LNG, CATEGORY_CD, START_ZIP_CD, END_ZIP_CD, REQ_PAGE, ORDER_CODE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r001_act.jsp:47 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R016.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R037.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R018.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 최근검색내역 조회 / 처리: 읽기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r002_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 위치검색 조회 / 처리: 읽기 / 테이블: TB_POST_DO, TB_POST_SI / 입력: SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r003_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-SRCH-20-10-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: BPY-SRCH-20-10-S-e09 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 검색어삭제 / 앵커: BPY-SRCH-20-10-S-e10 / 해설: 검색어삭제
- 구분: 기능 / 좌표: - / 라벨: 카테고리 더보기 / 앵커: BPY-SRCH-20-10-S-e11 / 해설: 카테고리 더보기
- 구분: 기능 / 좌표: - / 라벨: 거리 / 앵커: BPY-SRCH-20-10-S-e12 / 해설: 거리
- 구분: 기능 / 좌표: - / 라벨: 인기 / 앵커: BPY-SRCH-20-10-S-e13 / 해설: 인기
- 구분: 항목 / 좌표: - / 라벨: 매장명 또는 전화번호를 입력해 주세요. / 앵커: BPY-SRCH-20-10-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_srch_aflt_srch_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
