--- 꼬리표 ---
id: MCH-KYC-50-10-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_1원계좌인증 > 사업자 번호 확인 / 과업: []

--- 화면명세 ---
화면명: 사업자 번호 확인
목적: 사업자 번호 확인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KYC-50-S

--- 업무 ---
- 요소: 화면 / 업무: 본인인증 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_main_certify.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/main/aml_main_certify_act.jsp:21
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_1원계좌인증 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_AML / 입력: CI, AC, 생년월일, 휴대폰번호, 회원명, 성별, 사업자번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_acct_cert.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_acct_cert_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R001.xml:10
- 요소: MCH-KYC-50-10-S-e05 / 업무: 사업자번호 확인_고객확인서 제출내역 조회 / 처리: 읽기 / 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_AML, TB_BP_AFLT_AML_EXM / 입력: 사업자번호, 회원명, 생년월일, 휴대폰번호, CI, AC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_biz_no_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_biz_no_r001_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R004.xml:10
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_사장님정보등록 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_AML_CEO / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_R001.xml:10
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_작성완료 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_complete_act.jsp:27
- 요소: 화면 / 업무: 고객확인서_작성중인 내역 삭제 / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML, TB_BP_AFLT_AML_CEO, TB_BP_AFLT_AML_OWNER, TB_BP_AFLT_AML_DOC / 입력: 가맹점 고객확인서 채번, AC, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_d001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_D001.xml:10
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_대리인정보입력 (화면) / 처리: 미확인 / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_deputy.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_deputy_act.jsp:17
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_서류첨부등록 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_AML_OWNER, TB_BP_AFLT_AML_CEO / 입력: 가맹점 고객확인서 채번, CI, AC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_doc.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_doc_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_R001.xml:10
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_기본정보등록 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_MNG / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_info_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R029.xml:10
- 요소: MCH-KYC-50-10-S-e05 / 업무: 고객확인서등록_거래정보등록 (화면) / 처리: 미확인 / 입력: AML_SEQ, AC, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_tran_act.jsp:17

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KYC-50-10-S-e04 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_next / 라벨: 다음 / 앵커: MCH-KYC-50-10-S-e05 / 해설: 다음
- 구분: 항목 / 좌표: id=biz_no / 라벨: 사업자등록번호 숫자 10자리 입력 / 앵커: MCH-KYC-50-10-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_biz_no_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
