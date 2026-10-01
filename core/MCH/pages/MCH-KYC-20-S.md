--- 꼬리표 ---
id: MCH-KYC-20-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_사장님정보등록 / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_사장님정보등록
목적: 고객확인서등록_사장님정보등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 고객확인서등록_사장님종보삭제(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML_CEO / 입력: 가맹점 고객확인서 채번, AC, CI, 수정 여부, CEO_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_d001_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_D001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_사장님정보등록(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML_CEO, TB_BP_AFLT_AML / 입력: 가맹점 고객확인서 채번, AC, CI, 수정 여부, REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_u001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U004.xml:10
- 요소: 화면 / 업무: 고객확인서등록_기본정보등록 (화면) / 처리: 읽기 / 테이블: TB_CTGRY_CODE, TB_BP_AFLT_MNG / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_info_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R029.xml:10
- 요소: 화면 / 업무: 고객확인서등록_거래정보등록 (화면) / 처리: 미확인 / 입력: AML_SEQ, AC, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_tran_act.jsp:17
- 요소: 화면 / 업무: post_0002_01.act / 미확인: WSVC 없음 / 근거: post_0002_01.act (WSVC 없음)

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 대표자 / 앵커: MCH-KYC-20-S-e17 / 해설: 대표자
- 구분: 기능 / 좌표: - / 라벨: 대표자 추가 버튼 이미지 / 앵커: MCH-KYC-20-S-e18 / 해설: 대표자 추가 버튼 이미지
- 구분: 기능 / 좌표: - / 라벨: 대한민국 (KR) / 앵커: MCH-KYC-20-S-e19 / 해설: 대한민국 (KR)
- 구분: 기능 / 좌표: - / 라벨: 직접 입력 / 앵커: MCH-KYC-20-S-e20 / 해설: 직접 입력
- 구분: 기능 / 좌표: - / 라벨: 툴 팁 보기 / 앵커: MCH-KYC-20-S-e21 / 해설: 툴 팁 보기
- 구분: 기능 / 좌표: id=ceo_job / 라벨: 직업 선택 / 앵커: MCH-KYC-20-S-e22 / 해설: 직업 선택
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: MCH-KYC-20-S-e23 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 주소 검색 / 앵커: MCH-KYC-20-S-e24 / 해설: 주소 검색
- 구분: 기능 / 좌표: id=btn_save_ceo / 라벨: 저장 후 다음 단계 / 앵커: MCH-KYC-20-S-e25 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: - / 라벨: 대표자 성명 입력 / 앵커: MCH-KYC-20-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 대표자 여권상 영문명 입력 / 앵커: MCH-KYC-20-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 8자리 숫자만 입력 / 앵커: MCH-KYC-20-S-e28 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 숫자만 입력 / 앵커: MCH-KYC-20-S-e29 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 이메일 입력 / 앵커: MCH-KYC-20-S-e30 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 우편번호 / 앵커: MCH-KYC-20-S-e31 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 상세주소 입력 / 앵커: MCH-KYC-20-S-e32 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_ceo_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
