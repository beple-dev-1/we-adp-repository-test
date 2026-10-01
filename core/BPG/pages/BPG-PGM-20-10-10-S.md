--- 꼬리표 ---
id: BPG-PGM-20-10-10-S / system: BPG / 기능: 비플PG > 비플PG 회원·계좌 > 비플pg 사용자 인증 > 거래승인번호검증(v2) > 통합PG 거래승인번호 재설정 / 과업: []

--- 화면명세 ---
화면명: 통합PG 거래승인번호 재설정
목적: 통합PG 거래승인번호 재설정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-PGM-20-10-S

--- 업무 ---
- 요소: BPG-PGM-20-10-10-S-e25 / 업무: 휴대폰 본인인증 확인 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_ENT_APP, TB_MEMBER_CORP_APRV / 입력: 휴대폰번호, 거래번호, 인증번호, PUSH_ID, 통신사, 회원명 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000002_act.jsp:17 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10
- 요소: BPG-PGM-20-10-10-S-e23 / 업무: 휴대폰 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_LGN_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/lgn/WEBVIEW_LGN_000003_act.jsp:29
- 요소: 화면 / 업무: api_v2_payment_reserve.act / 미확인: WSVC 없음 / 근거: api_v2_payment_reserve.act (WSVC 없음)
- 요소: 화면 / 업무: 웹뷰 API - 휴대폰본인인증 약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 뒤로가기버튼 유무, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_lgn_mobile_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bzp/com/webview_lgn_mobile_clause_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 거래승인번호 재설정 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: 거래승인번호, PASSWORD_ID_CONFIRM, 회원코드, 앱코드, 회원명, 휴대폰번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_bppg_v2_pwd_reset_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/bppg/zero_bppg_v2_pwd_reset_c001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R031.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: id=sel_tel_corp / 라벨: 통신사 선택 / 앵커: BPG-PGM-20-10-10-S-e18 / 이동modal: popup-select--telecom / 해설: popup-select--telecom 팝업 열기
- 구분: 이동 / 좌표: - / 라벨: 통신사 이용약관 보기 / 앵커: BPG-PGM-20-10-10-S-e19 / 이동unresolved: webview_lgn_mobile_clause.act / 해설: 통신사 이용약관 보기
- 구분: 이동 / 좌표: - / 라벨: 본인확인 서비스 이용약관 보기 / 앵커: BPG-PGM-20-10-10-S-e20 / 이동unresolved: webview_lgn_mobile_clause.act / 해설: 본인확인 서비스 이용약관 보기
- 구분: 이동 / 좌표: - / 라벨: 개인정보 수집 · 이용 · 취급 · 위탁 동의 약관 보기 / 앵커: BPG-PGM-20-10-10-S-e21 / 이동unresolved: webview_lgn_mobile_clause.act / 해설: 개인정보 수집 · 이용 · 취급 · 위탁 동의 약관 보기
- 구분: 이동 / 좌표: - / 라벨: 고유식별정보 처리 동의 약관 보기 / 앵커: BPG-PGM-20-10-10-S-e22 / 이동unresolved: webview_lgn_mobile_clause.act / 해설: 고유식별정보 처리 동의 약관 보기
- 구분: 기능 / 좌표: id=aprvBtn / 라벨: 인증번호 요청 / 앵커: BPG-PGM-20-10-10-S-e23 / 해설: 인증번호 요청
- 구분: 기능 / 좌표: - / 라벨: 이전페이지로 / 앵커: BPG-PGM-20-10-10-S-e24 / 해설: 이전페이지로
- 구분: 기능 / 좌표: id=btn_next / 라벨: 인증하기 / 앵커: BPG-PGM-20-10-10-S-e25 / 해설: 인증하기
- 구분: 항목 / 좌표: id=check_all / 라벨: check_all / 앵커: BPG-PGM-20-10-10-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk1 / 라벨: agree-chk1 / 앵커: BPG-PGM-20-10-10-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk2 / 라벨: agree-chk2 / 앵커: BPG-PGM-20-10-10-S-e28 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk3 / 라벨: agree-chk3 / 앵커: BPG-PGM-20-10-10-S-e29 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk4 / 라벨: agree-chk4 / 앵커: BPG-PGM-20-10-10-S-e30 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=input_memb_nm / 라벨: 이름(실명) 입력 / 앵커: BPG-PGM-20-10-10-S-e31 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_dt / 라벨: 생년월일 6자리 / 앵커: BPG-PGM-20-10-10-S-e32 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel_no / 라벨: 휴대폰번호 입력 / 앵커: BPG-PGM-20-10-10-S-e33 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aprvNo / 라벨: 인증번호 6자리 / 앵커: BPG-PGM-20-10-10-S-e34 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/bppg/zero_bppg_v2_pwd_reset_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
