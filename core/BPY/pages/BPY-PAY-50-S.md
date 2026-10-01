--- 꼬리표 ---
id: BPY-PAY-50-S / system: BPY / 기능: 비플페이 앱 > 제로페이 결제 > 식권제로페이 결제(보유식권 1개)+함께결제 N / 과업: []

--- 화면명세 ---
화면명: 식권제로페이 결제(보유식권 1개)+함께결제 N
목적: 식권제로페이 결제(보유식권 1개)+함께결제 N 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 빠른결제 검증 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_ONLN_AFF_TRAN / 입력: 회원코드, 앱코드, 가맹점ID, 결제금액, TYPE, 비픞머니 결제여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000015.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000015_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R018.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
- 요소: 화면 / 업무: 식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_meal_ticket_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_meal_ticket_c001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10

--- 정의 ---

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_meal_single_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
