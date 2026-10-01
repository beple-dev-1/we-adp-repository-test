--- 꼬리표 ---
id: EXW-BRWV-80-30-10-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 브랜드상품권 웹뷰 게이트웨이 > 비회원 회원가입 랜딩화면 > 브랜드상품권 웹뷰 API 회원가입 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 웹뷰 API 회원가입
목적: 브랜드상품권 웹뷰 API 회원가입 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-80-30-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API 로그인 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_HUB_TRAN / 입력: 회원코드, 앱코드, ORG_CD, ORG_APP_CD, API_KEY, NMA_DEV_ID, NMA_MODEL, NMA_NETNM, NMA_PLF, NMA_PLF_VER / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000001_act.jsp:47 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HUB_TRAN_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호, BRT_GNDR … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000003_act.jsp:29
- 요소: EXW-BRWV-80-30-10-S-e02 / 업무: 브랜드상품권 웹뷰 API 휴대폰 본인인증 확인 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_APP_LOCAL_MNG, TB_MEMBER_APP, TB_MNY_TRAN_MST, TB_CERTIFY, TB_APP_MNG … / 입력: 휴대폰번호, 거래번호, 인증번호, 회원명, 생년월일, 내외국인구분, 통신사, PUSH_ID, 마켓팅 정보 수신동의여부, BRT_GNDR … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000004_act.jsp:42 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U018.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.LINK_USER_BIPLE_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API 거래승인번호 등록 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: PASSWORD_ID, PASSWORD_ID_CONFIRM, MEMB_CD, 휴대폰번호, 앱코드, 회원명 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_PWD_CHECK_C001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_PWD_CHECK_C001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=teleCorp / 라벨: SKT / 앵커: EXW-BRWV-80-30-10-S-e01 / 해설: SKT
- 구분: 기능 / 좌표: id=next_btn / 라벨: 다음 / 앵커: EXW-BRWV-80-30-10-S-e02 / 해설: 다음
- 구분: 기능 / 좌표: id=goBack / 라벨: 이전 / 앵커: EXW-BRWV-80-30-10-S-e03 / 해설: 이전
- 구분: 기능 / 좌표: id=goMain / 라벨: 홈 / 앵커: EXW-BRWV-80-30-10-S-e04 / 해설: 홈
- 구분: 기능 / 좌표: id=goHistory / 라벨: MY / 앵커: EXW-BRWV-80-30-10-S-e05 / 해설: MY
- 구분: 항목 / 좌표: id=membNm / 라벨: 이름(실명)을 입력하세요. / 앵커: EXW-BRWV-80-30-10-S-e06 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brtDt / 라벨: 앞 6자리 / 앵커: EXW-BRWV-80-30-10-S-e07 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=brtGndr / 라벨: brtGndr / 앵커: EXW-BRWV-80-30-10-S-e08 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mobNo / 라벨: 휴대폰 번호를 입력하세요. / 앵커: EXW-BRWV-80-30-10-S-e09 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_join_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
