--- 꼬리표 ---
id: EXW-BRWV-20-10-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 웹뷰 상품권 내역 메인 > 브랜드상품권 이용해지 화면 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 이용해지 화면
목적: 브랜드상품권 이용해지 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-20-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API 거래승인번호검증 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: PASSWORD_ID, MEMB_CD, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_PWD_CHECK_R001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_PWD_CHECK_R001_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10
- 요소: 화면 / 업무: 공통 회원 탈퇴 처리 actionc / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_MNY, TB_MNY_TRAN_MST, TB_ZEROPAY_TRAN, TB_AFFILIATION_MY … / 입력: 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.cfg_webview_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/cfg_webview_d001_act.jsp:48 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_cancel / 라벨: 이용 해지 / 앵커: EXW-BRWV-20-10-S-e02 / 해설: 이용 해지
- 구분: 기능 / 좌표: id=onKeyboardBtn / 라벨: 거래승인번호 입력하기 / 앵커: EXW-BRWV-20-10-S-e03 / 해설: 거래승인번호 입력하기
- 구분: 항목 / 좌표: id=agree_check / 라벨: agree_check / 앵커: EXW-BRWV-20-10-S-e04 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_cancel_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
