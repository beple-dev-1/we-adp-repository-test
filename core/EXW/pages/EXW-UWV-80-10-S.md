--- 꼬리표 ---
id: EXW-UWV-80-10-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 회원탈퇴 > 이용해지 안내 / 과업: []

--- 화면명세 ---
화면명: 이용해지 안내
목적: 이용해지 안내 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 웹뷰 API - 이용해지 처리 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_ZEROPAY_TRAN, TB_MEMBER_MNY, TB_MNY_TRAN_MST … / 입력: 이용기관ID, 요청부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_member_leave_v1_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_member_leave_v1_d001_act.jsp:41 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HBRD_BANK_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_D001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 거래승인번호 검증요청 ACTION(통합웹뷰버전) / 처리: 미확인 / 입력: 이용기관ID, DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_password_confirm_v1_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_password_confirm_v1_r001_act.jsp:26

--- 정의 ---
- 구분: 기능 / 좌표: id=btnClose / 라벨: 페이지 닫기 / 앵커: EXW-UWV-80-10-S-e01 / 해설: 페이지 닫기
- 구분: 기능 / 좌표: id=btnLeave / 라벨: 이용해지 / 앵커: EXW-UWV-80-10-S-e03 / 해설: 이용해지

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_webview_leave_v1_view.jsp · 단계: 이용해지 안내
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
