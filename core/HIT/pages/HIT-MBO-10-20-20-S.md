--- 꼬리표 ---
id: HIT-MBO-10-20-20-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 딜리버리 장소 관리 > 세부 장소 / 과업: []

--- 화면명세 ---
화면명: 세부 장소
목적: 세부 장소 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 배송지 상세장소 (화면) / 처리: 읽기 / 테이블: TB_CAFETERIA_DELV_DETAIL, TB_CAFETERIA_DELV / 입력: 직원상태, DELV_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10
- 요소: 화면 / 업무: 배송지 상세장소 생성 / 처리: 쓰기 / 테이블: TB_CAFETERIA_DELV_DETAIL / 입력: DELV_SEQ, DELV_DETAIL_SEQ, DELV_DETAIL_NM, USE_YN, 직원상태, ORDER_BY, REG_USER, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_c001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_C001.xml:10
- 요소: 화면 / 업무: 배송지 상세장소 삭제 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_DELV_DETAIL / 입력: DELV_SEQ, DELV_DETAIL_SEQ, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_d001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_U002.xml:10
- 요소: 화면 / 업무: 배송지 상세장소 수정 / 처리: 쓰기 / 테이블: TB_CAFETERIA_DELV_DETAIL / 입력: REC, DELV_DETAIL_NM, UPD_USER, DELV_SEQ, DELV_DETAIL_SEQ, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_u001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_U002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: + 추가하기 / 앵커: HIT-MBO-10-20-20-S-e03 / 해설: + 추가하기
- 구분: 항목 / 좌표: id=filter-status / 라벨: filter-status / 앵커: HIT-MBO-10-20-20-S-e04 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
