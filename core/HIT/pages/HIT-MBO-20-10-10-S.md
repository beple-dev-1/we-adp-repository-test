--- 꼬리표 ---
id: HIT-MBO-20-10-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 다과 관리 > 다과 신청 내역 > 다과 신청 내역 / 과업: []

--- 화면명세 ---
화면명: 다과 신청 내역
목적: 다과 신청 내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 다과주문관리 상세_메모작성 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_MEMO, TB_MEMBER / 입력: FRSH_BRK_SEQ, MEMO_SEQ, MEMO_TYPE, 내용, 회원코드, ADM_USER, ADM_USER_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_c001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_C002.xml:10
- 요소: 화면 / 업무: 다과관리 상세 조회 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP, TB_MEMBER, TB_WORK_CD_MNG, TB_ENT_CORP_SITE, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_MENU … / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_r001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MENU_R001.xml:10
- 요소: 화면 / 업무: 다과주문관리 상세 메모 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_ENT_FRSH_BRK_MEMO / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_r002_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R001.xml:10
- 요소: 화면 / 업무: 다과주문관리 상세_상태변경 / 처리: 쓰기 / 테이블: TB_ENT_FRSH_BRK / 입력: 처리상태, CONFIRM_AMT, FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_det_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_det_u001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U004.xml:10
- 요소: 화면 / 업무: 다과주문관리 메인 조회 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_CORP, TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_FRSH_BRK, TB_MEMBER / 입력: 시작일자, 종료일자, 처리상태, SITE_CD, 검색어, 페이지, PAGE_SIZE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_list_r001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R008.xml:10
- 요소: 화면 / 업무: 사업장 정보조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_list_r002_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R003.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 다과 신청 내역 / 앵커: HIT-MBO-20-10-10-S-e13 / 이동: HIT-MBO-20-10-10-S / 해설: 다과 신청 내역
- 구분: 이동 / 좌표: - / 라벨: 다과 메뉴 관리 / 앵커: HIT-MBO-20-10-10-S-e14 / 이동: HIT-MBO-20-20-10-S / 해설: 다과 메뉴 관리
- 구분: 이동 / 좌표: - / 라벨: 카테고리 / 앵커: HIT-MBO-20-10-10-S-e15 / 이동: HIT-MBO-20-20-10-S / 해설: 카테고리
- 구분: 이동 / 좌표: - / 라벨: 메뉴 / 앵커: HIT-MBO-20-10-10-S-e16 / 이동: HIT-MBO-20-20-20-S / 해설: 메뉴
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MBO-20-10-10-S-e17 / 해설: 1개월
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MBO-20-10-10-S-e18 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MBO-20-10-10-S-e19 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MBO-20-10-10-S-e20 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MBO-20-10-10-S-e21 / 해설: last
- 구분: 항목 / 좌표: id=filter_proc_st / 라벨: filter_proc_st / 앵커: HIT-MBO-20-10-10-S-e22 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=filter_site_cd / 라벨: filter_site_cd / 앵커: HIT-MBO-20-10-10-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=filter_keyword / 라벨: 신청자명을 입력해 주세요 / 앵커: HIT-MBO-20-10-10-S-e24 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
