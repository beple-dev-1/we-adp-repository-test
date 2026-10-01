--- 꼬리표 ---
id: BPY-BRND-10-20-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 구매가능 상품권 상세조회 > 브랜드상품권 상품권 구매 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 상품권 구매
목적: 브랜드상품권 상품권 구매 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-BRND-10-S

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: brnd_gift_purchase:949
- 요소: 화면 / 업무: 브랜드상품권 상품권 구매 / 처리: 읽기·쓰기 / 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_HBRD_BANK, TB_BRND_TRAN, TB_ALARM_INFO … / 입력: 버튼 타입, 직원상태, 총금액, 총건수, 권종 코드, 선물 메세지, SEND_USER_NM, ORDER_ID, 은행코드, 계좌번호 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_c001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 상품권 구매 - 계좌조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 입력: KIND_CARD_IMG, KIND_FULL_NM, 브랜드상품권ID, BGC_NM, SALES_AMT, STANDARD_AMT, SUPPORT_AMT, 총금액, 할인률, 보유 금액 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_r001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-BRND-10-20-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_outpage / 라벨: 페이지나가기 / 앵커: BPY-BRND-10-20-S-e06 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=acct_info / 라벨: 국민은행() 계좌 / 앵커: BPY-BRND-10-20-S-e07 / 해설: 국민은행() 계좌
- 구분: 기능 / 좌표: id=btn_pay / 라벨: 결제하기 / 앵커: BPY-BRND-10-20-S-e08 / 해설: 결제하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_purchase_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
