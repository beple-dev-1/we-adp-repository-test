--- 꼬리표 ---
id: MCH-AFLT-10-10-10-S / system: MCH / 기능: 가맹점관리 > 온라인 가맹점신청 > 가맹점 신청메인 > 가맹점 신청안내 > 사업자번호 입력 / 과업: []

--- 화면명세 ---
화면명: 사업자번호 입력
목적: 사업자번호 입력 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-AFLT-10-10-S

--- 업무 ---
- 요소: MCH-AFLT-10-10-10-S-e10 / 업무: 사업자번호 검증 / 처리: 읽기 / 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_MNG / 입력: 사업자번호, 종사업장코드, SUB_BIZ_YN, APY_URL, MCP가맹점 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_bizno_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_bizno_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-AFLT-10-10-10-S-e09 / 이동: MCH-AFLT-10-10-S / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btnNext / 라벨: 다음 / 앵커: MCH-AFLT-10-10-10-S-e10 / 해설: 다음
- 구분: 항목 / 좌표: id=mate_pos_yn / 라벨: mate_pos_yn / 앵커: MCH-AFLT-10-10-10-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mcp_yn / 라벨: mcp_yn / 앵커: MCH-AFLT-10-10-10-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=apy_url / 라벨: apy_url / 앵커: MCH-AFLT-10-10-10-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=biz_no / 라벨: 사업자등록번호 숫자 10자리 입력 / 앵커: MCH-AFLT-10-10-10-S-e14 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=Y / 라벨: Y / 앵커: MCH-AFLT-10-10-10-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=N / 라벨: N / 앵커: MCH-AFLT-10-10-10-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_aflt_bizno_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
