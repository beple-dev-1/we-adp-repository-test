--- 꼬리표 ---
id: BPY-MYAF-10-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > 가맹점 프로필 관리 / 과업: []

--- 화면명세 ---
화면명: 가맹점 프로필 관리
목적: 가맹점 프로필 관리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: MY 가맹점 메뉴판 이미지 수정 화면 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG … / 입력: 가맹점ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_board.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_board_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10
- 요소: 화면 / 업무: 가맹점프로필 > 가맹점 사진 수정 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG / 입력: 가맹점ID, ENTER_FLAG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_img.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_img_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_IMG_INFO_R001.xml:10
- 요소: 화면 / 업무: 가맹점 프로필 > 가맹점 소개 수정 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG … / 입력: 가맹점ID, ENTER_FLAG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_intro.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_intro_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10
- 요소: 화면 / 업무: 가맹점프로필 > 메뉴 수정 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG … / 입력: 가맹점ID, ENTER_FLAG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_pdt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_pdt_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_PDT_INFO_R001.xml:10
- 요소: 화면 / 업무: 가맹점프로필 > 가맹점 프로필사진 등록 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY, TB_BP_AFLT_MNG / 입력: 가맹점ID, ENTER_FLAG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_profileImg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_profileImg_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R009.xml:10
- 요소: 화면 / 업무: 가맹점 프로필 > 영업시간 수정 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MY_WT_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG / 입력: 가맹점ID, FLAG, ENTER_FLAG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_wt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_wt_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-MYAF-10-S-e03 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 확인 / 앵커: BPY-MYAF-10-S-e04 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_my_aflt_profile_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
