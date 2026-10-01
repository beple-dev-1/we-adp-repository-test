--- 꼬리표 ---
id: BPY-COMN-20-30-10-S / system: BPY / 기능: 비플페이 앱 > 공통 > 알림·공지 > 공지사항 목록 > 공지사항 상세보기 / 과업: []

--- 화면명세 ---
화면명: 공지사항 상세보기
목적: 공지사항 상세보기 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-COMN-20-30-S

--- 업무 ---
- 요소: 화면 / 업무: 공지사항 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG, TB_EVNT_MNG, TB_ZEROPAY_TRAN, TB_FRANCHISE_MNG, TB_MEMBER, TB_MEMBER_APP / 입력: 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_000002_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EVNT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R004.xml:10
- 요소: BPY-COMN-20-30-10-S-e02 / 업무: 공지사항 목록 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_list_act.jsp:15

--- 정의 ---
- 구분: 기능 / 좌표: id=back_btn / 라벨: 닫기 / 앵커: BPY-COMN-20-30-10-S-e02 / 해설: 닫기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/notice_detail_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
