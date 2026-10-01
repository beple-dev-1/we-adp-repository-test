--- 꼬리표 ---
id: HIT-MLPC-20-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 다과 신청 내역 (list) / 과업: []

--- 화면명세 ---
화면명: 다과 신청 내역 (list)
목적: 다과 신청 내역 (list) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 관리자_다과 신청 상태 변경 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK, TB_MEMBER, TB_ALARM_INFO, TB_MEMBER_APP, TB_ENT_FRSH_BRK_CORP / 입력: 처리상태, 회원코드, FRSH_BRK_SEQ, FRSH_BRK_SEQ_ARRAY, ADM_USER_NM, ADM_USER, ADM_USER_MEMB_CD, EMPL_NO, MANAGER_COMMENT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_det_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_det_u001_act.jsp:42 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R007.xml:10
- 요소: 화면 / 업무: 관리자_다과신청_내역조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_CORP, TB_ENT_CORP_SITE, TB_WORK_CD_MNG / 입력: 회원코드, PAGE_NUM, FILTER_DATE, FILTER_DATE_START, FILTER_DATE_END, FILTER_PROC_ST, FILTER_NM_NO, FILTER_SITE_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_list_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R004.xml:10
- 요소: 화면 / 업무: 관리자_다과신청_내역조회_엑셀다운 / 처리: 읽기 / 테이블: TB_MEMBER, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_CORP, TB_ENT_CORP_SITE, TB_WORK_CD_MNG / 입력: 회원코드, PAGE_NUM, FILTER_DATE, FILTER_DATE_START, FILTER_DATE_END, FILTER_PROC_ST, FILTER_NM_NO, FILTER_SITE_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_list_r002_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R005.xml:10
- 요소: 화면 / 업무: 다과신청 사업장 정보조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE / 입력: BSUN_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_frsh_brk_list_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_list_r003_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R003.xml:10
- 요소: 화면 / 업무: PC_다과신청_상세 / 처리: 읽기 / 테이블: TB_ENT_FRSH_BRK_CORP, TB_MEMBER, TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_FRSH_BRK, TB_ENT_FRSH_BRK_MENU / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_det_r001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_R002.xml:10
- 요소: 화면 / 업무: PC_다과 메모 등록 / 처리: 읽기·쓰기 / 테이블: TB_ENT_FRSH_BRK_MEMO, TB_MEMBER / 입력: FRSH_BRK_SEQ, MEMO_SEQ, MEMO_TYPE, 내용, 회원코드, ADM_USER, ADM_USER_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_memo_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_memo_c001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_C002.xml:10
- 요소: 화면 / 업무: PC_다과관리 메모 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_ENT_FRSH_BRK_MEMO / 입력: FRSH_BRK_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_frsh_brk_memo_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_frsh_brk_memo_r001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MEMO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MLPC-20-S-e09 / 해설: 1개월
- 구분: 기능 / 좌표: - / 라벨: 전체상태 / 앵커: HIT-MLPC-20-S-e10 / 해설: 전체상태
- 구분: 기능 / 좌표: - / 라벨: 전체 사업장 / 앵커: HIT-MLPC-20-S-e11 / 해설: 전체 사업장
- 구분: 기능 / 좌표: - / 라벨: 내려받기 / 앵커: HIT-MLPC-20-S-e12 / 해설: 내려받기
- 구분: 기능 / 좌표: - / 라벨: 상태변경 / 앵커: HIT-MLPC-20-S-e13 / 해설: 상태변경
- 구분: 기능 / 좌표: - / 라벨: 다과 신청 내역 / 앵커: HIT-MLPC-20-S-e14 / 해설: 다과 신청 내역
- 구분: 항목 / 좌표: id=FILTER_NM_NO / 라벨: 신청자명을 입력해 주세요. / 앵커: HIT-MLPC-20-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=allCheck / 라벨: allCheck / 앵커: HIT-MLPC-20-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pcbo/ent_bo_frsh_brk_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
