--- 꼬리표 ---
id: HIT-MBO-10-30-30-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 메뉴관리 > 메뉴분류 관리 / 과업: []

--- 화면명세 ---
화면명: 메뉴분류 관리
목적: 메뉴분류 관리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 메뉴분류 신규 등록 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_DV_IMG / 입력: 메뉴분류명, 주문구분, 제공형태, 사용여부, 사진(Base64), 사진확장자 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_c001_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_C001.xml:10
- 요소: 화면 / 업무: 메뉴분류 목록 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV / 입력: 제공방식, 페이지, PAGE_SIZE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R004.xml:10
- 요소: 화면 / 업무: 행 클릭 시 사용여부 검증 + 최신 데이터 재조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_DV_IMG / 입력: 메뉴분류순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r002_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_R001.xml:10
- 요소: 화면 / 업무: 순서관리 팝업 오픈 시 사용중 메뉴분류 목록 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV / 입력: 주문구분, 제공형태 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r003_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R006.xml:10
- 요소: 화면 / 업무: 저장 확인 팝업 노출 전 메뉴분류명 중복 여부 사전 검증 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV / 입력: 메뉴분류명, 주문구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r004_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R002.xml:10
- 요소: 화면 / 업무: 메뉴분류 수정 - 사용여부만 변경 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_DV_IMG / 입력: 메뉴분류순번, 사용여부, 사진(Base64), 사진확장자, 사진삭제여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_u001_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_C001.xml:10
- 요소: 화면 / 업무: 드래그 정렬된 노출순서 일괄 저장 / 처리: 쓰기 / 테이블: TB_CAFETERIA_MENU_DV / 입력: ORDER_LIST / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_u002_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_U002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn-open-dsp / 라벨: 순서 관리 / 앵커: HIT-MBO-10-30-30-S-e08 / 해설: 순서 관리
- 구분: 기능 / 좌표: id=btn-open-add / 라벨: 메뉴분류 등록 / 앵커: HIT-MBO-10-30-30-S-e09 / 해설: 메뉴분류 등록
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MBO-10-30-30-S-e10 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MBO-10-30-30-S-e11 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MBO-10-30-30-S-e12 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MBO-10-30-30-S-e13 / 해설: last
- 구분: 항목 / 좌표: id=show_cnt / 라벨: show_cnt / 앵커: HIT-MBO-10-30-30-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
