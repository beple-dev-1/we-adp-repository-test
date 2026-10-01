--- 꼬리표 ---
id: MCH-AFMG-10-S / system: MCH / 기능: 가맹점관리 > 가맹점 관리 > 가맹점 인증 / 과업: []

--- 화면명세 ---
화면명: 가맹점 인증
목적: 가맹점 인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: MCH-AFMG-10-S-e09 / 업무: 가맹점관리 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_act.jsp:22
- 요소: 화면 / 업무: 다수 가맹점 선택 (화면) / 처리: 미확인 / 입력: BIZ_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_mult.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_mult_act.jsp:30
- 요소: 화면 / 업무: 가맹점리스트 > 가맹점 선택 / 처리: 미확인 / 입력: AFLT_ID, STATUS, PUSH_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_mult_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_mult_c001_act.jsp:29
- 요소: MCH-AFMG-10-S-e10 / 업무: 가맹점 인증 사업자 조회 / 처리: 미확인 / 입력: 대표자명, 사업자번호, 대표자 전화번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_prvt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_prvt_r001_act.jsp:29
- 요소: MCH-AFMG-10-S-e09 / 업무: 가맹점관리 > 가맹점정보관리 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_sel.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_sel_act.jsp:24
- 요소: MCH-AFMG-10-S-e09 / 업무: 가맹점관리 > 결제내역 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_tran_act.jsp:30

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: MCH-AFMG-10-S-e09 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=auth_btn / 라벨: 인증 / 앵커: MCH-AFMG-10-S-e10 / 해설: 인증
- 구분: 항목 / 좌표: id=REPR_NM / 라벨: REPR_NM / 앵커: MCH-AFMG-10-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=BIZ_NO / 라벨: 숫자 10자리 / 앵커: MCH-AFMG-10-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel1 / 라벨: tel1 / 앵커: MCH-AFMG-10-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel2 / 라벨: tel2 / 앵커: MCH-AFMG-10-S-e14 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel3 / 라벨: tel3 / 앵커: MCH-AFMG-10-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=tel4 / 라벨: tel4 / 앵커: MCH-AFMG-10-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/zero_aflt_prvt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
