--- 꼬리표 ---
id: HIT-MBO-30-50-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 로그인·계정 > 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 / 과업: []

--- 화면명세 ---
화면명: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기
목적: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: HIT-MBO-30-50-S-e18 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 인증번호 요청 / 처리: 읽기 / 테이블: TB_PC_AFLT_BO_USER / 입력: MTHD_GUBUN, USER_ID, 휴대폰번호, 고객명, REQ_URL, 사용자 그룹 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_find_account_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_find_account_c001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R003.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 인증번호 확인 / 처리: 읽기 / 테이블: TB_PC_AFLT_BO_USER / 입력: 고객명, 휴대폰번호, 사용자 그룹, REQ_URL, 인증번호, MTHD_GUBUN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_find_account_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_find_account_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R003.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 비밀번호 변경 / 처리: 읽기·쓰기 / 테이블: TB_PC_AFLT_BO_USER, TB_PC_AFLT_BO_USER_PW_HIST / 입력: USER_ID, 변경 비밀번호, 변경 비밀번호 확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_find_account_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_find_account_u001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_PW_HIST_C001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 가맹점 관리 / 앵커: HIT-MBO-30-50-S-e15 / 이동: HIT-MBO-30-10-S / 해설: 가맹점 관리
- 구분: 기능 / 좌표: - / 라벨: 아이디 찾기 / 앵커: HIT-MBO-30-50-S-e16 / 해설: 아이디 찾기
- 구분: 기능 / 좌표: - / 라벨: 비밀번호 찾기 / 앵커: HIT-MBO-30-50-S-e17 / 해설: 비밀번호 찾기
- 구분: 기능 / 좌표: id=CERT_BTN / 라벨: 인증번호 요청 / 앵커: HIT-MBO-30-50-S-e18 / 해설: 인증번호 요청
- 구분: 항목 / 좌표: id=ID_NAME / 라벨: 이름을 입력해 주세요. / 앵커: HIT-MBO-30-50-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ID_MOB_NO / 라벨: -없이 휴대폰 번호를 입력해 주세요. / 앵커: HIT-MBO-30-50-S-e20 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ID_CERT_NO / 라벨: 인증번호를 입력해 주세요 / 앵커: HIT-MBO-30-50-S-e21 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_find_account_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
