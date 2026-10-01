--- 꼬리표 ---
id: EXW-UWV-70-20-C / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 제휴기관 파생 화면 > 일비포인트 몰 / 과업: []

--- 화면명세 ---
화면명: 일비포인트 몰
목적: 일비포인트 몰 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: EXW-UWV-70-20-C-e04 / 업무: 웹뷰 API - 일비몰(가비파트너스) 회원등록 / 처리: 읽기 / 테이블: TB_APP_CHNL_LDGR / 입력: CI, 고객명, EMAIL, 휴대폰번호, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_point_mall_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bzp/com/webview_point_mall_r001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_CHNL_LDGR_R001.xml:10
- 요소: 화면 / 업무: 일비몰(가비파트너스) 회원 정보 등록 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: 가비파트너스 일비몰 회원가입여부, 가비파트너스 일비몰 회원번호, 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_point_mall_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bzp/com/webview_point_mall_u001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U009.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: (필수) 개인정보 제3자 정보제공 동의 / 앵커: EXW-UWV-70-20-C-e01 / 이동modal: terms-popup / 해설: terms-popup 팝업 열기
- 구분: 기능 / 좌표: - / 라벨: 확인 / 앵커: EXW-UWV-70-20-C-e02 / 해설: 확인
- 구분: 기능 / 좌표: - / 라벨: 이전으로 가기 / 앵커: EXW-UWV-70-20-C-e03 / 해설: 이전으로 가기
- 구분: 기능 / 좌표: id=agr_btn / 라벨: 동의하기 / 앵커: EXW-UWV-70-20-C-e04 / 해설: 동의하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bzp/com/webview_point_mall_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
