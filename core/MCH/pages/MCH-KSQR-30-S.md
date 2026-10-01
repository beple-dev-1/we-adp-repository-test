--- 꼬리표 ---
id: MCH-KSQR-30-S / system: MCH / 기능: 가맹점관리 > KSQR 온라인 가맹점신청 > KSQR온가신등록_기본정보등록 / 과업: []

--- 화면명세 ---
화면명: KSQR온가신등록_기본정보등록
목적: KSQR온가신등록_기본정보등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: MCH-KSQR-30-S-e16 / 업무: KSQR온가신등록_기본정보등록(act) / 처리: 읽기·쓰기 / 테이블: TB_KSQR_AFLT_APY / 입력: 온라인 비플 가맹점 채번, SHOP_NM, CORP_NO, CI, APY_NM, 휴대폰번호, APY_REPR_YN, 처리상태, APPR_ST, APY_DT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_base_info_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_base_info_u001_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_U002.xml:10
- 요소: MCH-KSQR-30-S-e13, MCH-KSQR-30-S-e18 / 업무: post_0002_01.act / 미확인: WSVC 없음 / 근거: post_0002_01.act (WSVC 없음)

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-30-S-e12 / 이동unresolved: uf_back() / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=post_btn / 라벨: 주소 검색 / 앵커: MCH-KSQR-30-S-e13 / 해설: 주소 검색
- 구분: 기능 / 좌표: id=sel_trig / 라벨: 직전 사업연도 매출액 선택 / 앵커: MCH-KSQR-30-S-e14 / 해설: 직전 사업연도 매출액 선택
- 구분: 기능 / 좌표: id=sel_trig2 / 라벨: 사업자 유형 선택 / 앵커: MCH-KSQR-30-S-e15 / 해설: 사업자 유형 선택
- 구분: 기능 / 좌표: id=next_btn / 라벨: 저장 후 다음 단계 / 앵커: MCH-KSQR-30-S-e16 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: id=shop_nm / 라벨: 사업자등록증과 동일한 상호 입력 / 앵커: MCH-KSQR-30-S-e17 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=zip_cd / 라벨: 우편번호 / 앵커: MCH-KSQR-30-S-e18 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=addrs / 라벨: addrs / 앵커: MCH-KSQR-30-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=addrs2 / 라벨: 상세주소 입력 / 앵커: MCH-KSQR-30-S-e20 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=const_worker_cnt / 라벨: 숫자만 입력 / 앵커: MCH-KSQR-30-S-e21 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=corp_no / 라벨: 13자리 숫자만 입력 / 앵커: MCH-KSQR-30-S-e22 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ksqr/reg/ksqr_base_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
