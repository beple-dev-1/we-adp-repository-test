--- 꼬리표 ---
id: BPG-OFFD-10-10-S / system: BPG / 기능: 비플PG > 오피스푸드 > 오피스푸드 메인 > 배송지 등록(로케이션) / 과업: []

--- 화면명세 ---
화면명: 배송지 등록(로케이션)
목적: 배송지 등록(로케이션) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OFFD-10-S

--- 업무 ---
- 요소: 화면 / 업무: 오피스푸드 - 배송지(로케이션)조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.DELIV_0004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/DELIV_0004_act.jsp:22
- 요소: 화면 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10
- 요소: 화면 / 업무: 비플오더 가맹점 관리에 신청 가맹점 노출 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_CORP / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R010.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OFFD-10-10-S-e02 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_loc_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
