--- 꼬리표 ---
id: BPY-MYAF-10-30-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > 가맹점 프로필 관리 > 가맹점 프로필 > 가맹점 소개 수정 / 과업: []

--- 화면명세 ---
화면명: 가맹점 프로필 > 가맹점 소개 수정
목적: 가맹점 프로필 > 가맹점 소개 수정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-10-S

--- 업무 ---
- 요소: BPY-MYAF-10-30-S-e07 / 업무: MY 가맹점 소개정보 수정 정보 반영 / 처리: 읽기·쓰기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG … / 입력: 가맹점ID, AFLT_INFO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_intro_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_intro_u001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_back / 라벨: 뒤로가기 / 앵커: BPY-MYAF-10-30-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_infotip / 라벨: 이런 소개가 좋아요 / 앵커: BPY-MYAF-10-30-S-e06 / 해설: 이런 소개가 좋아요
- 구분: 기능 / 좌표: id=btn_save / 라벨: 저장 / 앵커: BPY-MYAF-10-30-S-e07 / 해설: 저장
- 구분: 항목 / 좌표: id=info_txt / 라벨: info_txt / 앵커: BPY-MYAF-10-30-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_update_intro_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
