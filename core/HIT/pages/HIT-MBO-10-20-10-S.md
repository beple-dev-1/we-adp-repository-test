--- 꼬리표 ---
id: HIT-MBO-10-20-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 딜리버리 장소 관리 > 장소 카테고리 / 과업: []

--- 화면명세 ---
화면명: 장소 카테고리
목적: 장소 카테고리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 장소카테고리 (화면) / 처리: 읽기 / 테이블: TB_CAFETERIA_DELV, TB_CAFETERIA_WORK_PLCE, TB_BP_AFLT_MY / 입력: DELV_NM, 비플가맹점순번, DELV_STATUS, WORK_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_WORK_PLCE_R002.xml:10
- 요소: 화면 / 업무: 장소카테고리 생성 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_DELV / 입력: DELV_NM, DELV_SEQ, ORDER_BY, REG_USER, 비플가맹점순번, WORK_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_c001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10
- 요소: 화면 / 업무: 장소카테고리/삭제 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_DELV, TB_CAFETERIA_DELV_DETAIL / 입력: DELV_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_d001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_U001.xml:10
- 요소: 화면 / 업무: 장소카테고리/수정 / 처리: 읽기·쓰기 / 테이블: TB_CAFETERIA_DELV / 입력: ORDER_LIST, 거래번호, ORDER_BY, DELV_NM, WORK_CD, DELV_NM, ORDER_BY, DELV_SEQ, WORK_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_u001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10
- 요소: 화면 / 업무: 배송지 카테고리 수정(활성화) / 처리: 쓰기 / 테이블: TB_CAFETERIA_DELV / 입력: DELV_STATUS, UPD_USER, 비플가맹점순번, DELV_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_u002_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_U002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 아니오 / 앵커: HIT-MBO-10-20-10-S-e05 / 해설: 아니오
- 구분: 기능 / 좌표: id=btn-delete-catg / 라벨: 예 / 앵커: HIT-MBO-10-20-10-S-e06 / 해설: 예
- 구분: 기능 / 좌표: id=btn-reopen-pop / 라벨: 확인 / 앵커: HIT-MBO-10-20-10-S-e07 / 해설: 확인
- 구분: 항목 / 좌표: id=filter-status / 라벨: filter-status / 앵커: HIT-MBO-10-20-10-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
