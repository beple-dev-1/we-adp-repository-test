--- 꼬리표 ---
id: BPY-MYAF-50-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > 매니저 인증요청 수락 / 과업: []

--- 화면명세 ---
화면명: 매니저 인증요청 수락
목적: 매니저 인증요청 수락 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 알림함 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R015.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R016.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R002.xml:10
- 요소: 화면 / 업무: 공지사항 목록 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_list_act.jsp:15
- 요소: BPY-MYAF-50-S-e05 / 업무: 매니저 인증요청 수락 / 처리: 읽기·쓰기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG … / 입력: 가맹점ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_mng_acpt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_mng_acpt_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- 요소: 화면 / 업무: MY가맹점 > 약관동의 변경 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: MY_AFLT_AGR_YN, 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U006.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 페이지나가기 / 앵커: BPY-MYAF-50-S-e04 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=acpt_btn / 라벨: 매니저 인증 수락하기 / 앵커: BPY-MYAF-50-S-e05 / 해설: 매니저 인증 수락하기
- 구분: 기능 / 좌표: id=ok_btn / 라벨: 확인 / 앵커: BPY-MYAF-50-S-e06 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_my_mng_acpt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
