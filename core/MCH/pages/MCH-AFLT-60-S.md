--- 꼬리표 ---
id: MCH-AFLT-60-S / system: MCH / 기능: 가맹점관리 > 온라인 가맹점신청 > 정산정보 입력 / 과업: []

--- 화면명세 ---
화면명: 정산정보 입력
목적: 정산정보 입력 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: MCH-AFLT-60-S-e19 / 업무: 계좌실명조회 / 처리: 미확인 / 입력: 은행코드, 계좌번호, 사업자번호, 생년월일 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_settle_info_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_settle_info_r001_act.jsp:25
- 요소: MCH-AFLT-60-S-e21 / 업무: 정산 정보 추가 / 처리: 쓰기 / 테이블: TB_BP_AFLT_APY / 입력: CI, APY_NM, 휴대폰번호, APY_REPR_YN, 처리상태, APPR_ST, APY_DT, APY_TM, 사업자번호, SHOP_NM … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_settle_info_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_settle_info_u001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_U004.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-AFLT-60-S-e15 / 이동unresolved: uf_back() / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 정산 정보 입력 / 앵커: MCH-AFLT-60-S-e16 / 해설: 정산 정보 입력
- 구분: 기능 / 좌표: - / 라벨: 간편 가입 프랜차이즈 보기 / 앵커: MCH-AFLT-60-S-e17 / 해설: 간편 가입 프랜차이즈 보기
- 구분: 기능 / 좌표: id=sel_trig / 라벨: 입금 은행 선택 / 앵커: MCH-AFLT-60-S-e18 / 해설: 입금 은행 선택
- 구분: 기능 / 좌표: id=certi_btn / 라벨: 실명 인증 / 앵커: MCH-AFLT-60-S-e19 / 해설: 실명 인증
- 구분: 기능 / 좌표: id=sel_mail / 라벨: 직접입력 / 앵커: MCH-AFLT-60-S-e20 / 해설: 직접입력
- 구분: 기능 / 좌표: id=next_btn / 라벨: 저장 후 다음 단계 / 앵커: MCH-AFLT-60-S-e21 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: id=acct_no / 라벨: 숫자만 입력 / 앵커: MCH-AFLT-60-S-e22 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=acct_nm / 라벨: acct_nm / 앵커: MCH-AFLT-60-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=check_box / 라벨: check_box / 앵커: MCH-AFLT-60-S-e24 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tax_mng_nm / 라벨: 정산 담당자 이름 입력 / 앵커: MCH-AFLT-60-S-e25 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tax_email / 라벨: 이메일 입력 / 앵커: MCH-AFLT-60-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree / 라벨: agree / 앵커: MCH-AFLT-60-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=disagree / 라벨: disagree / 앵커: MCH-AFLT-60-S-e28 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_aflt_settle_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
