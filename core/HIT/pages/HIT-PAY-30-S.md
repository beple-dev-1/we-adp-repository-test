--- 꼬리표 ---
id: HIT-PAY-30-S / system: HIT / 기능: 힛플러스 > 결제 > 엔터프라이즈_식권제로페이 결제(보유식권 1개) / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_식권제로페이 결제(보유식권 1개)
목적: 엔터프라이즈_식권제로페이 결제(보유식권 1개) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈 주 충전수단 조회 화면 (화면) / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: CPLX_REF_URL, WACT_CPLX_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R005.xml:10
- 요소: 화면 / 업무: 엔터프라이즈_식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, TRX_TP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_meal_ticket_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_meal_ticket_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10

--- 정의 ---

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pay/ent_zero_meal_single_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
