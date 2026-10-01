--- 꼬리표 ---
id: MCH-AFLT-70-S / system: MCH / 기능: 가맹점관리 > 온라인 가맹점신청 > 본인인증 / 과업: []

--- 화면명세 ---
화면명: 본인인증
목적: 본인인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: MCH-AFLT-70-S-e28 / 업무: 휴대폰 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.LGN_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/LGN_000003_act.jsp:18
- 요소: MCH-AFLT-70-S-e29 / 업무: 온라인 가맹점신청 -> 기본정보입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_base_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_base_info_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 본인인증 입력후 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY_TOKEN, UPSERT, TB_BP_AFLT_MNG, TB_BP_AFLT_APY / 입력: APY_NM, 생년월일, 휴대폰번호, 사업자번호, 거래번호, 인증번호, TAX_TYPE, 종사업장코드, 종사업장번호 유무, 메이트포스 사용유무 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_cert_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_cert_c001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_C002.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: bp_aflt_cert_r001 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY_TOKEN, UPSERT, TB_BP_AFLT_APY / 입력: 휴대폰번호, 온라인 비플 가맹점 채번, 사업자번호, 거래번호, 인증번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_cert_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_cert_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R006.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 온라인가맹점신청 최종확인 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_DOC, TB_BP_AFLT_APY_TOKEN, TB_CTGRY_CODE / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_confirm.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_confirm_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_DOC_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 가맹점 정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN, TB_CTGRY_CODE / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_det_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_det_info_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 신청내역 메인 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY_TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_list_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 신청내역 메인 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY_TOKEN, UPSERT, TB_BP_AFLT_APY / 입력: 휴대폰번호, 인증번호, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_list_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R003.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 신청자정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_reg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_reg_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 사장님 정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_repr_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_repr_info_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: MCH-AFLT-70-S-e29 / 업무: 정산정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_settle_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_settle_info_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: 화면 / 업무: 휴대폰본인인증 약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 뒤로가기버튼 유무 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_mobile_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_mobile_clause_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-AFLT-70-S-e24 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 본인인증 필수항목 모두 동의 / 앵커: MCH-AFLT-70-S-e25 / 해설: 본인인증 필수항목 모두 동의
- 구분: 기능 / 좌표: - / 라벨: 보기 / 앵커: MCH-AFLT-70-S-e26 / 해설: 보기
- 구분: 기능 / 좌표: id=sel_tel_corp / 라벨: 통신사 / 앵커: MCH-AFLT-70-S-e27 / 해설: 통신사
- 구분: 기능 / 좌표: id=aprv_send / 라벨: 인증번호 요청 / 앵커: MCH-AFLT-70-S-e28 / 해설: 인증번호 요청
- 구분: 기능 / 좌표: id=btn_next / 라벨: 다음 / 앵커: MCH-AFLT-70-S-e29 / 해설: 다음
- 구분: 항목 / 좌표: id=biz_no / 라벨: biz_no / 앵커: MCH-AFLT-70-S-e30 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tax_type / 라벨: tax_type / 앵커: MCH-AFLT-70-S-e31 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=from_pg / 라벨: from_pg / 앵커: MCH-AFLT-70-S-e32 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=apy_seq / 라벨: apy_seq / 앵커: MCH-AFLT-70-S-e33 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=proc_st / 라벨: proc_st / 앵커: MCH-AFLT-70-S-e34 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=sub_biz_cd / 라벨: sub_biz_cd / 앵커: MCH-AFLT-70-S-e35 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mate_pos_yn / 라벨: mate_pos_yn / 앵커: MCH-AFLT-70-S-e36 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=check_all / 라벨: check_all / 앵커: MCH-AFLT-70-S-e37 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk1 / 라벨: agree-chk1 / 앵커: MCH-AFLT-70-S-e38 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk2 / 라벨: agree-chk2 / 앵커: MCH-AFLT-70-S-e39 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk3 / 라벨: agree-chk3 / 앵커: MCH-AFLT-70-S-e40 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk4 / 라벨: agree-chk4 / 앵커: MCH-AFLT-70-S-e41 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=memb_nm / 라벨: 이름(실명) / 앵커: MCH-AFLT-70-S-e42 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_dt / 라벨: 주민번호 앞자리 / 앵커: MCH-AFLT-70-S-e43 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_gndr / 라벨: brt_gndr / 앵커: MCH-AFLT-70-S-e44 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel_no / 라벨: 휴대폰번호 / 앵커: MCH-AFLT-70-S-e45 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aprv_no / 라벨: 인증번호 6자리 / 앵커: MCH-AFLT-70-S-e46 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_aflt_cert_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
