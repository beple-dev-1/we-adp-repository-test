--- 꼬리표 ---
id: BPG-HIST-10-10-S / system: BPG / 기능: 비플PG > 결제내역 > 스마트오더 > 주문내역 / 과업: []

--- 화면명세 ---
화면명: 주문내역
목적: 주문내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 구매내역 리스트 / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_DELIV_ODR_MENU … / 입력: MEMB_CD, APP_CD, REQUEST_OFFSET, LIMIT_CNT, FILTER_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R028.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-HIST-10-10-S-e03 / 이동unresolved: uf_back() / 해설: 뒤로가기
- 구분: 이동 / 좌표: id=do_order / 라벨: 주문하러 가기 / 앵커: BPG-HIST-10-10-S-e04 / 이동: BPG-ORDR-30-S / 해설: 주문하러 가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
