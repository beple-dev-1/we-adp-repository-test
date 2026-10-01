--- 꼬리표 ---
id: HIT-MEAL-10-20-S / system: HIT / 기능: 힛플러스 > 식수 신청 > 식수 신청내역(본인) > 식수 신청작성(본인) / 과업: []

--- 화면명세 ---
화면명: 식수 신청작성(본인)
목적: 식수 신청작성(본인) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MEAL-10-S

--- 업무 ---
- 요소: 화면 / 업무: 식수신청_날짜선택 (화면) / 처리: 미확인 / 입력: BLOCK_LAST_DATE, SEND_DATE_INPUT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_calendar.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_calendar_act.jsp:28
- 요소: 화면 / 업무: 식수신청 정보등록(본인) / 처리: 읽기·쓰기 / 테이블: TB_ENT_HEADCNT, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_MEMBER / 입력: ENT_HEADCNT_MAIN_DATA, ENT_HEADCNT_USER_DATA / 실패: DB처리중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_c001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U005.xml:10
- 요소: 화면 / 업무: 식수신청_실패(본인) (화면) / 처리: 미확인 / 입력: 응답메시지 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_fail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_fail_act.jsp:26
- 요소: 화면 / 업무: 식수 신청근무지조회(본인) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_work_cds_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_work_cds_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_R003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 팝업닫기 / 앵커: HIT-MEAL-10-20-S-e07 / 해설: 팝업닫기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-MEAL-10-20-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 시작일자 선택 / 앵커: HIT-MEAL-10-20-S-e09 / 해설: 시작일자 선택
- 구분: 기능 / 좌표: - / 라벨: 종료일자 선택 / 앵커: HIT-MEAL-10-20-S-e10 / 해설: 종료일자 선택
- 구분: 기능 / 좌표: id=btnMain / 라벨: 신청하기 / 앵커: HIT-MEAL-10-20-S-e11 / 해설: 신청하기
- 구분: 항목 / 좌표: id=headcnt_reason / 라벨: headcnt_reason / 앵커: HIT-MEAL-10-20-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_me_headcnt_write_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
