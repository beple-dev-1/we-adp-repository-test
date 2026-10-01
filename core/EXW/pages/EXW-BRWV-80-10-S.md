--- 꼬리표 ---
id: EXW-BRWV-80-10-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 브랜드상품권 웹뷰 게이트웨이 > 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증
목적: 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-80-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API 로그인 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_HUB_TRAN / 입력: 회원코드, 앱코드, ORG_CD, ORG_APP_CD, API_KEY, NMA_DEV_ID, NMA_MODEL, NMA_NETNM, NMA_PLF, NMA_PLF_VER / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000001_act.jsp:47 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HUB_TRAN_C001.xml:10
- 요소: EXW-BRWV-80-10-S-e13 / 업무: 브랜드상품권 웹뷰 API - 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호, BRT_GNDR … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000003_act.jsp:29
- 요소: EXW-BRWV-80-10-S-e15 / 업무: 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_SLEEP_MNG, TB_MEMBER_APP / 입력: 휴대폰번호, 거래번호, 인증번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, PUSH_ID, 마켓팅 정보 수신동의여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000005_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SLEEP_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SLEEP_MNG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10
- 요소: EXW-BRWV-80-10-S-e14 / 업무: 약관목록 조회 / 처리: 읽기 / 테이블: TB_CLAUSE_OR, TB_CLAUSE / 입력: 사용구분, 통신사 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000001_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R006.xml:10
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_name_del / 라벨: 삭제 / 앵커: EXW-BRWV-80-10-S-e01 / 해설: 삭제
- 구분: 기능 / 좌표: id=default_national / 라벨: 내국인 / 앵커: EXW-BRWV-80-10-S-e02 / 해설: 내국인
- 구분: 기능 / 좌표: - / 라벨: 외국인 / 앵커: EXW-BRWV-80-10-S-e03 / 해설: 외국인
- 구분: 기능 / 좌표: id=default_gender / 라벨: 남자 / 앵커: EXW-BRWV-80-10-S-e04 / 해설: 남자
- 구분: 기능 / 좌표: - / 라벨: 여자 / 앵커: EXW-BRWV-80-10-S-e05 / 해설: 여자
- 구분: 기능 / 좌표: id=default_telcorp / 라벨: 통신사 선택 / 앵커: EXW-BRWV-80-10-S-e06 / 해설: 통신사 선택
- 구분: 기능 / 좌표: - / 라벨: SKT / 앵커: EXW-BRWV-80-10-S-e07 / 해설: SKT
- 구분: 기능 / 좌표: - / 라벨: KT / 앵커: EXW-BRWV-80-10-S-e08 / 해설: KT
- 구분: 기능 / 좌표: - / 라벨: LG U+ / 앵커: EXW-BRWV-80-10-S-e09 / 해설: LG U+
- 구분: 기능 / 좌표: - / 라벨: SKT 알뜰폰 / 앵커: EXW-BRWV-80-10-S-e10 / 해설: SKT 알뜰폰
- 구분: 기능 / 좌표: - / 라벨: KT 알뜰폰 / 앵커: EXW-BRWV-80-10-S-e11 / 해설: KT 알뜰폰
- 구분: 기능 / 좌표: - / 라벨: LG 알뜰폰 / 앵커: EXW-BRWV-80-10-S-e12 / 해설: LG 알뜰폰
- 구분: 기능 / 좌표: id=aprv_send / 라벨: 인증번호발송 / 앵커: EXW-BRWV-80-10-S-e13 / 해설: 인증번호발송
- 구분: 기능 / 좌표: id=btn_clause1 / 라벨: 자세히보기 / 앵커: EXW-BRWV-80-10-S-e14 / 해설: 자세히보기
- 구분: 기능 / 좌표: id=btn_next / 라벨: 휴면계정 해제하기 / 앵커: EXW-BRWV-80-10-S-e15 / 해설: 휴면계정 해제하기
- 구분: 항목 / 좌표: id=agree_chk1 / 라벨: agree_chk1 / 앵커: EXW-BRWV-80-10-S-e16 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=memb_nm / 라벨: 이름(실명) / 앵커: EXW-BRWV-80-10-S-e17 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brt_dt / 라벨: 주민등록번호 앞 6자리 / 앵커: EXW-BRWV-80-10-S-e18 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel_no / 라벨: 연락처 / 앵커: EXW-BRWV-80-10-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aprv_no / 라벨: 인증번호를 입력해주세요. / 앵커: EXW-BRWV-80-10-S-e20 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/com/BRND_LGN_MEMBER_SLEEP_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
