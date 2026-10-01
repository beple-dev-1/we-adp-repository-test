--- 꼬리표 ---
id: MCH-KSQR-50-S / system: MCH / 기능: 가맹점관리 > KSQR 온라인 가맹점신청 > KSQR온가신등록_사장님정보등록 / 과업: []

--- 화면명세 ---
화면명: KSQR온가신등록_사장님정보등록
목적: KSQR온가신등록_사장님정보등록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: MCH-KSQR-50-S-e07 / 업무: KSQR온가신등록_사장님정보등록(act) / 처리: 읽기·쓰기 / 테이블: TB_KSQR_AFLT_APY / 입력: CI, APY_NM, 휴대폰번호, APY_REPR_YN, 처리상태, APPR_ST, APY_DT, APY_TM, 사업자번호, SHOP_NM … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_repr_info_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_repr_info_u001_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_U001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: MCH-KSQR-50-S-e06 / 이동unresolved: uf_back() / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=next_btn / 라벨: 저장 후 다음 단계 / 앵커: MCH-KSQR-50-S-e07 / 해설: 저장 후 다음 단계
- 구분: 항목 / 좌표: id=repr_nm / 라벨: 대표자 이름 입력 / 앵커: MCH-KSQR-50-S-e08 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=repr_brt_dt / 라벨: 8자리 숫자만 입력 / 앵커: MCH-KSQR-50-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=repr_mob_no / 라벨: 숫자만 입력 / 앵커: MCH-KSQR-50-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ksqr/reg/ksqr_repr_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
