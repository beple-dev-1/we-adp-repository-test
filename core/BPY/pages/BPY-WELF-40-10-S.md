--- 꼬리표 ---
id: BPY-WELF-40-10-S / system: BPY / 기능: 비플페이 앱 > 기업복지·복지포인트 > 복지포인트 이용정보 조회 > 복지포인트 이관 요청 화면 / 과업: []

--- 화면명세 ---
화면명: 복지포인트 이관 요청 화면
목적: 복지포인트 이관 요청 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-WELF-40-S

--- 업무 ---
- 요소: 화면 / 업무: 복지포인트 이관 요청 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_WLFE_POINT_TRANS_HIST, TB_WLFE_POINT_TRANS_SUM / 입력: 이용기관구분, 이용기관ID, 기관명, 사업자번호, 카드번호, 은행코드, 계좌번호, 한도, 한도일련번호, 한도명 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.welfare_point_transfer_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/welfare_point_transfer_c001_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WLFE_POINT_TRANS_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WLFE_POINT_TRANS_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U009.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 공유하기 / 앵커: BPY-WELF-40-10-S-e09 / 이동modal: popup-select--share / 해설: popup-select--share 팝업 열기
- 구분: 기능 / 좌표: - / 라벨: 툴 팁 버튼 / 앵커: BPY-WELF-40-10-S-e11 / 해설: 툴 팁 버튼
- 구분: 기능 / 좌표: id=btn_check / 라벨: 확인 / 앵커: BPY-WELF-40-10-S-e14 / 해설: 확인
- 구분: 기능 / 좌표: id=btn_mall / 라벨: 여가선용몰 바로가기 / 앵커: BPY-WELF-40-10-S-e15 / 해설: 여가선용몰 바로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/welfare_point_transfer_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
