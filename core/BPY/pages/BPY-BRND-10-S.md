--- 꼬리표 ---
id: BPY-BRND-10-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 구매가능 상품권 상세조회 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 구매가능 상품권 상세조회
목적: 브랜드상품권 구매가능 상품권 상세조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 계좌 1원인증 (화면) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_acct_auth.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_acct_auth_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
- 요소: 화면 / 업무: 브랜드상품권 구매가능 상품권 상세조회 (화면) / 처리: 읽기 / 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_HBRD_BANK / 입력: 브랜드상품권ID, 권종 코드, 거래 구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_detail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_detail_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R026.xml:10
- 요소: 화면 / 업무: 브랜드상품권 상품권 구매 (화면) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 입력: KIND_CARD_IMG, KIND_FULL_NM, 브랜드상품권ID, BGC_NM, SALES_AMT, STANDARD_AMT, SUPPORT_AMT, 총금액, 할인률, 보유 금액 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_act.jsp:36 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-BRND-10-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_outpage / 라벨: 페이지나가기 / 앵커: BPY-BRND-10-S-e09 / 해설: 페이지나가기
- 구분: 기능 / 좌표: - / 라벨: 기본정보 / 앵커: BPY-BRND-10-S-e10 / 해설: 기본정보
- 구분: 기능 / 좌표: id=buss_info / 라벨: 사업자정보 확인 / 앵커: BPY-BRND-10-S-e11 / 해설: 사업자정보 확인
- 구분: 기능 / 좌표: - / 라벨: bpay@bizplay.co.kr / 앵커: BPY-BRND-10-S-e12 / 해설: bpay@bizplay.co.kr
- 구분: 기능 / 좌표: id=gift_btn / 라벨: 선물하기 / 앵커: BPY-BRND-10-S-e13 / 해설: 선물하기
- 구분: 기능 / 좌표: id=buy_btn / 라벨: 구매하기 / 앵커: BPY-BRND-10-S-e14 / 해설: 구매하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_detail_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
