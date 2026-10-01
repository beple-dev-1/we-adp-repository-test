--- 꼬리표 ---
id: HIT-MBO-10-30-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 메뉴관리 > 메뉴 / 과업: []

--- 화면명세 ---
화면명: 메뉴
목적: 메뉴 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: ent_afltbo_menu_reg:1810
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴 추가 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_OPEN_HOUR, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_NUTR … / 입력: 제공형태, 제공날짜, 조식유무, 중식유무, 메뉴분류코드, 대표메뉴명, 메뉴구성, 대표메뉴명(영문), 메뉴구성(영문), 원산지 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_c001_act.jsp:50 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ENT_CAFE_SEQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_C001.xml:10
- 요소: 화면 / 업무: 구내식당 메뉴 삭제 / 처리: 쓰기 / 테이블: TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_NUTR, TB_CAFETERIA_MENU / 입력: 비플가맹점순번, MENU_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_d001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_D002.xml:10
- 요소: HIT-MBO-10-30-10-S-e19 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV_IMG / 입력: 비플가맹점순번, START_DATE, END_DATE, 제공방식, 페이지, PAGE_SIZE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_r001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R010.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴상세 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV_IMG, TB_CAFETERIA_MENU_NUTR … / 입력: 비플가맹점순번, MENU_SEQ, 메뉴 이미지 순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_r002_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R002.xml:10
- 요소: 화면 / 업무: ent_afltbo_menu_reg_r003.act / 미확인: WSVC 없음 / 근거: ent_afltbo_menu_reg_r003.act (WSVC 없음)
- 요소: 화면 / 업무: 메뉴 편집중 여부 수정 / 처리: 쓰기 / 테이블: TB_CAFETERIA_MENU / 입력: MENU_SEQ, BO_EDITING_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_reg_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U007.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=SEL_PRVD_TP / 라벨: 전체 / 앵커: HIT-MBO-10-30-10-S-e15 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 매장식사 / 앵커: HIT-MBO-10-30-10-S-e16 / 해설: 매장식사
- 구분: 기능 / 좌표: - / 라벨: 딜리버리/픽업 / 앵커: HIT-MBO-10-30-10-S-e17 / 해설: 딜리버리/픽업
- 구분: 기능 / 좌표: - / 라벨: 사전예약 / 앵커: HIT-MBO-10-30-10-S-e18 / 해설: 사전예약
- 구분: 기능 / 좌표: id=btn_search / 라벨: 검색하기 / 앵커: HIT-MBO-10-30-10-S-e19 / 해설: 검색하기
- 구분: 기능 / 좌표: - / 라벨: 사진첨부 / 앵커: HIT-MBO-10-30-10-S-e20 / 해설: 사진첨부
- 구분: 기능 / 좌표: - / 라벨: + 추가하기 / 앵커: HIT-MBO-10-30-10-S-e21 / 해설: + 추가하기
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MBO-10-30-10-S-e22 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MBO-10-30-10-S-e23 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MBO-10-30-10-S-e24 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MBO-10-30-10-S-e25 / 해설: last
- 구분: 항목 / 좌표: id=START_DATE / 라벨: START_DATE / 앵커: HIT-MBO-10-30-10-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=END_DATE / 라벨: END_DATE / 앵커: HIT-MBO-10-30-10-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=show_cnt / 라벨: show_cnt / 앵커: HIT-MBO-10-30-10-S-e28 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_reg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
