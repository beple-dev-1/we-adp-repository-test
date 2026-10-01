--- 꼬리표 ---
id: HIT-ORDR-28-10-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 메뉴 상세 초기화 > 스마트오더 매장 메뉴 / 과업: []

--- 화면명세 ---
화면명: 스마트오더 매장 메뉴
목적: 스마트오더 매장 메뉴 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-ORDR-28-S

--- 업무 ---
- 요소: 화면 / 업무: 스마트오더 매장 메뉴 초기화 / 처리: 읽기 / 테이블: TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP, TB_BP_AFLT_MY, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV … / 입력: BP_AFLT_SEQ, 메뉴 제공 날짜, 초기화 여부, 채널구분 / 실패: 필수 값 BP_AFLT_SEQ 누락되었습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_menu_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_menu_r001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_ADDR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R001.xml:10
- 요소: HIT-ORDR-28-10-S-e07 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 조식 / 앵커: HIT-ORDR-28-10-S-e05 / 해설: 조식
- 구분: 기능 / 좌표: - / 라벨: 중식 / 앵커: HIT-ORDR-28-10-S-e06 / 해설: 중식
- 구분: 기능 / 좌표: id=backBtn / 라벨: 뒤로가기 / 앵커: HIT-ORDR-28-10-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=close_btn / 라벨: 지금은 주문가능 시간이 아닙니다. / 앵커: HIT-ORDR-28-10-S-e08 / 해설: 지금은 주문가능 시간이 아닙니다.

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_odr_menu_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
