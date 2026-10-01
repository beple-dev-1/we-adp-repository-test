--- 꼬리표 ---
id: BPY-BRND-30-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 환불 계좌 조회 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 환불 계좌 조회
목적: 브랜드상품권 환불 계좌 조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: brnd_gift_refund_acct:142
- 요소: 화면 / 업무: 브랜드상품권 환불/선물취소/유효기간 연장처리 / 처리: 쓰기 / 테이블: TB_BRND_ODR / 입력: 회원코드, 앱코드, 직원상태, 브랜드상품권 번호, GIFT_SRNO, 은행코드, 계좌번호, REFUND_ABL_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_action.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_action_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 환불계좌조회 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_refund_acct_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_refund_acct_r001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_back / 라벨: 뒤로가기 / 앵커: BPY-BRND-30-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=acct / 라벨: 국민은행() / 앵커: BPY-BRND-30-S-e06 / 해설: 국민은행()
- 구분: 기능 / 좌표: id=btn_refund / 라벨: 신청하기 / 앵커: BPY-BRND-30-S-e07 / 해설: 신청하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_refund_acct_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
