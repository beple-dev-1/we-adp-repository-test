--- 꼬리표 ---
id: HIT-MBO-30-30-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 로그인·계정 > 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 / 과업: []

--- 화면명세 ---
화면명: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입
목적: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 통신사, 주민번호, 재전송여부, 거래번호, 내외국인구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step1_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step1_c001_act.jsp:22
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 비플페이 회원가입 처리 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_SLEEP_MNG, TB_APP_LOCAL_MNG / 입력: CI, DI, 회원명, 생년월일, 성별, 내외국인구분, 휴대폰번호, 통신사, MRKT_AGR_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step1_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step1_c002_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SLEEP_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SLEEP_MNG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10
- 요소: HIT-MBO-30-30-S-e30 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 본인인증 요청 / 처리: 읽기 / 테이블: TB_MEMBER, TB_PC_AFLT_BO_USER / 입력: 거래번호, 인증번호, 휴대폰번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step1_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step1_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R004.xml:10
- 요소: HIT-MBO-30-30-S-e30 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 마이가맹점 신규 등록 / 처리: 읽기·쓰기 / 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG, TB_AFFILIATION_MY / 입력: 회원코드, 가맹점ID, REPR_MOB_NO, 회원명, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step2_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step2_c001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_C002.xml:10
- 요소: HIT-MBO-30-30-S-e30 / 업무: 가맹점주 어드민 점주 등록 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY_DETAIL, TB_AFFILIATION_MY, TB_MEMBER_APP / 입력: MEMB_CD, AFLT_ID, MEMB_NM, BP_AFLT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step2_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step2_c002_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_C001.xml:10
- 요소: HIT-MBO-30-30-S-e30 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 직가맹 조회 / 처리: 읽기 / 테이블: TB_AFFILIATION_MY, TB_BP_AFLT_MNG, TB_BP_AFLT_APY / 입력: 사업자번호, 휴대폰번호, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step2_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step2_r001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R026.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 등록 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_PC_AFLT_BO_USER, TB_PC_AFLT_BO_USER_SITE, TB_PC_AFLT_BO_SITE / 입력: CI, USER_ID, PASSWORD, 고객명, 휴대폰번호, 통신사, 성별, EMAIL, 생년월일, 내외국인구분 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step3_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step3_c001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_SITE_C001.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 중복검증 / 처리: 읽기 / 테이블: TB_PC_AFLT_BO_USER / 입력: USER_ID, EMAIL / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step3_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step3_r001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R002.xml:10
- 요소: HIT-MBO-30-30-S-e30 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 비밀번호 검증 / 처리: 미확인 / 입력: USER_ID, PASSWORD, EMAIL, 휴대폰번호, 생년월일 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step3_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step3_r002_act.jsp:29
- 요소: 화면 / 업무: 법인제로페이 이용약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 거래번호, 뒤로가기버튼 유무 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_clause1.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_clause1_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
- 요소: 화면 / 업무: 휴대폰본인인증 약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 뒤로가기버튼 유무 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_mobile_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_mobile_clause_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 가맹점 관리 / 앵커: HIT-MBO-30-30-S-e28 / 이동: HIT-MBO-30-10-S / 해설: 가맹점 관리
- 구분: 기능 / 좌표: - / 라벨: 보기 / 앵커: HIT-MBO-30-30-S-e29 / 해설: 보기
- 구분: 기능 / 좌표: id=step0_btn / 라벨: 휴대폰 인증하기 / 앵커: HIT-MBO-30-30-S-e30 / 해설: 휴대폰 인증하기
- 구분: 항목 / 좌표: id=all_check / 라벨: all_check / 앵커: HIT-MBO-30-30-S-e33 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree_chk1 / 라벨: agree_chk1 / 앵커: HIT-MBO-30-30-S-e34 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree_chk2 / 라벨: agree_chk2 / 앵커: HIT-MBO-30-30-S-e35 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree_chk3 / 라벨: agree_chk3 / 앵커: HIT-MBO-30-30-S-e36 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
