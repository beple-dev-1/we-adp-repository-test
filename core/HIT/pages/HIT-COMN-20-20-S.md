--- 꼬리표 ---
id: HIT-COMN-20-20-S / system: HIT / 기능: 힛플러스 > 공통 > 알림·공지 > 공지사항 목록 / 과업: []

--- 화면명세 ---
화면명: 공지사항 목록
목적: 공지사항 목록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 공지사항 목록 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG / 입력: PAGE_SIZE, 페이지, TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_000001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R001.xml:10
- 요소: 화면 / 업무: 공지사항 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG, TB_EVNT_MNG, TB_ZEROPAY_TRAN, TB_FRANCHISE_MNG, TB_MEMBER, TB_MEMBER_APP / 입력: 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_000002_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EVNT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R004.xml:10
- 요소: 화면 / 업무: 제로페이 상품권 플랫폼 분기 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_MEMBER, TB_MEMBER_APP / 입력: CHNL_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_multi.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_multi_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U023.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=share_close / 라벨: 팝업닫기 / 앵커: HIT-COMN-20-20-S-e05 / 해설: 팝업닫기
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: HIT-COMN-20-20-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=share_btn / 라벨: 공유하기 / 앵커: HIT-COMN-20-20-S-e07 / 해설: 공유하기
- 구분: 기능 / 좌표: - / 라벨: URL복사 / 앵커: HIT-COMN-20-20-S-e08 / 해설: URL복사

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/main/ent_notice_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
