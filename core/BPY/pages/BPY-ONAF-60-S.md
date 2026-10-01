--- 꼬리표 ---
id: BPY-ONAF-60-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 통합비대면결제 약관동의 / 과업: []

--- 화면명세 ---
화면명: 통합비대면결제 약관동의
목적: 통합비대면결제 약관동의 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관디테일 조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_clause_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/bp_aflt_clause_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
- 요소: BPY-ONAF-60-S-e07 / 업무: 비대면결제 약관동의 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: ONAF_AGR_YN, LOC_AGR_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_agr_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_agr_u001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U013.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: [필수] 개인 정보 제3자 제공 이용 동의 / 앵커: BPY-ONAF-60-S-e05 / 해설: [필수] 개인 정보 제3자 제공 이용 동의
- 구분: 기능 / 좌표: - / 라벨: [필수] 위치정보 수집 및 이용 동의 / 앵커: BPY-ONAF-60-S-e06 / 해설: [필수] 위치정보 수집 및 이용 동의
- 구분: 기능 / 좌표: id=upd_onafyn / 라벨: 동의함 / 앵커: BPY-ONAF-60-S-e07 / 해설: 동의함
- 구분: 기능 / 좌표: - / 라벨: 동의하지 않음 / 앵커: BPY-ONAF-60-S-e08 / 해설: 동의하지 않음

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_one_onaf_agr_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
