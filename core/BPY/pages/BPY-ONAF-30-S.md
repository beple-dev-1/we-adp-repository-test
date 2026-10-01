--- 꼬리표 ---
id: BPY-ONAF-30-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 비대면결제 메인 / 과업: []

--- 화면명세 ---
화면명: 비대면결제 메인
목적: 비대면결제 메인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 비대면 결제 가맹점 즐겨찾기 등록/해제 / 처리: 미확인 / 입력: USER_NO, APP_CD, AFLT_ID, BOOKMARK_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.GATEWAY_044.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/GATEWAY_044_act.jsp:27
- 요소: 화면 / 업무: 비대면결제 약관동의 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_agr.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_agr_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONAF_AGR_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 상위 메뉴로 이동 / 앵커: BPY-ONAF-30-S-e07 / 해설: 상위 메뉴로 이동
- 구분: 기능 / 좌표: id=go_home / 라벨: 비대면 결제 닫기 / 앵커: BPY-ONAF-30-S-e08 / 해설: 비대면 결제 닫기
- 구분: 기능 / 좌표: id=top_tab_qr / 라벨: 바코드/QR / 앵커: BPY-ONAF-30-S-e09 / 해설: 바코드/QR
- 구분: 기능 / 좌표: - / 라벨: 비대면 결제 / 앵커: BPY-ONAF-30-S-e10 / 해설: 비대면 결제
- 구분: 기능 / 좌표: id=top_tab_qr_img / 라벨: QR이미지 / 앵커: BPY-ONAF-30-S-e11 / 해설: QR이미지
- 구분: 기능 / 좌표: - / 라벨: 비대면 매장 검색 / 앵커: BPY-ONAF-30-S-e12 / 해설: 비대면 매장 검색

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_onaf2_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
