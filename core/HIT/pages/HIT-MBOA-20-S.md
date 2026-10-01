--- 꼬리표 ---
id: HIT-MBOA-20-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 앱 > 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전) / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전)
목적: 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메인(앱 버전) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_main_act.jsp:25
- 요소: HIT-MBOA-20-S-e14 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 사진 변경(앱 버전) — 메뉴번호(MENU_SEQ) 단건 대상 사진 교체/기본이미지 초기화 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_IMG, TBL, IMG_PATH / 입력: 비플가맹점순번, 메뉴순번, 처리구분, 파일, 파일확장자 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_img_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_img_u001_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_C001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 가맹점 어드민 메뉴관리(앱 버전) 메뉴조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV_IMG / 입력: 비플가맹점순번, START_DATE, END_DATE, 제공방식, 페이지, PAGE_SIZE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_list_r001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R010.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 추가(앱 버전) (화면) / 처리: 미확인 / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_act.jsp:25
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 관리 삭제(앱 버전) / 처리: 쓰기 / 테이블: TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_NUTR, TB_CAFETERIA_MENU / 입력: 비플가맹점순번, MENU_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_d001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DTL_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_IMG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_NUTR_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_D002.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 관리 서비스(앱 버전) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_reg_svc.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_reg_svc_act.jsp:25
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메뉴 품절 처리(앱 버전) — 메뉴번호(MENU_SEQ) 단건 대상 품절여부 변경 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU / 입력: 비플가맹점순번, 메뉴순번, 품절여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_soldout_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_soldout_u001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=menu_add / 라벨: 메뉴 추가 / 앵커: HIT-MBOA-20-S-e08 / 해설: 메뉴 추가
- 구분: 기능 / 좌표: - / 라벨: 전체 / 앵커: HIT-MBOA-20-S-e09 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 매장식사 / 앵커: HIT-MBOA-20-S-e10 / 해설: 매장식사
- 구분: 기능 / 좌표: - / 라벨: 딜리버리/픽업 / 앵커: HIT-MBOA-20-S-e11 / 해설: 딜리버리/픽업
- 구분: 기능 / 좌표: - / 라벨: 사전예약 / 앵커: HIT-MBOA-20-S-e12 / 해설: 사전예약
- 구분: 기능 / 좌표: - / 라벨: 조회 / 앵커: HIT-MBOA-20-S-e13 / 해설: 조회
- 구분: 항목 / 좌표: id=photo-file-input-gallery / 라벨: photo-file-input-gallery / 앵커: HIT-MBOA-20-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/aflt/ent_aflt_menu_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
