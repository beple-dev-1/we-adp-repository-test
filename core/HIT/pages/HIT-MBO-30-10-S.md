--- 꼬리표 ---
id: HIT-MBO-30-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 로그인·계정 > 엔터프라이즈 가맹점pc_가맹점주 로그인 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈 가맹점pc_가맹점주 로그인
목적: 엔터프라이즈 가맹점pc_가맹점주 로그인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_가맹점 선택 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aflt_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aflt_list_act.jsp:25
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_로그인처리 / 처리: 읽기·쓰기 / 테이블: TB_PC_AFLT_BO_USER, TB_PC_AFLT_BO_USER_SITE, TB_PC_AFLT_BO_SITE, TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO … / 입력: USER_ID, USER_PW / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_login_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_login_r001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_SITE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R016.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_메인 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_main_act.jsp:26
- 요소: 화면 / 업무: 엔터프라이즈 가맹점pc_비밀번호 변경 / 처리: 읽기·쓰기 / 테이블: TB_PC_AFLT_BO_USER, TB_PC_AFLT_BO_USER_PW_HIST / 입력: USER_ID, USER_PW, CHANGE_PW1, CHANGE_PW2 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_pw_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_pw_u001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_PW_HIST_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_PW_HIST_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=sign_in / 라벨: 로그인 / 앵커: HIT-MBO-30-10-S-e08 / 해설: 로그인
- 구분: 기능 / 좌표: - / 라벨: 가맹점 관리 / 앵커: HIT-MBO-30-10-S-e09 / 해설: 가맹점 관리
- 구분: 기능 / 좌표: id=find_account / 라벨: 아이디 · 비밀번호 찾기 / 앵커: HIT-MBO-30-10-S-e10 / 해설: 아이디 · 비밀번호 찾기
- 구분: 기능 / 좌표: id=sign_up / 라벨: 회원가입 / 앵커: HIT-MBO-30-10-S-e11 / 해설: 회원가입
- 구분: 기능 / 좌표: id=manager_sign_in / 라벨: 매니저 로그인 / 앵커: HIT-MBO-30-10-S-e12 / 해설: 매니저 로그인
- 구분: 항목 / 좌표: id=user_id / 라벨: 아이디를 입력해 주세요. / 앵커: HIT-MBO-30-10-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=user_pw / 라벨: 비밀번호를 입력해 주세요. / 앵커: HIT-MBO-30-10-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_login_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
