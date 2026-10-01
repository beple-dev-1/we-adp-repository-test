--- 꼬리표 ---
id: HIT-COMN-20-10-S / system: HIT / 기능: 힛플러스 > 공통 > 알림·공지 > 엔터프라이즈 - 알림함 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈 - 알림함
목적: 엔터프라이즈 - 알림함 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 주문내역(메인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_info_act.jsp:47
- 요소: 화면 / 업무: 브랜드상품권 구매내역 상세조회 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_info_act.jsp:36
- 요소: 화면 / 업무: 알림함 -> 상세 진입위한 단골상품권 상품권ID내역 조회(initOrderId) / 미확인: IDO 동적 이름 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.dangol_giftcard_tran_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/dangol/dangol_giftcard_tran_list_r002_act.jsp:35
- 요소: 화면 / 업무: 식수 신청내역 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_list_act.jsp:25
- 요소: 화면 / 업무: 식수 신청내역(본인) (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_list_act.jsp:25
- 요소: 화면 / 업무: 스마트오더 주문내역 상세 (화면) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_THEFT … / 입력: ORDER_DT, ORDER_ID, ORDER_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10
- 요소: 화면 / 업무: 메인 > 알림함 > 알림내역 조회 / 처리: 읽기 / 테이블: TB_ALARM_INFO, TB_NOTICE_MNG, TB_AFFILIATION_MNG, TB_PUSH_MSG, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP … / 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, PAGE_NO, AFLT_ID / 실패: 올바르지 않은 검색 문자가 포함되어있습니다.[0] / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_r001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_R001.xml:10
- 요소: 화면 / 업무: 알림 조회여부 업데이트 / 처리: 쓰기 / 테이블: TB_PUSH_MSG / 입력: TRX_DT, TRX_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_U003.xml:10
- 요소: 화면 / 업무: 알림함 모두읽기 처리 / 처리: 쓰기 / 테이블: TB_PUSH_MSG / 입력: ALARM_CTGR_TYPE_CD, 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_u002_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_U004.xml:10
- 요소: 화면 / 업무: 공지사항 목록 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.notice_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/notice_list_act.jsp:15

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 팝업닫기 / 앵커: HIT-COMN-20-10-S-e05 / 해설: 팝업닫기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-COMN-20-10-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=read_all / 라벨: 모두읽음 / 앵커: HIT-COMN-20-10-S-e07 / 해설: 모두읽음
- 구분: 기능 / 좌표: id=selected_alarm_type / 라벨: 전체 / 앵커: HIT-COMN-20-10-S-e08 / 해설: 전체

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/main/ent_main_notice2_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
