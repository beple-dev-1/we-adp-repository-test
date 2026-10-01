--- 꼬리표 ---
id: BPY-MYAF-10-10-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > 가맹점 프로필 관리 > 메뉴판 등록 / 과업: []

--- 화면명세 ---
화면명: 메뉴판 등록
목적: 메뉴판 등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-10-S

--- 업무 ---
- 요소: 화면 / 업무: 이미지 웹 서버 삭제 / 처리: 미확인 / 입력: REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.FileTransfer.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/FileTransfer_act.jsp:26
- 요소: 화면 / 업무: MY 가맹점 메뉴판 등록 / 처리: 읽기·쓰기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG … / 입력: AFLT_ID, DEL_YN, REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_board_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_board_c001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- 요소: BPY-MYAF-10-10-S-e10 / 업무: MY 가맹점 메뉴판 삭제 / 처리: 읽기·쓰기 / 테이블: TB_AFFILIATION_MY_BOARD_INFO_HIST, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_ALARM_INFO / 입력: AFLT_ID, MENU_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_board_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_board_d001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-MYAF-10-10-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 메뉴판 사진 / 앵커: BPY-MYAF-10-10-S-e07 / 해설: 메뉴판 사진
- 구분: 기능 / 좌표: - / 라벨: 사진삭제 / 앵커: BPY-MYAF-10-10-S-e08 / 해설: 사진삭제
- 구분: 기능 / 좌표: - / 라벨: + 사진 추가 / 앵커: BPY-MYAF-10-10-S-e09 / 해설: + 사진 추가
- 구분: 기능 / 좌표: id=btn_ok / 라벨: 저장 / 앵커: BPY-MYAF-10-10-S-e10 / 해설: 저장

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_update_board_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
