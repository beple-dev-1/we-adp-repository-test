--- 꼬리표 ---
id: BPG-HIST-20-10-S / system: BPG / 기능: 비플PG > 결제내역 > 오피스푸드 > 오피스푸드(식사배송) 구매내역 상세 - 조회 / 과업: []

--- 화면명세 ---
화면명: 오피스푸드(식사배송) 구매내역 상세 - 조회
목적: 오피스푸드(식사배송) 구매내역 상세 - 조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 오피스푸드(식사배송) 주문내역 상세 -1 / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_MEMBER_APP_DELIV, TB_BPPAY_TRAN / 입력: ORDER_ID, ORDER_TYPE, 거래구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R018.xml:10
- 요소: 화면 / 업무: 오피스푸드(식사배송) 주문내역 상세 -2 / 처리: 읽기 / 테이블: CAST, TB_BP_AFLT_DELIV_ODR_MENU, TB_BP_AFLT_DELIV_MENU, TB_BP_AFLT_ODR, TB_BPPAY_TRAN / 입력: ORDER_ID, 주문처리상태, 다이나믹 쿼리 사용여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r002_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_R001.xml:10
- 요소: 화면 / 업무: 오피스푸드 주문내역 상세 - 금액 / 처리: 읽기 / 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN / 입력: ORDER_ID, 주문유형 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r003_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R021.xml:10
- 요소: 화면 / 업무: 오피스푸드 주문내역 상세 - 금액(복합결제) / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_AFLT_ODR, TB_BPPAY_TRAN / 입력: ORDER_ID, 주문유형 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r004_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R022.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-HIST-20-10-S-e04 / 이동: BPG-HIST-10-10-S / 해설: 뒤로가기
- 구분: 이동 / 좌표: id=btn_cancel / 라벨: 주문 취소 / 앵커: BPG-HIST-20-10-S-e05 / 이동: BPG-OFFD-20-10-S / 해설: 주문 취소
- 구분: 이동 / 좌표: - / 라벨: 영수증 상세내역 / 앵커: BPG-HIST-20-10-S-e06 / 이동: BPG-HIST-10-20-S / 해설: 영수증 상세내역

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
