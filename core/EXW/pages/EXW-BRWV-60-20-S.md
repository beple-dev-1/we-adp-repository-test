--- 꼬리표 ---
id: EXW-BRWV-60-20-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 브랜드상품권 구매내역 상세조회 (info) > 브랜드상품권 환불 계좌 웹뷰 조회 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 환불 계좌 웹뷰 조회
목적: 브랜드상품권 환불 계좌 웹뷰 조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-60-S

--- 업무 ---
- 요소: EXW-BRWV-60-20-S-e03 / 업무: 상품권환불/선물취소/유효기간 연장 요청 action / 처리: 쓰기 / 테이블: TB_BRND_ODR / 입력: 회원코드, 앱코드, 직원상태, 브랜드상품권 번호, GIFT_SRNO, TOKEN, REFUND_ABL_YN, 계좌번호, 은행코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_action.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_action_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=acct / 라벨: 국민은행() / 앵커: EXW-BRWV-60-20-S-e01 / 해설: 국민은행()
- 구분: 기능 / 좌표: id=btn_refund / 라벨: 신청하기 / 앵커: EXW-BRWV-60-20-S-e03 / 해설: 신청하기
- 구분: 이동 / 좌표: - / 라벨: 홈 / 앵커: EXW-BRWV-60-20-S-e04 / 이동: EXW-BRWV-10-S / 해설: 홈
- 구분: 이동 / 좌표: - / 라벨: 이전 / 앵커: EXW-BRWV-60-20-S-e06 / 이동: EXW-BRWV-60-S / 해설: 이전
- 구분: 기능 / 좌표: - / 라벨: 다음 / 앵커: EXW-BRWV-60-20-S-e07 / 해설: 다음
- 구분: 이동 / 좌표: - / 라벨: 내역 / 앵커: EXW-BRWV-60-20-S-e09 / 이동: EXW-BRWV-20-S / 해설: 내역

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_gift_refund_acct_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
