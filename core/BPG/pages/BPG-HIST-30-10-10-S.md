--- 꼬리표 ---
id: BPG-HIST-30-10-10-S / system: BPG / 기능: 비플PG > 결제내역 > 요기요 > 주문내역(메인) > 주문내역(상세) / 과업: []

--- 화면명세 ---
화면명: 주문내역(상세)
목적: 주문내역(상세) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-HIST-30-10-S

--- 업무 ---
- 요소: 화면 / 업무: 요기요_배송주소조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R002.xml:10
- 요소: 화면 / 업무: 요기요 가맹점 상세(Y211) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
- 요소: 화면 / 업무: 주문내역 조회(상세) / 처리: 읽기 / 테이블: TB_YGYO_ODR, TB_BPPAY_TRAN / 입력: shop_id, shop_name, lat, lng, order_id, cart_id / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_r001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_R004.xml:10
- 요소: 화면 / 업무: 요기요_주문원장_조회_단건 / 처리: 읽기 / 테이블: TB_YGYO_ODR / 입력: 회원코드, SHOP_ID, YGYO_ORDER_ID, CART_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_r002_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_R001.xml:10
- 요소: 화면 / 업무: 요기요_주문원장_주문취소_단건 / 처리: 쓰기 / 테이블: TB_YGYO_ODR / 입력: 회원코드, SHOP_ID, YGYO_ORDER_ID, CART_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det_u003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_u003_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_U003.xml:10
- 요소: 화면 / 업무: 요기요 영수증 (화면) / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN, TB_YGYO_ODR, TB_ZEROPAY_MT_ODR / 입력: 거래일자, 거래번호, shop_id, shop_name, shop_address, shop_phone_number, order_id, CANCEL_PAYMENT_TRANSACTION_NUMBER, CANCEL_PAYMENT_TRANSACTION_DT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_receipt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_receipt_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_YGYO_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_YGYO_TRAN_R002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 시작지점으로 올라가기 / 앵커: BPG-HIST-30-10-10-S-e04 / 해설: 시작지점으로 올라가기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-HIST-30-10-10-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 결제상세 보기 / 앵커: BPG-HIST-30-10-10-S-e06 / 해설: 결제상세 보기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
