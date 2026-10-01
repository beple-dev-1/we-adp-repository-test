--- 꼬리표 ---
id: BPY-HIST-20-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 더보기>비대면결제내역>상세 / 과업: []

--- 화면명세 ---
화면명: 더보기>비대면결제내역>상세
목적: 더보기>비대면결제내역>상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 더보기>비대면결제내역>상세>댓글등록 / 처리: 쓰기 / 테이블: TB_ONLN_TRAN_RPY / 입력: TRX_DT, TRX_SEQ, RPY_TX / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_c001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_TRAN_RPY_C001.xml:10
- 요소: 화면 / 업무: 더보기>비대면결제내역>상세>댓글삭제 / 처리: 쓰기 / 테이블: TB_ONLN_TRAN_RPY / 입력: TRX_DT, TRX_SEQ, RPY_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_d001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_TRAN_RPY_D001.xml:10
- 요소: 화면 / 업무: 더보기>비대면결제내역>상세>댓글조회 / 처리: 읽기 / 테이블: TB_ONLN_TRAN_RPY / 입력: TRX_DT, TRX_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_r001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_TRAN_RPY_R001.xml:10
- 요소: 화면 / 업무: 더보기>비대면결제내역 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP / 입력: 가맹점ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_list_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- 요소: 화면 / 업무: MY가맹점 > 가맹점 인증 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: BPY-HIST-20-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=share_btn / 라벨: 공유하기 / 앵커: BPY-HIST-20-S-e06 / 해설: 공유하기
- 구분: 기능 / 좌표: id=rpy_btn / 라벨: 입력 / 앵커: BPY-HIST-20-S-e07 / 해설: 입력
- 구분: 항목 / 좌표: id=rpy_tx / 라벨: 메모 남기기 (최대 15글자) / 앵커: BPY-HIST-20-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/main_onaf_complete_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
