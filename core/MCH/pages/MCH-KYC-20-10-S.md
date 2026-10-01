--- 꼬리표 ---
id: MCH-KYC-20-10-S / system: MCH / 기능: 가맹점관리 > 가맹점 고객확인서 > 고객확인서등록_사장님정보등록 > 고객확인서등록_사장님정보등록(실제소유자) / 과업: []

--- 화면명세 ---
화면명: 고객확인서등록_사장님정보등록(실제소유자)
목적: 고객확인서등록_사장님정보등록(실제소유자) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KYC-20-S

--- 업무 ---
- 요소: 화면 / 업무: 고객확인서등록_사장님정보등록 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_AML_CEO / 입력: AML_SEQ, AC, CI, 수정 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_ceo.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_ceo_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_CEO_R001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_사장님정보_실제소유자삭제(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML_OWNER / 입력: 가맹점 고객확인서 채번, AC, CI, OWNER_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_owner_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_owner_d001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_D001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_사장님정보_실제소유자등록(act) / 처리: 쓰기 / 테이블: TB_BP_AFLT_AML, TB_BP_AFLT_AML_OWNER / 입력: 가맹점 고객확인서 채번, AC, CI, 수정 여부, 실제소유자 면제 유형, 25% 이상의 지분을 가진 개인(자연인) 여부, 소유자 유형, REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_owner_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_owner_u001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_U005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_AML_OWNER_C001.xml:10
- 요소: 화면 / 업무: 고객확인서등록_거래정보등록 (화면) / 처리: 미확인 / 입력: AML_SEQ, AC, CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.aml_reg_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/reg/aml_reg_tran_act.jsp:17

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 해당 사항 없음 / 앵커: MCH-KYC-20-10-S-e13 / 해설: 해당 사항 없음
- 구분: 기능 / 좌표: id=guide_info / 라벨: 최대 지분 소유자 작성 방법 안내 / 앵커: MCH-KYC-20-10-S-e14 / 해설: 최대 지분 소유자 작성 방법 안내
- 구분: 기능 / 좌표: - / 라벨: 소유자 1 / 앵커: MCH-KYC-20-10-S-e15 / 해설: 소유자 1
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: MCH-KYC-20-10-S-e16 / 해설: 삭제
- 구분: 기능 / 좌표: - / 라벨: 대표자 추가 버튼 이미지 / 앵커: MCH-KYC-20-10-S-e17 / 해설: 대표자 추가 버튼 이미지
- 구분: 기능 / 좌표: - / 라벨: 대한민국 (KR) / 앵커: MCH-KYC-20-10-S-e18 / 해설: 대한민국 (KR)
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: MCH-KYC-20-10-S-e19 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_next / 라벨: 저장 후 다음 단계 / 앵커: MCH-KYC-20-10-S-e20 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: - / 라벨: 주주명부 상의 지분율 입력 / 앵커: MCH-KYC-20-10-S-e21 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 실제 소유자명 입력 / 앵커: MCH-KYC-20-10-S-e22 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 실제 소유자 여권상 영문명 입력 / 앵커: MCH-KYC-20-10-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 8자리 숫자만 입력 / 앵커: MCH-KYC-20-10-S-e24 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/reg/aml_reg_owner_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
