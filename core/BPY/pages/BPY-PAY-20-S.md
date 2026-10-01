--- 꼬리표 ---
id: BPY-PAY-20-S / system: BPY / 기능: 비플페이 앱 > 제로페이 결제 > 제로페이 결제 메인 > 계좌 목록 / 과업: []

--- 화면명세 ---
화면명: 제로페이 결제 메인 > 계좌 목록
목적: 제로페이 결제 메인 > 계좌 목록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 빠른결제 검증 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_ONLN_AFF_TRAN / 입력: 회원코드, 앱코드, 가맹점ID, 결제금액, TYPE, 비픞머니 결제여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000015.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000015_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R018.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
- 요소: 화면 / 업무: 제로페이 결제 메인 (화면) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_MEMBER_MNY / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_multi.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_multi_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- 요소: 화면 / 업무: 식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, PROD_DV / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_multi_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_multi_c001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 상위 메뉴로 이동 / 앵커: BPY-PAY-20-S-e03 / 해설: 상위 메뉴로 이동
- 구분: 기능 / 좌표: - / 라벨: 결제 / 앵커: BPY-PAY-20-S-e04 / 해설: 결제

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/zero_multi_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
