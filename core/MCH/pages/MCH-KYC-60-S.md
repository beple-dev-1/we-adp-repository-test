--- 꼬리표 ---
id: MCH-KYC-60-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_대리인정보입력 / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_대리인정보입력
목적: 고객확인서등록_대리인정보입력 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 고객확인서등록_1원계좌인증 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_AML / 입력: CI, AC, 생년월일, 휴대폰번호, 회원명, 성별, 사업자번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_acct_cert.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_acct_cert_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_대리인정보입력(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML / 입력: AML_SEQ, AC, CI, 수정 여부, DEPUTY_NM, DEPUTY_ENG_NM, DEPUTY_NATION, DEPUTY_DOMEST_YN, DEPUTY_FORGN_NATION, DEPUTY_ADDR … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_deputy_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_deputy_u001_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_기본정보등록 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_MNG / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_info_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R029.xml:10
- 요소: 화면 / 업무: post_0002_01.act / 미확인: WSVC 없음 / 근거: post_0002_01.act (WSVC 없음)

--- 정의 ---
- 구분: 기능 / 좌표: id=deputy_nation / 라벨: 대한민국 (KR) / 앵커: MCH-KYC-60-S-e15 / 해설: 대한민국 (KR)
- 구분: 기능 / 좌표: - / 라벨: 툴 팁 보기 / 앵커: MCH-KYC-60-S-e16 / 해설: 툴 팁 보기
- 구분: 기능 / 좌표: id=deputy_job / 라벨: 직업 선택 / 앵커: MCH-KYC-60-S-e17 / 해설: 직업 선택
- 구분: 기능 / 좌표: id=deputy_relation / 라벨: 법인과의 관계 선택 / 앵커: MCH-KYC-60-S-e18 / 해설: 법인과의 관계 선택
- 구분: 기능 / 좌표: - / 라벨: 직접 입력 / 앵커: MCH-KYC-60-S-e19 / 해설: 직접 입력
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: MCH-KYC-60-S-e20 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_srch_addr / 라벨: 주소 검색 / 앵커: MCH-KYC-60-S-e21 / 해설: 주소 검색
- 구분: 기능 / 좌표: id=btn_cif / 라벨: 고객확인서 작성하기 / 앵커: MCH-KYC-60-S-e22 / 해설: 고객확인서 작성하기
- 구분: 항목 / 좌표: id=deputy_nm / 라벨: deputy_nm / 앵커: MCH-KYC-60-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=deputy_eng_nm / 라벨: 대리인 여권상 영문명 입력 / 앵커: MCH-KYC-60-S-e24 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=deputy_zip_cd / 라벨: 우편번호 / 앵커: MCH-KYC-60-S-e25 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=deputy_addr / 라벨: deputy_addr / 앵커: MCH-KYC-60-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=deputy_addr2 / 라벨: 상세주소 입력 / 앵커: MCH-KYC-60-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=input_deputy_email / 라벨: 이메일 입력 / 앵커: MCH-KYC-60-S-e28 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_deputy_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
