--- 꼬리표 ---
id: MCH-KYC-10-10-10-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 가맹점 고객확인서 작성을 위해 > 본인인증 > 심사현황을 확인할 가맹점을 / 과업: []

--- 화면명세 ---
화면명: 심사현황을 확인할 가맹점을
목적: 심사현황을 확인할 가맹점을 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KYC-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: 고객확인서 수집현황 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_AML_TOKEN, TB_BP_AFLT_AML_EXM, TB_BP_AFLT_AML / 입력: 사업자번호, AML_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_main_amlist.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/main/aml_main_amlist_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_EXM_R001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KYC-10-10-10-S-e04 / 이동: MCH-KYC-10-S / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_next / 라벨: 다음 / 앵커: MCH-KYC-10-10-10-S-e05 / 해설: 다음
- 구분: 항목 / 좌표: id=onloadData / 라벨: onloadData / 앵커: MCH-KYC-10-10-10-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/main/aml_main_aflt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
