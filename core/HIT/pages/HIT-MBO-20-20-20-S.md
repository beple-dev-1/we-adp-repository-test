--- 꼬리표 ---
id: HIT-MBO-20-20-20-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 다과 관리 > 다과 메뉴 관리 > 메뉴 / 과업: []

--- 화면명세 ---
화면명: 메뉴
목적: 메뉴 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 다과주문관리 메뉴 (화면) / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP_MENU, TB_ENT_FRSH_BRK_CORP_CATG / 입력: 직원상태, CATG_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_CATG_R001.xml:10
- 요소: 화면 / 업무: 다과주문관리 메뉴 추가 / 처리: 쓰기 / 테이블: TB_ENT_FRSH_BRK_CORP_MENU / 입력: MENU_NM, MENU_AMT, PACKAGE_YN, USE_YN, CATG_SEQ, MENU_INFO, ORDER_BY / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_c001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_C001.xml:10
- 요소: 화면 / 업무: 다과주문관리 메뉴 삭제 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_CORP_MENU / 입력: MENU_ID, CATG_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_d001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_U002.xml:10
- 요소: 화면 / 업무: 다과주문관리 메뉴 수정/순서변경 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_CORP_MENU / 입력: MENU_NM, MENU_AMT, PACKAGE_YN, USE_YN, CATG_SEQ, MENU_INFO, 직원상태, ORDER_BY, REC, MENU_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_menu_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_u001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_MENU_U002.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 다과 신청 내역 / 앵커: HIT-MBO-20-20-20-S-e06 / 이동: HIT-MBO-20-10-10-S / 해설: 다과 신청 내역
- 구분: 이동 / 좌표: - / 라벨: 다과 메뉴 관리 / 앵커: HIT-MBO-20-20-20-S-e07 / 이동: HIT-MBO-20-20-10-S / 해설: 다과 메뉴 관리
- 구분: 이동 / 좌표: - / 라벨: 카테고리 / 앵커: HIT-MBO-20-20-20-S-e08 / 이동: HIT-MBO-20-20-10-S / 해설: 카테고리
- 구분: 이동 / 좌표: - / 라벨: 메뉴 / 앵커: HIT-MBO-20-20-20-S-e09 / 이동: HIT-MBO-20-20-20-S / 해설: 메뉴
- 구분: 기능 / 좌표: - / 라벨: + 추가하기 / 앵커: HIT-MBO-20-20-20-S-e10 / 해설: + 추가하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_menu_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
