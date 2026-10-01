--- 꼬리표 ---
id: BPY-COMN-20-30-S / system: BPY / 기능: 비플페이 앱 > 공통 > 알림·공지 > 공지사항 목록 / 과업: []

--- 화면명세 ---
화면명: 공지사항 목록
목적: 공지사항 목록 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 푸쉬/생체인증 설정 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP / 입력: 푸쉬등록여부, PUSH_APR_NOTI_YN, MRKT_AGR_YN, 생체인증설정여부, GIFT_CERT_PUSH_YN, GIFT_PUSH_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CFG_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/CFG_000004_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- 요소: 화면 / 업무: 농축산소비쿠폰이벤트 약관동의 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: 이벤트약관동의여부, 이벤트약관동의여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000004_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- 요소: 화면 / 업무: 공지사항 목록 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG / 입력: PAGE_SIZE, 페이지, TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_000001_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R001.xml:10
- 요소: 화면 / 업무: 공지사항 조회 / 처리: 읽기 / 테이블: TB_NOTICE_MNG, TB_EVNT_MNG, TB_ZEROPAY_TRAN, TB_FRANCHISE_MNG, TB_MEMBER, TB_MEMBER_APP / 입력: 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_000002_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EVNT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R004.xml:10
- 요소: 화면 / 업무: 출석체크하기 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_ACCOUNT, TB_ATTEND_MNG / 입력: NOTI_SEQ, EVENT, 대상이벤트ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000003_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R023.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_R002.xml:10
- 요소: 화면 / 업무: 출석횟수학인 / 처리: 읽기 / 테이블: TB_ATTEND_MNG / 입력: NOTI_SEQ, EVENT, FILTER_DATE, 대상이벤트ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000004_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_R001.xml:10
- 요소: 화면 / 업무: 출석체크 이벤트 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP, TB_ATTEND_MNG, TB_NOTICE_MNG / 입력: NOTI_SEQ, 내용, 마켓팅 정보 수신동의여부, EVENT_KEY, EVENT_VALUE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000005_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10
- 요소: 화면 / 업무: 브랜드상품권 구맥 조회 (이벤트) / 처리: 읽기 / 테이블: TB_BRND_TRAN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000006_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R005.xml:10
- 요소: 화면 / 업무: 스탬프 이벤트 참여하기 / 처리: 쓰기 / 테이블: TB_ATTEND_MNG, TB_KNB_STAMP / 입력: NOTI_SEQ, 내용 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.knb_stamp_agr.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/knb_stamp_agr_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KNB_STAMP_C001.xml:10
- 요소: 화면 / 업무: 스탬프 확인하기 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.knb_stamp_chk.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/knb_stamp_chk_act.jsp:20
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
- 요소: 화면 / 업무: 공지사항 상세(모바일 온누리 결제내역 조회) / 처리: 미확인 / 입력: 종료일자, 시작일자 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_detail_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_detail_r001_act.jsp:29
- 요소: 화면 / 업무: 공지사항 목록 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_list_act.jsp:15
- 요소: 화면 / 업무: 제로페이 상품권 플랫폼 분기 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_MEMBER, TB_MEMBER_APP / 입력: CHNL_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_multi.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_multi_act.jsp:19 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U023.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back_btn / 라벨: 상위메뉴로 이동 / 앵커: BPY-COMN-20-30-S-e02 / 해설: 상위메뉴로 이동

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/notice_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
