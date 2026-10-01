--- 꼬리표 ---
id: MGC-GIFT-20-S / system: MGC / 기능: 모바일상품권 > 상품권 구매·가입 > 상품권 구매(금액·결제수단) / 과업: []

--- 화면명세 ---
화면명: 상품권 구매(금액·결제수단)
목적: 상품권 구매(금액·결제수단) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 제로페이 포인트 결제요청 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ZEROPAY_GIFT_ODR, TB_APP_LOCAL_MNG / 입력: 은행코드, 계좌번호, 계좌SEQ, 주문일자, 주문번호, 거래구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZPP_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/ZPP_000002_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_GIFT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_GIFT_ODR_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: kb / 앵커: MGC-GIFT-20-S-e04 / 해설: kb
- 구분: 기능 / 좌표: - / 라벨: 상품권 닫기 / 앵커: MGC-GIFT-20-S-e05 / 해설: 상품권 닫기
- 구분: 기능 / 좌표: id=approve / 라벨: 하기 / 앵커: MGC-GIFT-20-S-e06 / 해설: 하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zpp/zero_gift_purchase_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
