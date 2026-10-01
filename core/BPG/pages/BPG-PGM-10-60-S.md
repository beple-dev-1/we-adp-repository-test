--- 꼬리표 ---
id: BPG-PGM-10-60-S / system: BPG / 기능: 비플PG > 비플PG 회원·계좌 > 비플PG - 계좌관리 > 오픈뱅킹 금융정보조회 약관 / 과업: []

--- 화면명세 ---
화면명: 오픈뱅킹 금융정보조회 약관
목적: 오픈뱅킹 금융정보조회 약관 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 웹뷰 API - 사용자 계좌목록 조회 / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 계좌검증요청 / 처리: 읽기 / 테이블: TB_ACCOUNT / 입력: 은행코드, 계좌번호, 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000002_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10
- 요소: 화면 / 업무: 웹뷰 API - ARS 요청 / 처리: 읽기·쓰기 / 테이블: TB_BANK, TB_CERTIFY_ARS, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, 오픈뱅킹회원번호, 앱코드, 회원코드, 생년월일, 회원명, 휴대폰번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000004_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - ARS 인증 결과 확인 / 처리: 읽기 / 테이블: TB_CERTIFY_ARS / 입력: 거래일자, 거래번호, 은행코드, 계좌번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000005_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 계좌등록 / 처리: 읽기·쓰기 / 테이블: TB_CERTIFY_ARS, TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, 오픈뱅킹 검증번호, 오픈뱅킹인증일자, 오픈뱅킹 검증거래번호, 오픈뱅킹ARS승인일자, 오픈뱅킹ARS거래번호, 개인정보 수집 이용 및 제공 동의 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000006_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 주계좌설정 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT / 입력: SEQ, 은행코드, 계좌번호, 회원코드 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000007_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 계좌삭제 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_BANK, TB_ZEROPAY_BANK / 입력: SEQ, 은행코드, 계좌번호, 회원코드, 회원명, 생년월일, PAYR_NO, 앱코드, 휴대폰번호 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000008.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000008_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- 요소: 화면 / 업무: api_v2_payment_reserve.act / 미확인: WSVC 없음 / 근거: api_v2_payment_reserve.act (WSVC 없음)
- 요소: 화면 / 업무: 약관상세조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 사용구분, 은행코드, 이용기관ID, CLS_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.detail_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/detail_clause_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10
- 요소: 화면 / 업무: 은행별 약관조히 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 은행코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.set_clause_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/set_clause_r001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 상위메뉴로 이동 / 앵커: BPG-PGM-10-60-S-e02 / 해설: 상위메뉴로 이동

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/bppg/bppg_main_account_view.jsp · 단계: 오픈뱅킹 금융정보조회 약관
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
