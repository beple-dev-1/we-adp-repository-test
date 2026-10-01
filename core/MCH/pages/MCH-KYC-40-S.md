--- 꼬리표 ---
id: MCH-KYC-40-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_거래정보등록 / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_거래정보등록
목적: 고객확인서등록_거래정보등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 고객확인서등록_거래정보등록(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML / 입력: CRYPTO_TRAN_PURP, CRYPTO_TRAN_PURP_TX, CRYPTO_MNY_ORGIN, CRYPTO_MNY_ORGIN_TX, CRYPTO_CHK_YN, REAL_ACCT_USE_YN, REAL_ACCT_USE_PLN_YN, CRYPTO_USR_CHK_YN, CRYPTO_DEPOSIT_SPER_YN, CRYPTO_TRAN_SPER_YN … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_tran_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_tran_u001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=purpose_select / 라벨: 거래 목적 선택 / 앵커: MCH-KYC-40-S-e07 / 해설: 거래 목적 선택
- 구분: 기능 / 좌표: id=cryto_origin_select / 라벨: 거래 자금의 원천 및 출처 선택 / 앵커: MCH-KYC-40-S-e08 / 해설: 거래 자금의 원천 및 출처 선택
- 구분: 기능 / 좌표: id=btn_goback / 라벨: 뒤로가기 / 앵커: MCH-KYC-40-S-e09 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_next / 라벨: 저장 후 다음 단계 / 앵커: MCH-KYC-40-S-e10 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: id=onloadData / 라벨: onloadData / 앵커: MCH-KYC-40-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=service_input / 라벨: 제공 중인 서비스 내용 입력 / 앵커: MCH-KYC-40-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_tran_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
