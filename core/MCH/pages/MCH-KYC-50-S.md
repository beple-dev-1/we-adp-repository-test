--- 꼬리표 ---
id: MCH-KYC-50-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_1원계좌인증 / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_1원계좌인증
목적: 고객확인서등록_1원계좌인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: MCH-KYC-50-S-e10 / 업무: AML - 계좌 1원 인증 요청 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 은행코드, 계좌번호, 생년월일, 회원명, 휴대폰번호, AC, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AML_ACCT_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/comm/AML_ACCT_000001_act.jsp:41 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10
- 요소: 화면 / 업무: AML - 계좌 1원 인증 확인 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, APV_NO, TOKEN, AC, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AML_ACCT_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/comm/AML_ACCT_000002_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- 요소: 화면 / 업무: 사업자 번호 확인 (화면) / 처리: 미확인 / 입력: CI, AC, 생년월일, 휴대폰번호, 회원명, 성별, 사업자번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_biz_no.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_biz_no_act.jsp:29
- 요소: 화면 / 업무: 고객확인서등록 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_BP_AFLT_AML, TB_BP_AFLT_AML_EXM / 입력: 사업자번호, REG_USR_TP, REG_USR_NM, REG_USR_BRT_DT, REG_USR_MOB_NO, REG_USR_BANK_CD, REG_USR_ACCT_NO, 신청자 CI, 신청자 성별, AC … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_c001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_C001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_대리인정보입력 (화면) / 처리: 미확인 / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_deputy.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_deputy_act.jsp:17
- 요소: 화면 / 업무: 고객확인서등록_기본정보등록 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_MNG / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_info_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R029.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KYC-50-S-e08 / 이동: MCH-KYC-50-10-S / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 은행 선택 / 앵커: MCH-KYC-50-S-e09 / 해설: 은행 선택
- 구분: 기능 / 좌표: id=acct_cert_btn / 라벨: 계좌인증 요청 / 앵커: MCH-KYC-50-S-e10 / 해설: 계좌인증 요청
- 구분: 기능 / 좌표: id=btn_next / 라벨: 고객확인서 작성하기 / 앵커: MCH-KYC-50-S-e11 / 해설: 고객확인서 작성하기
- 구분: 항목 / 좌표: - / 라벨: 성명 / 앵커: MCH-KYC-50-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ACCT_NO / 라벨: 숫자만 입력 / 앵커: MCH-KYC-50-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=APV_NO / 라벨: 숫자 3자리 입력 / 앵커: MCH-KYC-50-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_acct_cert_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
