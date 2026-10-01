--- 꼬리표 ---
id: HIT-MLPC-50-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 다과 예약 신청 (list) / 과업: []

--- 화면명세 ---
화면명: 다과 예약 신청 (list)
목적: 다과 예약 신청 (list) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: PC_다과신청_상세 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP, TB_MEMBER, TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_MENU / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_det_r001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R002.xml:10
- 요소: 화면 / 업무: 다과 신청 상태 변경 / 처리: 쓰기 / 테이블: TB_ENT_FRSH_BRK / 입력: 처리상태, 회원코드, FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_det_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_det_u001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U001.xml:10
- 요소: 화면 / 업무: PC_다과신청_내역조회 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_CORP, TB_MEMBER, TB_ENT_CORP_SITE / 입력: 회원코드, PAGE_NUM, FILTER_DATE, FILTER_DATE_START, FILTER_DATE_END, FILTER_PROC_ST / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_list_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R006.xml:10
- 요소: 화면 / 업무: PC_다과 메모 등록 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_MEMO, TB_MEMBER / 입력: FRSH_BRK_SEQ, MEMO_SEQ, MEMO_TYPE, 내용, 회원코드, ADM_USER, ADM_USER_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_memo_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_memo_c001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_C002.xml:10
- 요소: 화면 / 업무: PC_다과관리 메모 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_ENT_FRSH_BRK_MEMO / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_memo_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_memo_r001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R001.xml:10
- 요소: 화면 / 업무: PC_다과신청 업체 조회 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_menu_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_menu_r001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_R001.xml:10
- 요소: 화면 / 업무: PC_다과신청 업체 메뉴조회 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP_MENU / 입력: FRSH_BRK_CORP_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_menu_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_menu_r002_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_R002.xml:10
- 요소: 화면 / 업무: PC_다과신청 등록 / 처리: 쓰기 / 테이블: TB_ENT_FRSH_BRK, TB_MEMBER_ENT_APP, TB_ENT_FRSH_BRK_MENU / 입력: MENU_INFO_STR, FRSH_BRK_SEQ, FRSH_BRK_TITLE, 거래일자, MEMB_CNT, 내용, REQUIREMENT, 처리상태, 결제금액, 회원코드 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_settle_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_settle_c001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MENU_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MLPC-50-S-e05 / 해설: 1개월
- 구분: 기능 / 좌표: - / 라벨: 전체상태 / 앵커: HIT-MLPC-50-S-e06 / 해설: 전체상태
- 구분: 기능 / 좌표: - / 라벨: 다과 신청 / 앵커: HIT-MLPC-50-S-e07 / 해설: 다과 신청
- 구분: 기능 / 좌표: - / 라벨: 다과 예약 신청 / 앵커: HIT-MLPC-50-S-e08 / 해설: 다과 예약 신청

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
> 개인 메일 가림 1곳
