--- 꼬리표 ---
id: BPY-SRCH-20-10-10-S / system: BPY / 기능: 비플페이 앱 > 가맹점 찾기 > 가맹점찾기 > 메인 > 가맹점찾기 > 상품권 사용처별 가맹점 검색 > 가맹점찾기 > 가맹점 상세 / 과업: []

--- 화면명세 ---
화면명: 가맹점찾기 > 가맹점 상세
목적: 가맹점찾기 > 가맹점 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-SRCH-20-10-S

--- 업무 ---
- 요소: 화면 / 업무: 가맹점 즐겨찾기 등록 및 갱신 / 처리: 미확인 / 입력: AFLT_ID, BOOKMARK_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_dtl_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_dtl_c001_act.jsp:27
- 요소: 화면 / 업무: 가맹점 상세정보 조회 / 처리: 읽기 / 테이블: TB_AFFILIATION_MY_WT_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO … / 입력: AFLT_ID / 실패: 오류가 발생하였습니다. | 가맹점 결제 가능 상품권 조회 중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_dtl_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_dtl_r001_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_PDT_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_IMG_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-SRCH-20-10-10-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 즐겨찾기 / 앵커: BPY-SRCH-20-10-10-S-e09 / 해설: 즐겨찾기
- 구분: 기능 / 좌표: - / 라벨: 지도보기 / 앵커: BPY-SRCH-20-10-10-S-e10 / 해설: 지도보기
- 구분: 기능 / 좌표: id=intro_tab / 라벨: 소개 / 앵커: BPY-SRCH-20-10-10-S-e11 / 해설: 소개
- 구분: 기능 / 좌표: id=menu_tab / 라벨: 메뉴 / 앵커: BPY-SRCH-20-10-10-S-e12 / 해설: 메뉴
- 구분: 기능 / 좌표: id=img_tab / 라벨: 사진 / 앵커: BPY-SRCH-20-10-10-S-e13 / 해설: 사진
- 구분: 기능 / 좌표: id=report_btn / 라벨: 프로필 정보에 문제가 있어요! 신고하기 / 앵커: BPY-SRCH-20-10-10-S-e14 / 해설: 프로필 정보에 문제가 있어요! 신고하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_srch_aflt_dtl_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
