--- 꼬리표 ---
id: MCH-AFLT-80-S / system: MCH / 기능: 가맹점관리 > 온라인 가맹점신청 > 신청내역 메인 / 과업: []

--- 화면명세 ---
화면명: 신청내역 메인
목적: 신청내역 메인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 온라인 가맹점신청 -> 기본정보입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_base_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_base_info_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: 화면 / 업무: 온라인가맹점신청 최종확인 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_DOC, TB_BP_AFLT_APY_TOKEN, TB_CTGRY_CODE / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_confirm.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_confirm_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_DOC_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
- 요소: 화면 / 업무: 신청내역 심사중 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_det.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_det_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: 화면 / 업무: 가맹점 정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN, TB_CTGRY_CODE / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_det_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_det_info_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
- 요소: 화면 / 업무: 신청내역 메인 / 처리: 읽기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: CI, AC, 도메인(서울페이:Y,비플페이:N) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_list_r002_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10
- 요소: 화면 / 업무: 사장님 정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_repr_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_repr_info_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- 요소: 화면 / 업무: 정산정보 입력 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_APY_TOKEN / 입력: APY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_settle_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_settle_info_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-AFLT-80-S-e05 / 이동: MCH-AFLT-10-S / 해설: 뒤로가기
- 구분: 항목 / 좌표: id=mate_pos_yn / 라벨: mate_pos_yn / 앵커: MCH-AFLT-80-S-e06 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ci / 라벨: ci / 앵커: MCH-AFLT-80-S-e07 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ac / 라벨: ac / 앵커: MCH-AFLT-80-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_aflt_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
