--- 꼬리표 ---
id: MCH-KSQR-40-S / system: MCH / 기능: 가맹점관리 > KSQR 온라인 가맹점신청 > KSQR온가신등록_가맹점정보 / 과업: []

--- 화면명세 ---
화면명: KSQR온가신등록_가맹점정보
목적: KSQR온가신등록_가맹점정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 온라인가맹점신청 업종코드 조회 화면 / 처리: 읽기 / 테이블: TB_CTGRY_CODE / 입력: KEYWORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_det_info_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_det_info_r001_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R001.xml:10
- 요소: MCH-KSQR-40-S-e28 / 업무: KSQR온가신등록_가맹점정보_등록(act) / 처리: 읽기·쓰기 / 테이블: TB_KSQR_AFLT_APY / 입력: CI, APY_NM, 휴대폰번호, APY_REPR_YN, 처리상태, APPR_ST, APY_DT, APY_TM, 사업자번호, SHOP_NM … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_det_info_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_det_info_u001_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_U001.xml:10
- 요소: MCH-KSQR-40-S-e25, MCH-KSQR-40-S-e37 / 업무: post_0002_01.act / 미확인: WSVC 없음 / 근거: post_0002_01.act (WSVC 없음)

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-40-S-e23 / 이동unresolved: uf_back() / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=sel_mail / 라벨: 직접입력 / 앵커: MCH-KSQR-40-S-e24 / 해설: 직접입력
- 구분: 기능 / 좌표: id=post_btn / 라벨: 주소 검색 / 앵커: MCH-KSQR-40-S-e25 / 해설: 주소 검색
- 구분: 기능 / 좌표: - / 라벨: 업종코드 검색 / 앵커: MCH-KSQR-40-S-e26 / 해설: 업종코드 검색
- 구분: 기능 / 좌표: id=sel_van / 라벨: 사용 중인 VAN사 선택 / 앵커: MCH-KSQR-40-S-e27 / 해설: 사용 중인 VAN사 선택
- 구분: 기능 / 좌표: id=next_btn / 라벨: 저장 후 다음 단계 / 앵커: MCH-KSQR-40-S-e28 / 해설: 저장 후 다음 단계
- 구분: 기능 / 좌표: - / 라벨: 종료하기 / 앵커: MCH-KSQR-40-S-e29 / 해설: 종료하기
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: MCH-KSQR-40-S-e30 / 해설: 검색
- 구분: 기능 / 좌표: id=upjong_sel / 라벨: 확인 / 앵커: MCH-KSQR-40-S-e31 / 해설: 확인
- 구분: 항목 / 좌표: id=check_box / 라벨: check_box / 앵커: MCH-KSQR-40-S-e32 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_repr_nm / 라벨: 가맹점주(점장) 이름 입력 / 앵커: MCH-KSQR-40-S-e33 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_repr_mob_no / 라벨: 숫자만 입력 / 앵커: MCH-KSQR-40-S-e34 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_repr_email / 라벨: 이메일 입력 / 앵커: MCH-KSQR-40-S-e35 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_nm / 라벨: 가맹점 이름 입력 / 앵커: MCH-KSQR-40-S-e36 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_zip_cd / 라벨: 우편번호 / 앵커: MCH-KSQR-40-S-e37 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_addrs / 라벨: aflt_addrs / 앵커: MCH-KSQR-40-S-e38 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=aflt_addrs2 / 라벨: 상세주소 입력 / 앵커: MCH-KSQR-40-S-e39 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=card_yes / 라벨: card_yes / 앵커: MCH-KSQR-40-S-e40 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=card_no / 라벨: card_no / 앵커: MCH-KSQR-40-S-e41 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=zero_yes / 라벨: zero_yes / 앵커: MCH-KSQR-40-S-e42 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=zero_no / 라벨: zero_no / 앵커: MCH-KSQR-40-S-e43 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=upjong / 라벨: 업종명 또는 업종코드 입력 / 앵커: MCH-KSQR-40-S-e44 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ksqr/reg/ksqr_det_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
