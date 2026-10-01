--- 꼬리표 ---
id: BPY-ONAF-30-20-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 비대면결제 메인 > 비대면결제 약관동의 / 과업: []

--- 화면명세 ---
화면명: 비대면결제 약관동의
목적: 비대면결제 약관동의 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-ONAF-30-S

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: BPY-ONAF-30-20-S-e14 / 업무: 비대면결제 약관동의 변경 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: ONAF_AGR_YN, 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_agr_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_agr_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-ONAF-30-20-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=go_home / 라벨: 페이지나가기 / 앵커: BPY-ONAF-30-20-S-e09 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=top_tab_qr / 라벨: 바코드/QR / 앵커: BPY-ONAF-30-20-S-e10 / 해설: 바코드/QR
- 구분: 기능 / 좌표: - / 라벨: 비대면 결제 / 앵커: BPY-ONAF-30-20-S-e11 / 해설: 비대면 결제
- 구분: 기능 / 좌표: id=top_tab_qr_img / 라벨: QR이미지 / 앵커: BPY-ONAF-30-20-S-e12 / 해설: QR이미지
- 구분: 기능 / 좌표: - / 라벨: 동의하지않음 / 앵커: BPY-ONAF-30-20-S-e13 / 해설: 동의하지않음
- 구분: 기능 / 좌표: id=upd_onafyn / 라벨: 동의함 / 앵커: BPY-ONAF-30-20-S-e14 / 해설: 동의함

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_onaf2_agr_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
