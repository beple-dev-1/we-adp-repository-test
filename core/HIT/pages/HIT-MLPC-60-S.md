--- 꼬리표 ---
id: HIT-MLPC-60-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 식수신청내역 (list) / 과업: []

--- 화면명세 ---
화면명: 식수신청내역 (list)
목적: 식수신청내역 (list) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 식수신청 정보 상세조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP / 입력: 회원코드, 앱코드, HEADCNT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_det_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10
- 요소: 화면 / 업무: 식수신청 등록시간 pc정보조회 / 처리: 읽기 / 테이블: TB_ENT_HEADCNT_ABLE_TM / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_headcnt_able_tm_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_headcnt_able_tm_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_R001.xml:10
- 요소: 화면 / 업무: 식수신청 정보등록 / 처리: 읽기·쓰기 / 테이블: TB_ENT_HEADCNT, TB_ENT_HEADCNT_USER, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_ENT_CORP_SITE, TB_MEMBER … / 입력: ENT_HEADCNT_MAIN_DATA, ENT_HEADCNT_USER_DATA / 실패: DB처리중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_headcnt_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_headcnt_c001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_USER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- 요소: 화면 / 업무: 식수신청내역 조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_headcnt_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_headcnt_list_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R004.xml:10
- 요소: 화면 / 업무: 식수신청정보 변경 / 처리: 읽기·쓰기 / 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP / 입력: HEADCNT_SEQ, MANAGER_COMMENT, 처리상태 / 실패: DB처리중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_headcnt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_headcnt_u001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MLPC-60-S-e09 / 해설: 1개월
- 구분: 기능 / 좌표: - / 라벨: 전체 상태 / 앵커: HIT-MLPC-60-S-e10 / 해설: 전체 상태
- 구분: 기능 / 좌표: - / 라벨: 식수 신청하기 / 앵커: HIT-MLPC-60-S-e11 / 해설: 식수 신청하기
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MLPC-60-S-e12 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MLPC-60-S-e13 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MLPC-60-S-e14 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MLPC-60-S-e15 / 해설: last
- 구분: 기능 / 좌표: - / 라벨: 식수신청 / 앵커: HIT-MLPC-60-S-e16 / 해설: 식수신청

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pc/ent_pc_headcnt_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
