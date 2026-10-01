--- 꼬리표 ---
id: BPY-ONAF-30-10-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 비대면결제 메인 > 비대면결제매장 상세정보 / 과업: []

--- 화면명세 ---
화면명: 비대면결제매장 상세정보
목적: 비대면결제매장 상세정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-ONAF-30-S

--- 업무 ---
- 요소: 화면 / 업무: 비대면 결제 가맹점 즐겨찾기 등록/해제 / 처리: 미확인 / 입력: USER_NO, APP_CD, AFLT_ID, BOOKMARK_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.GATEWAY_044.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/GATEWAY_044_act.jsp:27
- 요소: 화면 / 업무: 비대면 최근가맹점 조회 (화면) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ONLN_AFF_MNG, UPSERT, TB_AFFILIATION_QR, TB_MEMBER_AFLT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_aff_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_aff_tran_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 상위 메뉴로 이동 / 앵커: BPY-ONAF-30-10-S-e08 / 해설: 상위 메뉴로 이동
- 구분: 기능 / 좌표: - / 라벨: 즐겨찾기 / 앵커: BPY-ONAF-30-10-S-e09 / 해설: 즐겨찾기
- 구분: 기능 / 좌표: id=info_tab / 라벨: 기본정보 / 앵커: BPY-ONAF-30-10-S-e10 / 해설: 기본정보
- 구분: 기능 / 좌표: id=qr_tab / 라벨: QR정보 / 앵커: BPY-ONAF-30-10-S-e11 / 해설: QR정보
- 구분: 기능 / 좌표: id=tran_tab / 라벨: 결제내역 / 앵커: BPY-ONAF-30-10-S-e12 / 해설: 결제내역
- 구분: 기능 / 좌표: - / 라벨: 전화하기 / 앵커: BPY-ONAF-30-10-S-e13 / 해설: 전화하기
- 구분: 기능 / 좌표: id=submit_btn / 라벨: 결제하기 / 앵커: BPY-ONAF-30-10-S-e14 / 해설: 결제하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_onaf2_aff_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
