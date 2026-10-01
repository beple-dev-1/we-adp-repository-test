--- 꼬리표 ---
id: HIT-MLPC-40-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 주문/도난 내역 / 과업: []

--- 화면명세 ---
화면명: 주문/도난 내역
목적: 주문/도난 내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: PC 관리자 주문/도난 내역 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_MEMBER, TB_BP_AFLT_MY, TB_MEMBER_ENT_APP / 입력: STR_DT, END_DT, ORDER_FORM_TP, ORDER_TYPE, SEARCH, PAGE, PAGE_SIZE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_bo_odr_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_pc_bo_odr_list_r001_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R005.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=orderForm / 라벨: 전체 / 앵커: HIT-MLPC-40-S-e06 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 검색하기 / 앵커: HIT-MLPC-40-S-e07 / 해설: 검색하기
- 구분: 항목 / 좌표: id=strDt / 라벨: strDt / 앵커: HIT-MLPC-40-S-e08 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=endDt / 라벨: endDt / 앵커: HIT-MLPC-40-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=searchNm / 라벨: 직원명, 매장명, 메뉴명, 주문번호 등을 검색해 주세요. / 앵커: HIT-MLPC-40-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pcbo/ent_pc_bo_odr_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
