--- 꼬리표 ---
id: BPY-ACCT-10-S / system: BPY / 기능: 비플페이 앱 > 계좌관리 > 계좌 등록/해지 요청 / 과업: []

--- 화면명세 ---
화면명: 계좌 등록/해지 요청
목적: 계좌 등록/해지 요청 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 계좌등록 / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_MEMBER_APP, TB_MEMBER / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.acct_rtq_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/acct_rtq_c001_act.jsp:41 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R025.xml:10
- 요소: 화면 / 업무: 계좌해지 요청 / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_MEMBER_APP, TB_MEMBER / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.acct_rtq_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/acct_rtq_u001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R025.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=reg_acct_req / 라벨: 일괄등록요청 / 앵커: BPY-ACCT-10-S-e03 / 해설: 일괄등록요청
- 구분: 기능 / 좌표: id=trmt_acct_req / 라벨: 일괄해지요청 / 앵커: BPY-ACCT-10-S-e04 / 해설: 일괄해지요청

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/acct/acct_rtq_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
