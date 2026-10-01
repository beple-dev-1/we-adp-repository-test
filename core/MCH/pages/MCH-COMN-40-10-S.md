--- 꼬리표 ---
id: MCH-COMN-40-10-S / system: MCH / 기능: 가맹점관리 > 공통 > 공지 > 온라인가맹점신청 공지사항 / 과업: []

--- 화면명세 ---
화면명: 온라인가맹점신청 공지사항
목적: 온라인가맹점신청 공지사항 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 공지사항 목록 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG / 입력: PAGE_SIZE, 페이지 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_notice_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_notice_list_r001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R001.xml:10
- 요소: 화면 / 업무: 공지사항 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG / 입력: 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_notice_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_notice_list_r002_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10
- 요소: 화면 / 업무: 제로페이 상품권 플랫폼 분기 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_MEMBER, TB_MEMBER_APP / 입력: CHNL_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_multi.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_multi_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U023.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back_btn / 라벨: 상위메뉴로 이동 / 앵커: MCH-COMN-40-10-S-e02 / 해설: 상위메뉴로 이동

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_aflt_notice_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
