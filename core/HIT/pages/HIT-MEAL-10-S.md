--- 꼬리표 ---
id: HIT-MEAL-10-S / system: HIT / 기능: 힛플러스 > 식수 신청 > 식수 신청내역(본인) / 과업: []

--- 화면명세 ---
화면명: 식수 신청내역(본인)
목적: 식수 신청내역(본인) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 식수 신청내역 상세(본인) (화면) / 처리: 미확인 / 입력: HEADCNT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_det.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_det_act.jsp:26
- 요소: 화면 / 업무: 식수신청 정보조회(본인) / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_HEADCNT, TB_MEMBER / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_list_r001_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R009.xml:10
- 요소: 화면 / 업무: 식수 신청작성(본인) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_write.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_write_act.jsp:27

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-MEAL-10-S-e03 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 식수 신청 / 앵커: HIT-MEAL-10-S-e04 / 해설: 식수 신청

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_me_headcnt_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
