--- 꼬리표 ---
id: MCH-KYC-30-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_기본정보등록 / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_기본정보등록
목적: 고객확인서등록_기본정보등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 고객확인서등록_1원계좌인증 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_AML / 입력: CI, AC, 생년월일, 휴대폰번호, 회원명, 성별, 사업자번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_acct_cert.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_acct_cert_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_사장님정보등록 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_AML_CEO / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_R001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_대리인정보입력 (화면) / 처리: 미확인 / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_deputy.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_deputy_act.jsp:17
- 요소: 화면 / 업무: 고객확인서등록_기본정보등록(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML / 입력: 가맹점 고객확인서 채번, AC, CI, 수정 여부, CORP_NO, SHOP_NM, SHOP_ENG_NM, 가맹점 설립일자, CORP_ESTA_DT, BIZ_TYPE … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_info_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_info_u001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U002.xml:10
- 요소: 화면 / 업무: post_0002_01.act / 미확인: WSVC 없음 / 근거: post_0002_01.act (WSVC 없음)

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_fetch_info / 라벨: 정보 불러오기 / 앵커: MCH-KYC-30-S-e23 / 해설: 정보 불러오기
- 구분: 기능 / 좌표: id=aflt_nation / 라벨: 대한민국 (KR) / 앵커: MCH-KYC-30-S-e24 / 해설: 대한민국 (KR)
- 구분: 기능 / 좌표: - / 라벨: 직접 입력 / 앵커: MCH-KYC-30-S-e25 / 해설: 직접 입력
- 구분: 기능 / 좌표: id=corp_tp / 라벨: 법인 구분 선택 / 앵커: MCH-KYC-30-S-e26 / 해설: 법인 구분 선택
- 구분: 기능 / 좌표: id=copr_hyungtea / 라벨: 기업 형태 선택 / 앵커: MCH-KYC-30-S-e27 / 해설: 기업 형태 선택
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: MCH-KYC-30-S-e28 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 업종코드 검색 / 앵커: MCH-KYC-30-S-e29 / 해설: 업종코드 검색
- 구분: 기능 / 좌표: - / 라벨: 주소 검색 / 앵커: MCH-KYC-30-S-e30 / 해설: 주소 검색
- 구분: 기능 / 좌표: id=btn_cif / 라벨: 저장 후 다음 단계 / 앵커: MCH-KYC-30-S-e31 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: id=biz_no / 라벨: 사업자등록번호 숫자 10자리 입력 / 앵커: MCH-KYC-30-S-e32 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=corp_no / 라벨: 13자리 숫자만 입력 / 앵커: MCH-KYC-30-S-e33 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=shop_nm / 라벨: 사업자등록증과 동일한 상호 입력 / 앵커: MCH-KYC-30-S-e34 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=shop_eng_nm / 라벨: 상호 영문명 입력 / 앵커: MCH-KYC-30-S-e35 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=corp_esta_dt / 라벨: 8자리 숫자만 입력 (예: 19801205) / 앵커: MCH-KYC-30-S-e36 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=upjong_cd / 라벨: (업종코드) 업종명 / 앵커: MCH-KYC-30-S-e37 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_zip_cd / 라벨: 우편번호 / 앵커: MCH-KYC-30-S-e38 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_addr / 라벨: aflt_addr / 앵커: MCH-KYC-30-S-e39 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_addr2 / 라벨: 상세주소 입력 / 앵커: MCH-KYC-30-S-e40 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_phone_no / 라벨: 숫자만 입력 / 앵커: MCH-KYC-30-S-e41 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=email_id / 라벨: 이메일 입력 / 앵커: MCH-KYC-30-S-e42 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=clone_aflt_info / 라벨: clone_aflt_info / 앵커: MCH-KYC-30-S-e43 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=hq_addr / 라벨: hq_addr / 앵커: MCH-KYC-30-S-e44 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
