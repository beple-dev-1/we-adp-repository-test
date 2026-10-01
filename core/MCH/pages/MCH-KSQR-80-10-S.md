--- 꼬리표 ---
id: MCH-KSQR-80-10-S / system: MCH / 기능: 가맹점관리 > KSQR 온라인 가맹점신청 > KSQR온가신등록 신청내역 > KSQR온가신등록_신청내역 상세 / 과업: []

--- 화면명세 ---
화면명: KSQR온가신등록_신청내역 상세
목적: KSQR온가신등록_신청내역 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KSQR-80-S

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: KSQR온가신등록 약관 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_agr.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_agr_act.jsp:25
- 요소: 화면 / 업무: KSQR온가신등록_사업자번호 조회(act) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY, TB_BP_AFLT_MNG / 입력: 사업자번호, 종사업장코드, SUB_BIZ_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_bizno_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_bizno_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10
- 요소: 화면 / 업무: KSQR온가신등록_신청내역 상세(act) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY, TB_BP_AFLT_MNG, TB_AFLT_MST, TB_KSQR_AFLT_APY_EXM, TB_REL_AFLT_MST, TB_AFLT_SPCL_PARTNER_RATE … / 입력: 온라인 비플 가맹점 채번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_detail_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_detail_r001_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R028.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_EXM_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_REL_AFLT_MST_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SPCL_PARTNER_RATE_R002.xml:10
- 요소: 화면 / 업무: KSQR온가신등록 신청내역 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_list_act.jsp:18

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-80-10-S-e07 / 이동: MCH-KSQR-80-S / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-80-10-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 확인 / 앵커: MCH-KSQR-80-10-S-e09 / 해설: 확인
- 구분: 항목 / 좌표: id=apy_seq / 라벨: apy_seq / 앵커: MCH-KSQR-80-10-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ci / 라벨: ci / 앵커: MCH-KSQR-80-10-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=ac / 라벨: ac / 앵커: MCH-KSQR-80-10-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ksqr/main/ksqr_detail_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
