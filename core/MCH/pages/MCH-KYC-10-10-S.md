--- 꼬리표 ---
id: MCH-KYC-10-10-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 가맹점 고객확인서 작성을 위해 > 본인인증 / 과업: []

--- 화면명세 ---
화면명: 본인인증
목적: 본인인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KYC-10-S

--- 업무 ---
- 요소: MCH-KYC-10-10-S-e24 / 업무: 휴대폰 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.LGN_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/LGN_000003_act.jsp:18
- 요소: 화면 / 업무: 가맹점선택 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_AML_TOKEN, TB_BP_AFLT_AML / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_main_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/main/aml_main_aflt_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R003.xml:10
- 요소: 화면 / 업무: 본인인증 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_AML_TOKEN, UPSERT, TB_BP_AFLT_AML / 입력: 거래번호, 인증번호, 휴대폰번호, 사업자번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_main_certify_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/main/aml_main_certify_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_TOKEN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R002.xml:10
- 요소: 화면 / 업무: 사업자 번호 확인 (화면) / 처리: 미확인 / 입력: CI, AC, 생년월일, 휴대폰번호, 회원명, 성별, 사업자번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_biz_no.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_biz_no_act.jsp:29
- 요소: 화면 / 업무: 휴대폰본인인증 약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 뒤로가기버튼 유무 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_mobile_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_mobile_clause_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KYC-10-10-S-e20 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 본인인증 필수항목 모두 동의 / 앵커: MCH-KYC-10-10-S-e21 / 해설: 본인인증 필수항목 모두 동의
- 구분: 기능 / 좌표: - / 라벨: 보기 / 앵커: MCH-KYC-10-10-S-e22 / 해설: 보기
- 구분: 기능 / 좌표: id=sel_tel_corp / 라벨: 통신사 / 앵커: MCH-KYC-10-10-S-e23 / 해설: 통신사
- 구분: 기능 / 좌표: id=aprv_send / 라벨: 인증번호 요청 / 앵커: MCH-KYC-10-10-S-e24 / 해설: 인증번호 요청
- 구분: 기능 / 좌표: id=btn_next / 라벨: 다음 / 앵커: MCH-KYC-10-10-S-e25 / 해설: 다음
- 구분: 항목 / 좌표: id=biz_no / 라벨: biz_no / 앵커: MCH-KYC-10-10-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=from_pg / 라벨: from_pg / 앵커: MCH-KYC-10-10-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_dt_full / 라벨: brt_dt_full / 앵커: MCH-KYC-10-10-S-e28 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=check_all / 라벨: check_all / 앵커: MCH-KYC-10-10-S-e29 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk1 / 라벨: agree-chk1 / 앵커: MCH-KYC-10-10-S-e30 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk2 / 라벨: agree-chk2 / 앵커: MCH-KYC-10-10-S-e31 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk3 / 라벨: agree-chk3 / 앵커: MCH-KYC-10-10-S-e32 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk4 / 라벨: agree-chk4 / 앵커: MCH-KYC-10-10-S-e33 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=memb_nm / 라벨: 이름(실명) / 앵커: MCH-KYC-10-10-S-e34 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_dt / 라벨: 주민번호 앞자리 / 앵커: MCH-KYC-10-10-S-e35 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_gndr / 라벨: brt_gndr / 앵커: MCH-KYC-10-10-S-e36 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel_no / 라벨: 휴대폰번호 / 앵커: MCH-KYC-10-10-S-e37 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aprv_no / 라벨: 인증번호 6자리 / 앵커: MCH-KYC-10-10-S-e38 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/main/aml_main_certify_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
