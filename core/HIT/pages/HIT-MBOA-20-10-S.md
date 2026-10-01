--- 꼬리표 ---
id: HIT-MBOA-20-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 앱 > 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전) > 엔터프라이즈_가맹점 어드민_메뉴 관리 서비스(앱 버전) — 메뉴 추가/수정 step2(상세 폼) / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_가맹점 어드민_메뉴 관리 서비스(앱 버전) — 메뉴 추가/수정 step2(상세 폼)
목적: 엔터프라이즈_가맹점 어드민_메뉴 관리 서비스(앱 버전) — 메뉴 추가/수정 step2(상세 폼) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MBOA-20-S

--- 업무 ---
- 요소: HIT-MBOA-20-10-S-e22 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_list_act.jsp:21
- 요소: HIT-MBOA-20-10-S-e21, HIT-MBOA-20-10-S-e22 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 관리 추가 act앱 버전) / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_OPEN_HOUR, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_NUTR … / 입력: 제공형태, 제공날짜, 조식유무, 중식유무, 메뉴분류코드, 대표메뉴명, 메뉴구성, 대표메뉴명(영문), 메뉴구성(영문), 원산지 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_c001_act.jsp:53 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ENT_CAFE_SEQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_C001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 상세 조회(앱 버전) — 메뉴 수정 화면 진입 시 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_NUTR, TB_CAFETERIA_OPEN_HOUR / 입력: 비플가맹점순번, MENU_SEQ, 메뉴 이미지 순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_r001_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R002.xml:10
- 요소: HIT-MBOA-20-10-S-e22 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 편집중 여부 수정(앱 버전) / 처리: 쓰기 / 테이블: TB_CAFETERIA_MENU / 입력: MENU_SEQ, 편집중여부, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_u001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U007.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_photo_attach / 라벨: 첨부하기 / 앵커: HIT-MBOA-20-10-S-e16 / 해설: 첨부하기
- 구분: 기능 / 좌표: id=btn_photo_reset / 라벨: 기본이미지로 변경 / 앵커: HIT-MBOA-20-10-S-e17 / 해설: 기본이미지로 변경
- 구분: 기능 / 좌표: - / 라벨: 메뉴분류명 선택 / 앵커: HIT-MBOA-20-10-S-e18 / 해설: 메뉴분류명 선택
- 구분: 기능 / 좌표: - / 라벨: 날짜 선택 / 앵커: HIT-MBOA-20-10-S-e19 / 해설: 날짜 선택
- 구분: 기능 / 좌표: id=btn_menu_info_add / 라벨: + 추가하기 / 앵커: HIT-MBOA-20-10-S-e20 / 해설: + 추가하기
- 구분: 기능 / 좌표: id=btn_save / 라벨: 저장 / 앵커: HIT-MBOA-20-10-S-e21 / 해설: 저장
- 구분: 항목 / 좌표: id=menu_image_input_gallery / 라벨: menu_image_input_gallery / 앵커: HIT-MBOA-20-10-S-e22 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=repr_menu_nm / 라벨: 메뉴명 입력(국문) / 앵커: HIT-MBOA-20-10-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=repr_menu_nm_en / 라벨: 메뉴명 입력(영문) / 앵커: HIT-MBOA-20-10-S-e24 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=menu_amt / 라벨: 금액 / 앵커: HIT-MBOA-20-10-S-e25 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=amt_hide_yn / 라벨: amt_hide_yn / 앵커: HIT-MBOA-20-10-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=menu_pack_nm / 라벨: 메뉴 구성 입력(최대 100자) / 앵커: HIT-MBOA-20-10-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=menu_pack_nm_en / 라벨: 메뉴 구성 입력(최대 200자) / 앵커: HIT-MBOA-20-10-S-e28 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=qty / 라벨: 수량 입력 / 앵커: HIT-MBOA-20-10-S-e29 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=c_soldout_yn / 라벨: c_soldout_yn / 앵커: HIT-MBOA-20-10-S-e30 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
