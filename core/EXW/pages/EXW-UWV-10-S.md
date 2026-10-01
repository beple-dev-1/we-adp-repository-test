--- 꼬리표 ---
id: EXW-UWV-10-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 회원가입 / 과업: []

--- 화면명세 ---
화면명: 회원가입
목적: 회원가입 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 휴대폰 본인인증 요청(통합웹뷰버전) / 처리: 미확인 / 입력: 이용기관ID, 요청부, 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래일련번호 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_lgn_000003_v1.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_lgn_000003_v1_act.jsp:32
- 요소: 화면 / 업무: 웹뷰 API - 휴대폰 본인인증 확인·가입(통합웹뷰버전) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_APP_LOCAL_MNG, TB_MEMBER_APP, TB_MNY_TRAN_MST, TB_CERTIFY, TB_MEMBER_NON_CI … / 입력: 이용기관ID, 요청부, 휴대폰번호, 거래일련번호, 인증번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_lgn_000004_v1.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_lgn_000004_v1_act.jsp:45 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.LINK_USER_BIPLE_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U030.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R023.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 통신사 선택 / 앵커: EXW-UWV-10-S-e01 / 이동modal: popup-select--telecom / 해설: popup-select--telecom 팝업 열기
- 구분: 기능 / 좌표: id=btnClose / 라벨: 닫기 / 앵커: EXW-UWV-10-S-e02 / 해설: 닫기
- 구분: 기능 / 좌표: id=req_certify / 라벨: 인증하기 / 앵커: EXW-UWV-10-S-e03 / 해설: 인증하기
- 구분: 항목 / 좌표: id=email / 라벨: 이메일 주소 / 앵커: EXW-UWV-10-S-e04 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mob_no / 라벨: 휴대폰번호 / 앵커: EXW-UWV-10-S-e05 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=birth / 라벨: 생년월일 6자리 / 앵커: EXW-UWV-10-S-e06 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=name / 라벨: 이름 / 앵커: EXW-UWV-10-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_webview_join_v2_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
