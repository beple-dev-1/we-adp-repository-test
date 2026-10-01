--- 꼬리표 ---
id: HIT-HIST-10-20-10-S / system: HIT / 기능: 힛플러스 > 결제내역 > 엔터프라이즈제로페이 영수증_v2 > 스마트오더 주문 상세내역 v2 > 스마트오더 주문내역 / 과업: []

--- 화면명세 ---
화면명: 스마트오더 주문내역
목적: 스마트오더 주문내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-HIST-10-20-S

--- 업무 ---
- 요소: 화면 / 업무: ent_bp_aflt_deliv.act / 미확인: WSVC 없음 / 근거: ent_bp_aflt_deliv.act (WSVC 없음)
- 요소: 화면 / 업무: 스마트오더 주문 상세내역 v2 (화면) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_CAFETERIA_ODR, TB_BPPAY_TRAN, TB_CAFETERIA_MENU, TB_CAFETERIA_ODR_MENU … / 입력: ORDER_DT, ORDER_ID, 주문유형 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_v2_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R015.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R030.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R031.xml:10
- 요소: 화면 / 업무: 픽업 QR/바코드 열람건수 수정 / 처리: 쓰기 / 테이블: TB_CAFETERIA_ODR / 입력: ORDER_DT, ORDER_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_u001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10
- 요소: 화면 / 업무: 구매내역 리스트 / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_DELIV_ODR_MENU … / 입력: MEMB_CD, APP_CD, REQUEST_OFFSET, LIMIT_CNT, FILTER_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R028.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-HIST-10-20-10-S-e11 / 이동unresolved: ent_bp_aflt_deliv.act / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 전체 / 앵커: HIT-HIST-10-20-10-S-e12 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 사전예약 / 앵커: HIT-HIST-10-20-10-S-e13 / 해설: 사전예약
- 구분: 기능 / 좌표: - / 라벨: 포장 / 앵커: HIT-HIST-10-20-10-S-e14 / 해설: 포장
- 구분: 기능 / 좌표: - / 라벨: 로봇배송 / 앵커: HIT-HIST-10-20-10-S-e15 / 해설: 로봇배송
- 구분: 기능 / 좌표: - / 라벨: 딜리버리 / 앵커: HIT-HIST-10-20-10-S-e16 / 해설: 딜리버리
- 구분: 기능 / 좌표: - / 라벨: 도난신고 / 앵커: HIT-HIST-10-20-10-S-e17 / 해설: 도난신고
- 구분: 기능 / 좌표: - / 라벨: 팝업닫기 / 앵커: HIT-HIST-10-20-10-S-e18 / 해설: 팝업닫기
- 구분: 기능 / 좌표: - / 라벨: 전체 상태 / 앵커: HIT-HIST-10-20-10-S-e19 / 해설: 전체 상태
- 구분: 기능 / 좌표: - / 라벨: 주문하러 가기 / 앵커: HIT-HIST-10-20-10-S-e20 / 해설: 주문하러 가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
