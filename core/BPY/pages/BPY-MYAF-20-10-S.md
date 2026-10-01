--- 꼬리표 ---
id: BPY-MYAF-20-10-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > MY 가맹점 기본 프로필 정보 수정 화면 > 가맹점 프로필 > 업종 수정 / 과업: []

--- 화면명세 ---
화면명: 가맹점 프로필 > 업종 수정
목적: 가맹점 프로필 > 업종 수정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-20-S

--- 업무 ---
- 요소: BPY-MYAF-20-10-S-e04 / 업무: MY 가맹점 업종 정보 수정 정보 반영 / 처리: 읽기·쓰기 / 테이블: TB_AFFILIATION_MY_HIST, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_ALARM_INFO, TB_MEMBER / 입력: 가맹점ID, CTGR_CATG_CD, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_ctgr_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_ctgr_u001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=backBtn / 라벨: 뒤로가기 / 앵커: BPY-MYAF-20-10-S-e03 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_ok / 라벨: 저장 / 앵커: BPY-MYAF-20-10-S-e04 / 해설: 저장

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_update_ctgr_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
