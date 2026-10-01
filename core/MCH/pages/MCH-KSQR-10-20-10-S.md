--- 꼬리표 ---
id: MCH-KSQR-10-20-10-S / system: MCH / 기능: 가맹점관리 > KSQR 온라인 가맹점신청 > KSQR온가신등록 메인 > KSQR온가신등록 안내 > KSQR온가신등록_사업자번호 입력 / 과업: []

--- 화면명세 ---
화면명: KSQR온가신등록_사업자번호 입력
목적: KSQR온가신등록_사업자번호 입력 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MCH-KSQR-10-20-S

--- 업무 ---
- 요소: 화면 / 업무: KSQR온가신등록 약관 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_agr.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_agr_act.jsp:25
- 요소: MCH-KSQR-10-20-10-S-e07 / 업무: KSQR온가신등록_사업자번호 조회(act) / 처리: 읽기 / 테이블: TB_KSQR_AFLT_APY, TB_BP_AFLT_MNG / 입력: 사업자번호, 종사업장코드, SUB_BIZ_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_bizno_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_bizno_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10
- 요소: 화면 / 업무: KSQR온가신 본인인증 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_cert.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_cert_act.jsp:17
- 요소: 화면 / 업무: KSQR온가신등록 안내 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_info_act.jsp:25

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-10-20-10-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btnNext / 라벨: 다음 / 앵커: MCH-KSQR-10-20-10-S-e07 / 해설: 다음
- 구분: 항목 / 좌표: id=biz_no / 라벨: 사업자등록번호 숫자 10자리 입력 / 앵커: MCH-KSQR-10-20-10-S-e08 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=Y / 라벨: Y / 앵커: MCH-KSQR-10-20-10-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=N / 라벨: N / 앵커: MCH-KSQR-10-20-10-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ksqr/reg/ksqr_bizno_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
