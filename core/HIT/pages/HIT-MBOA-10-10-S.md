--- 꼬리표 ---
id: HIT-MBOA-10-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 앱 > 엔터프라이즈_가맹점 어드민_메인(앱 버전) > 엔터프라이즈 가맹점pc_가맹점주 로그인(앱 버전) / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈 가맹점pc_가맹점주 로그인(앱 버전)
목적: 엔터프라이즈 가맹점pc_가맹점주 로그인(앱 버전) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MBOA-10-S

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_가맹점 선택(앱 버전) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_list_act.jsp:25
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_로그인처리 (앱 버전) / 처리: 읽기·쓰기 / 테이블: TB_PC_AFLT_BO_USER, TB_PC_AFLT_BO_USER_SITE, TB_PC_AFLT_BO_SITE, TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO … / 입력: USER_ID, USER_PW / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_login_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_login_r001_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_SITE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R016.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_가맹점 어드민_메인(앱 버전) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_main_act.jsp:25

--- 정의 ---
- 구분: 기능 / 좌표: id=sign_in / 라벨: 로그인 / 앵커: HIT-MBOA-10-10-S-e05 / 해설: 로그인
- 구분: 기능 / 좌표: id=manager_sign_in / 라벨: 매니저 로그인 / 앵커: HIT-MBOA-10-10-S-e06 / 해설: 매니저 로그인
- 구분: 항목 / 좌표: id=user_id / 라벨: 아이디 입력 / 앵커: HIT-MBOA-10-10-S-e07 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=user_pw / 라벨: 비밀번호 입력 / 앵커: HIT-MBOA-10-10-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/aflt/ent_aflt_login_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
