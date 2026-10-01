--- 꼬리표 ---
id: EXW-UWV-20-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 휴대폰 본인인증 / 과업: []

--- 화면명세 ---
화면명: 휴대폰 본인인증
목적: 휴대폰 본인인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 휴대폰 본인인증번호 검증 및 회원가입 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_APP_LOCAL_MNG / 입력: 휴대폰번호, 거래번호, 인증번호, 회원명, 생년월일8자리, 성별, 내외국인구분, 통신사, 마켓팅 정보 수신동의여부, 앱 코드 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_join_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_join_c001_act.jsp:41 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10
- 요소: 화면 / 업무: KCB 휴대폰 본인인증번호 발송요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 통신사, 재전송여부, 주민번호, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_join_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_join_r001_act.jsp:34

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: EXW-UWV-20-S-e01 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 페이지나가기 / 앵커: EXW-UWV-20-S-e02 / 해설: 페이지나가기
- 구분: 기능 / 좌표: - / 라벨: 통신사 선택 / 앵커: EXW-UWV-20-S-e03 / 해설: 통신사 선택
- 구분: 기능 / 좌표: - / 라벨: 다음 / 앵커: EXW-UWV-20-S-e04 / 해설: 다음
- 구분: 항목 / 좌표: - / 라벨: 이름(실명)을 입력하세요. / 앵커: EXW-UWV-20-S-e05 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 앞 6자리 / 앵커: EXW-UWV-20-S-e06 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 휴대전화번호를 입력하세요. / 앵커: EXW-UWV-20-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_join_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
