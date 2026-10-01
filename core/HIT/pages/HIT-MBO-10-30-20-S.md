--- 꼬리표 ---
id: HIT-MBO-10-30-20-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 메뉴관리 > 시간설정 / 과업: []

--- 화면명세 ---
화면명: 시간설정
목적: 시간설정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_시간설정 (화면) / 처리: 읽기 / 테이블: TB_CAFETERIA_OPEN_HOUR / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_hour.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_hour_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R002.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_시간정보 생성 / 처리: 쓰기 / 테이블: TB_CAFETERIA_OPEN_HOUR / 입력: BRUNCH, LUNCH, PICKUP, RESERVATION / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_hour_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_hour_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_C001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_시간정보 수정 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_OPEN_HOUR, TB_CAFETERIA_MENU, TEMP / 입력: BRUNCH, LUNCH, PICKUP, RESERVATION / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_hour_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_hour_u001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U006.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=modify_btn / 라벨: 수정 / 앵커: HIT-MBO-10-30-20-S-e03 / 해설: 수정

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_hour_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
