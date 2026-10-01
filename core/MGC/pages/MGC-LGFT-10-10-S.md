--- 꼬리표 ---
id: MGC-LGFT-10-10-S / system: MGC / 기능: 모바일상품권 > 지역상품권 > 가맹점 찾기 > 매장검색(카테고리·지도로 찾기) / 과업: []

--- 화면명세 ---
화면명: 매장검색(카테고리·지도로 찾기)
목적: 매장검색(카테고리·지도로 찾기) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 가맹점찾기 > 사용자 검색 내역 히스토리 원장 등록 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 >사용자 검색 내역 전체삭제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 >사용자 검색 내역 건별삭제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d002_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 상품권 사용처별 가맹점 검색 API / 처리: 읽기 / 테이블: TB_CTGR_CATG_CD, TB_AFFILIATION_MST, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TEMP, TB_CTGR_CATG_CD_V2 … / 입력: ZPP_ID, SEARCH_KEYWORD, LAT, LNG, CATEGORY_CD, START_ZIP_CD, END_ZIP_CD, REQ_PAGE, ORDER_CODE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r001_act.jsp:47 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R016.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R037.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R018.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 최근검색내역 조회 / 처리: 읽기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r002_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 위치검색 조회 / 처리: 읽기 / 테이블: TB_POST_DO, TB_POST_SI / 입력: SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r003_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 이전 / 앵커: MGC-LGFT-10-10-S-e24 / 해설: 이전
- 구분: 기능 / 좌표: - / 라벨: 비플머니 / 앵커: MGC-LGFT-10-10-S-e25 / 해설: 비플머니
- 구분: 기능 / 좌표: - / 라벨: 지도로 찾기 / 앵커: MGC-LGFT-10-10-S-e26 / 해설: 지도로 찾기
- 구분: 기능 / 좌표: - / 라벨: 변경 / 앵커: MGC-LGFT-10-10-S-e27 / 해설: 변경
- 구분: 기능 / 좌표: - / 라벨: 매장검색 / 앵커: MGC-LGFT-10-10-S-e28 / 해설: 매장검색
- 구분: 기능 / 좌표: - / 라벨: 전체 / 앵커: MGC-LGFT-10-10-S-e29 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 학원/교육 / 앵커: MGC-LGFT-10-10-S-e30 / 해설: 학원/교육
- 구분: 기능 / 좌표: - / 라벨: 음식점/카페 / 앵커: MGC-LGFT-10-10-S-e31 / 해설: 음식점/카페
- 구분: 기능 / 좌표: - / 라벨: 의료/보건 / 앵커: MGC-LGFT-10-10-S-e32 / 해설: 의료/보건
- 구분: 기능 / 좌표: - / 라벨: 농산물/청과 / 앵커: MGC-LGFT-10-10-S-e33 / 해설: 농산물/청과
- 구분: 기능 / 좌표: - / 라벨: 수산물/횟집 / 앵커: MGC-LGFT-10-10-S-e34 / 해설: 수산물/횟집
- 구분: 기능 / 좌표: - / 라벨: 축산물/정육 / 앵커: MGC-LGFT-10-10-S-e35 / 해설: 축산물/정육
- 구분: 기능 / 좌표: - / 라벨: 미용/패션 / 앵커: MGC-LGFT-10-10-S-e36 / 해설: 미용/패션
- 구분: 기능 / 좌표: - / 라벨: 식료품/반찬 / 앵커: MGC-LGFT-10-10-S-e37 / 해설: 식료품/반찬
- 구분: 기능 / 좌표: - / 라벨: 가구/가전 / 앵커: MGC-LGFT-10-10-S-e38 / 해설: 가구/가전
- 구분: 기능 / 좌표: - / 라벨: 서비스업 / 앵커: MGC-LGFT-10-10-S-e39 / 해설: 서비스업
- 구분: 기능 / 좌표: - / 라벨: 기타 도소매 / 앵커: MGC-LGFT-10-10-S-e40 / 해설: 기타 도소매
- 구분: 기능 / 좌표: - / 라벨: 업종 전체보기 / 앵커: MGC-LGFT-10-10-S-e41 / 해설: 업종 전체보기
- 구분: 기능 / 좌표: id=sort_order_D / 라벨: 거리순 / 앵커: MGC-LGFT-10-10-S-e42 / 해설: 거리순
- 구분: 기능 / 좌표: id=sort_order_P / 라벨: 인기순 / 앵커: MGC-LGFT-10-10-S-e43 / 해설: 인기순
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: MGC-LGFT-10-10-S-e44 / 해설: 삭제
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: MGC-LGFT-10-10-S-e45 / 해설: 검색
- 구분: 항목 / 좌표: id=SRCH_WORD_STORE / 라벨: 매장명 또는 전화번호 검색 / 앵커: MGC-LGFT-10-10-S-e46 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0010_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
