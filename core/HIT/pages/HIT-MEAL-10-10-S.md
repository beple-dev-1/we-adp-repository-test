--- 꼬리표 ---
id: HIT-MEAL-10-10-S / system: HIT / 기능: 힛플러스 > 식수 신청 > 식수 신청내역(본인) > 식수 신청내역 상세(본인) / 과업: []

--- 화면명세 ---
화면명: 식수 신청내역 상세(본인)
목적: 식수 신청내역 상세(본인) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MEAL-10-S

--- 업무 ---
- 요소: 화면 / 업무: 식수신청 정보 상세조회(본인) / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_HEADCNT, TB_MEMBER / 입력: 회원코드, 앱코드, HEADCNT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_det_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R009.xml:10
- 요소: 화면 / 업무: 식수신청정보 변경(본인) / 처리: 읽기·쓰기 / 테이블: TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_ENT_APP / 입력: HEADCNT_SEQ, MANAGER_COMMENT, 처리상태 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_u001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-MEAL-10-10-S-e02 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_me_headcnt_det_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
