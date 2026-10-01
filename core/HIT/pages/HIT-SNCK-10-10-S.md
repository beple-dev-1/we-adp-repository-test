--- 꼬리표 ---
id: HIT-SNCK-10-10-S / system: HIT / 기능: 힛플러스 > 다과신청관리 > 다과 신청 내역 (list) > 내역 상세 / 과업: []

--- 화면명세 ---
화면명: 내역 상세
목적: 내역 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-SNCK-10-S

--- 업무 ---
- 요소: 화면 / 업무: 다과 신청 내역 상세 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP, TB_MEMBER, TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_MENU / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_det_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R002.xml:10
- 요소: 화면 / 업무: 다과 신청 상태 변경 / 처리: 쓰기 / 테이블: TB_ENT_FRSH_BRK / 입력: 처리상태, 회원코드, FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_det_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_det_u001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U001.xml:10
- 요소: 화면 / 업무: js.act / 미확인: WSVC 없음 / 근거: js.act (WSVC 없음)

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-SNCK-10-10-S-e03 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 채팅하기 / 앵커: HIT-SNCK-10-10-S-e04 / 해설: 채팅하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_frsh_brk_det_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
