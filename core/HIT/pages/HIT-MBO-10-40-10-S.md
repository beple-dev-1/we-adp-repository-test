--- 꼬리표 ---
id: HIT-MBO-10-40-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 주문관리 > 주문집계 / 과업: []

--- 화면명세 ---
화면명: 주문집계
목적: 주문집계 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 배송지별 주문집계 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR, TB_BPPAY_TRAN, TB_CAFETERIA_DELV … / 입력: 비플가맹점순번, 제공날짜 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aggr_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aggr_det_r001_act.jsp:36 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R009.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 배송지별 주문집계 다운로드 (화면) / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR, TB_BPPAY_TRAN, TB_CAFETERIA_DELV … / 입력: 비플가맹점순번, 제공날짜 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aggr_det_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aggr_det_r002_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R009.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 주문집계 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR / 입력: 제공날짜, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aggr_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aggr_r001_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R008.xml:10
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 주문집계 다운로드 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR / 입력: 비플가맹점순번, 제공날짜 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aggr_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aggr_r002_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R008.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 조회 / 앵커: HIT-MBO-10-40-10-S-e04 / 해설: 조회
- 구분: 기능 / 좌표: id=btn_refresh / 라벨: 새로고침 / 앵커: HIT-MBO-10-40-10-S-e05 / 해설: 새로고침
- 구분: 항목 / 좌표: id=search_date / 라벨: search_date / 앵커: HIT-MBO-10-40-10-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_aggr_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
