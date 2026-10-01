--- 꼬리표 ---
id: HIT-MEAL-20-30-S / system: HIT / 기능: 힛플러스 > 식수 신청 > 식수 신청내역 > 식수 신청_대상자정보입력 / 과업: []

--- 화면명세 ---
화면명: 식수 신청_대상자정보입력
목적: 식수 신청_대상자정보입력 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MEAL-20-S

--- 업무 ---
- 요소: 화면 / 업무: 식수신청 정보등록 / 처리: 읽기·쓰기 / 테이블: TB_ENT_HEADCNT, TB_ENT_HEADCNT_USER, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_ENT_CORP_SITE, TB_MEMBER … / 입력: ENT_HEADCNT_MAIN_DATA, ENT_HEADCNT_USER_DATA / 실패: DB처리중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_c001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_USER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- 요소: 화면 / 업무: 식수신청 등록시간 정보조회 / 처리: 읽기 / 테이블: TB_ENT_HEADCNT_ABLE_TM / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_ent_headcnt_able_tm_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/tb_ent_headcnt_able_tm_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=addUser / 라벨: + 사용자 추가하기 / 앵커: HIT-MEAL-20-30-S-e07 / 해설: + 사용자 추가하기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-MEAL-20-30-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btnMain / 라벨: 신청하기 / 앵커: HIT-MEAL-20-30-S-e09 / 해설: 신청하기
- 구분: 항목 / 좌표: id=headcnt_name / 라벨: 실명을 입력해 주세요. / 앵커: HIT-MEAL-20-30-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=headcnt_phone / 라벨: 휴대전화 번호를 입력해 주세요. / 앵커: HIT-MEAL-20-30-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=headcnt_card / 라벨: 출입 카드 번호를 입력해 주세요. / 앵커: HIT-MEAL-20-30-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_headcnt_user_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
