--- 꼬리표 ---
id: MCH-KYC-40-10-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_거래정보등록 > 고객확인서등록_서류첨부등록 / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_서류첨부등록
목적: 고객확인서등록_서류첨부등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KYC-40-S

--- 업무 ---
- 요소: 화면 / 업무: 파일 업로드 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_AML_DOC, TB_BP_AFLT_AML, TB_BP_AFLT_AML_HIST, TB_BP_AFLT_AML_CEO_HIST, TB_BP_AFLT_AML_CEO, TB_BP_AFLT_AML_DOC_HIST … / 입력: 가맹점 고객확인서 채번, CI, AC, REC, FINANCIAL_SKIP_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_doc_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_doc_c002_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_DOC_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_KYC_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 파일 추가하기 / 앵커: MCH-KYC-40-10-S-e08 / 해설: 파일 추가하기
- 구분: 기능 / 좌표: id=download_file1 / 라벨: 대리인위임장 양식 내려받기 / 앵커: MCH-KYC-40-10-S-e09 / 해설: 대리인위임장 양식 내려받기
- 구분: 기능 / 좌표: id=download_file2 / 라벨: 공동대표자 동의서 양식 내려받기 / 앵커: MCH-KYC-40-10-S-e10 / 해설: 공동대표자 동의서 양식 내려받기
- 구분: 기능 / 좌표: - / 라벨: 선택 파일 첨부 / 앵커: MCH-KYC-40-10-S-e11 / 해설: 선택 파일 첨부
- 구분: 기능 / 좌표: id=goback / 라벨: 뒤로가기 / 앵커: MCH-KYC-40-10-S-e12 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=next_button / 라벨: 최종 제출 / 앵커: MCH-KYC-40-10-S-e13 / 해설: 최종 제출
- 구분: 항목 / 좌표: id=checkbox1 / 라벨: checkbox1 / 앵커: MCH-KYC-40-10-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_doc_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
