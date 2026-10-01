--- 꼬리표 ---
id: BPY-BRND-10-10-20-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 구매가능 상품권 상세조회 > 브랜드상품권 계좌 1원인증 > 입금자명 확인 / 과업: []

--- 화면명세 ---
화면명: 입금자명 확인
목적: 입금자명 확인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-BRND-10-S

--- 업무 ---
- 요소: 화면 / 업무: 계좌 1원인증 요청 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 은행코드, 계좌번호, 회원코드, 회원명, 휴대폰번호, 앱코드, VERIFY_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000010.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000010_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10
- 요소: 화면 / 업무: 계좌 1원인증 확인 / 처리: 읽기·쓰기 / 테이블: TB_ACCT_VERIFY, TB_ETC_SUM / 입력: 거래일자, 거래번호, 은행코드, 계좌번호, APV_NO, TOKEN, TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000011.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000011_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCT_VERIFY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 숫자 입력하기 / 앵커: BPY-BRND-10-10-20-S-e06 / 해설: 숫자 입력하기
- 구분: 기능 / 좌표: id=step2_btn_back / 라벨: 상위메뉴로 이동 / 앵커: BPY-BRND-10-10-20-S-e07 / 해설: 상위메뉴로 이동
- 구분: 항목 / 좌표: id=num1 / 라벨: num1 / 앵커: BPY-BRND-10-10-20-S-e08 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=num2 / 라벨: num2 / 앵커: BPY-BRND-10-10-20-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=num3 / 라벨: num3 / 앵커: BPY-BRND-10-10-20-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_acct_auth_view.jsp · 단계: 입금자명 확인
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
