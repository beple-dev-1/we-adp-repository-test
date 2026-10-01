--- 꼬리표 ---
id: HIT-MEAL-20-20-S / system: HIT / 기능: 힛플러스 > 식수 신청 > 식수 신청내역 > 신청 신청_정보 입력 / 과업: []

--- 화면명세 ---
화면명: 신청 신청_정보 입력
목적: 신청 신청_정보 입력 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MEAL-20-S

--- 업무 ---
- 요소: 화면 / 업무: 식수신청_날짜선택 (화면) / 처리: 미확인 / 입력: BLOCK_LAST_DATE, SEND_DATE_INPUT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_calendar.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_calendar_act.jsp:28
- 요소: 화면 / 업무: 식수 신청_대상자정보입력 (화면) / 처리: 미확인 / 입력: HEADCNT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_user.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_user_act.jsp:24
- 요소: 화면 / 업무: 식수신청 등록시간 정보조회 / 처리: 읽기 / 테이블: TB_ENT_HEADCNT_ABLE_TM / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_ent_headcnt_able_tm_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/tb_ent_headcnt_able_tm_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-MEAL-20-20-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 시작일자 선택 / 앵커: HIT-MEAL-20-20-S-e08 / 해설: 시작일자 선택
- 구분: 기능 / 좌표: - / 라벨: 종료일자 선택 / 앵커: HIT-MEAL-20-20-S-e09 / 해설: 종료일자 선택
- 구분: 기능 / 좌표: id=btnMain / 라벨: 다음 / 앵커: HIT-MEAL-20-20-S-e10 / 해설: 다음
- 구분: 항목 / 좌표: id=headcnt_title / 라벨: 식수 신청건 명을 작성해 주세요. / 앵커: HIT-MEAL-20-20-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=headcnt_reason / 라벨: headcnt_reason / 앵커: HIT-MEAL-20-20-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_headcnt_main_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
