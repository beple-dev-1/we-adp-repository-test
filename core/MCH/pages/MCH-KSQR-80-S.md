--- 꼬리표 ---
id: MCH-KSQR-80-S / system: MCH / 기능: 가맹점관리 > KSQR 온라인 가맹점신청 > KSQR온가신등록 신청내역 / 과업: []

--- 화면명세 ---
화면명: KSQR온가신등록 신청내역
목적: KSQR온가신등록 신청내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: KSQR온가신등록_기본정보등록 (화면) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY / 입력: 온라인 비플 가맹점 채번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_base_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_base_info_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10
- 요소: 화면 / 업무: KSQR온가신등록_최종확인 (화면) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY, TB_KSQR_AFLT_APY_DOC, TB_CTGRY_CODE / 입력: 온라인 비플 가맹점 채번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_confirm.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_confirm_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_DOC_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
- 요소: 화면 / 업무: KSQR온가신등록_가맹점정보 (화면) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY, TB_CTGRY_CODE / 입력: 온라인 비플 가맹점 채번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_det_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_det_info_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
- 요소: 화면 / 업무: KSQR온가신등록_신청내역 상세 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_detail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_detail_act.jsp:25
- 요소: 화면 / 업무: KSQR온가신등록 신청내역_조회2 / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY / 입력: CI / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_list_r002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R003.xml:10
- 요소: 화면 / 업무: KSQR온가신등록_사장님정보등록 (화면) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY / 입력: 온라인 비플 가맹점 채번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_repr_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_repr_info_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10
- 요소: 화면 / 업무: KSQR온가신등록_정산정보 (화면) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY / 입력: 온라인 비플 가맹점 채번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_settle_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_settle_info_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-80-S-e04 / 이동: MCH-KSQR-10-S / 해설: 뒤로가기
- 구분: 항목 / 좌표: id=ci / 라벨: ci / 앵커: MCH-KSQR-80-S-e05 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ac / 라벨: ac / 앵커: MCH-KSQR-80-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ksqr/main/ksqr_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
