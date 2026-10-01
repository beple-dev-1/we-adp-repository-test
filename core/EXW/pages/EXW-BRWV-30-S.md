--- 꼬리표 ---
id: EXW-BRWV-30-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 브랜드상품권 웹뷰 API - 계좌관리 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 웹뷰 API - 계좌관리
목적: 브랜드상품권 웹뷰 API - 계좌관리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 사용자 계좌목록 조회 / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK / 입력: TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 계좌검증요청 / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_MEMBER, TB_MEMBER_APP / 입력: 은행코드, 계좌번호, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000002_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 계좌검증 확인 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, APV_NO, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000003_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - ARS 요청 / 처리: 읽기·쓰기 / 테이블: TB_BANK, TB_CERTIFY_ARS, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, 오픈뱅킹회원번호, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000004_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - ARS 인증 결과 확인 / 처리: 읽기 / 테이블: TB_CERTIFY_ARS / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000005_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 계좌등록 / 처리: 읽기·쓰기 / 테이블: TB_CERTIFY_ARS, TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, 오픈뱅킹 검증번호, 오픈뱅킹인증일자, 오픈뱅킹 검증거래번호, 오픈뱅킹ARS승인일자, 오픈뱅킹ARS거래번호, 개인정보 수집 이용 및 제공 동의 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000006_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 주계좌설정 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT / 입력: SEQ, 은행코드, 계좌번호, TOKEN / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000007_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 계좌삭제 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_BANK, TB_ZEROPAY_BANK / 입력: SEQ, 은행코드, 계좌번호, TOKEN / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000008.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000008_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 은행별 약관조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 은행코드, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_CLAUSE_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_CLAUSE_000001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 은행별 약관상세조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 사용구분, 은행코드, 이용기관ID, CLS_CD, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_CLAUSE_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_CLAUSE_000002_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=acct_add / 라벨: 계좌 추가 / 앵커: EXW-BRWV-30-S-e03 / 해설: 계좌 추가
- 구분: 기능 / 좌표: - / 라벨: 이전 / 앵커: EXW-BRWV-30-S-e04 / 해설: 이전
- 구분: 이동 / 좌표: - / 라벨: 홈 / 앵커: EXW-BRWV-30-S-e05 / 이동: EXW-BRWV-10-S / 해설: 홈
- 구분: 이동 / 좌표: - / 라벨: MY / 앵커: EXW-BRWV-30-S-e06 / 이동: EXW-BRWV-20-S / 해설: MY

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_main_account_view.jsp · 단계: 브랜드상품권 웹뷰 API - 계좌관리
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
