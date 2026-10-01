--- 꼬리표 ---
id: BPY-KID-30-S / system: BPY / 기능: 비플페이 앱 > 미성년 회원가입 > 보호자가 앱 미설치자인경우 호출되는 웹페이지 / 과업: []

--- 화면명세 ---
화면명: 보호자가 앱 미설치자인경우 호출되는 웹페이지
목적: 보호자가 앱 미설치자인경우 호출되는 웹페이지 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: BPY-KID-30-S-e20 / 업무: 휴대폰 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.LGN_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/LGN_000003_act.jsp:18
- 요소: BPY-KID-30-S-e21 / 업무: 만14세미만 회원 보호자 동의처리 / 처리: 읽기·쓰기 / 테이블: TB_KID_AGR_REQ / 입력: 휴대폰번호, 거래번호, 인증번호, 통신사, 회원명, SVC_TYPE, 거래번호, 거래일자, REQ_MOB_NO, FLAG … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_u001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_U001.xml:10
- 요소: 화면 / 업무: 휴대폰본인인증 약관 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 거래구분, 뒤로가기버튼 유무 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_mobile_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_mobile_clause_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 약관열기 / 앵커: BPY-KID-30-S-e17 / 해설: 약관열기
- 구분: 기능 / 좌표: - / 라벨: 보기 / 앵커: BPY-KID-30-S-e18 / 해설: 보기
- 구분: 기능 / 좌표: id=sel_tel_corp / 라벨: 통신사 / 앵커: BPY-KID-30-S-e19 / 해설: 통신사
- 구분: 기능 / 좌표: id=aprv_send / 라벨: 인증번호 요청 / 앵커: BPY-KID-30-S-e20 / 해설: 인증번호 요청
- 구분: 기능 / 좌표: id=btn_next / 라벨: 동의하기 / 앵커: BPY-KID-30-S-e21 / 해설: 동의하기
- 구분: 항목 / 좌표: id=check_all / 라벨: check_all / 앵커: BPY-KID-30-S-e22 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk1 / 라벨: agree-chk1 / 앵커: BPY-KID-30-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk2 / 라벨: agree-chk2 / 앵커: BPY-KID-30-S-e24 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk3 / 라벨: agree-chk3 / 앵커: BPY-KID-30-S-e25 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk4 / 라벨: agree-chk4 / 앵커: BPY-KID-30-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk5 / 라벨: agree-chk5 / 앵커: BPY-KID-30-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=memb_nm / 라벨: 이름(실명) / 앵커: BPY-KID-30-S-e28 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_dt / 라벨: 주민번호 앞자리 / 앵커: BPY-KID-30-S-e29 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_gndr / 라벨: brt_gndr / 앵커: BPY-KID-30-S-e30 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel_no / 라벨: 휴대폰번호 / 앵커: BPY-KID-30-S-e31 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aprv_no / 라벨: 인증번호 6자리 / 앵커: BPY-KID-30-S-e32 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/kid_agr_web_recv_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
