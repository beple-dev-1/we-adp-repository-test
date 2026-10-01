--- 꼬리표 ---
id: BPY-ACCT-20-10-S / system: BPY / 기능: 비플페이 앱 > 계좌관리 > 계좌관리(개인) > 계좌 관리 / 과업: []

--- 화면명세 ---
화면명: 계좌 관리
목적: 계좌 관리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: main_account:804
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: main_account:825
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: main_account:847
- 요소: 화면 / 업무: 계좌목록조회 / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000001_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- 요소: 화면 / 업무: 계좌검증요청 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_MEMBER, TB_MEMBER_APP, TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 은행코드, 계좌번호, VERIFY_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000002_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10
- 요소: 화면 / 업무: 계좌검증 확인 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, APV_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000003_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- 요소: 화면 / 업무: ARS 요청 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_BANK, TB_CERTIFY_ARS, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, 오픈뱅킹회원번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000004_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
- 요소: 화면 / 업무: ARS 인증 결과 확인 / 처리: 읽기 / 테이블: TB_CERTIFY_ARS / 입력: 거래일자, 거래번호, 은행코드, 계좌번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000005_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
- 요소: 화면 / 업무: 계좌등록 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_CERTIFY_ARS, TB_MEMBER, TB_MEMBER_APP, TB_BANK … / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, 오픈뱅킹 검증번호, 오픈뱅킹인증일자, 오픈뱅킹 검증거래번호, 오픈뱅킹ARS승인일자, 오픈뱅킹ARS거래번호, 개인정보 수집 이용 및 제공 동의 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000006_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R028.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_PAY_MNG_C002.xml:10
- 요소: 화면 / 업무: 주계좌설정 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT / 입력: SEQ, 은행코드, 계좌번호 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000007_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U001.xml:10
- 요소: 화면 / 업무: 계좌삭제 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_MEMBER_PAY_MNG, TB_BANK, TB_ZEROPAY_BANK, TB_MEMBER … / 입력: SEQ, 은행코드, 계좌번호 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000008.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000008_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_PAY_MNG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_PAY_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_PAY_MNG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- 요소: 화면 / 업무: 약관상세조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 사용구분, 은행코드, 이용기관ID, CLS_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.detail_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/detail_clause_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10
- 요소: 화면 / 업무: 은행별 약관조히 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 은행코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.set_clause_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/set_clause_r001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 상위메뉴로 이동 / 앵커: BPY-ACCT-20-10-S-e03 / 해설: 상위메뉴로 이동
- 구분: 기능 / 좌표: id=acct_add / 라벨: 계좌 추가 / 앵커: BPY-ACCT-20-10-S-e04 / 해설: 계좌 추가

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/acct/main_account_view.jsp · 단계: 계좌 관리
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
