--- 꼬리표 ---
id: BPY-KID-10-S / system: BPY / 기능: 비플페이 앱 > 미성년 회원가입 > 보호자가 앱 사용자인 경우 호출되는 웹뷰 / 과업: []

--- 화면명세 ---
화면명: 보호자가 앱 사용자인 경우 호출되는 웹뷰
목적: 보호자가 앱 사용자인 경우 호출되는 웹뷰 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: BPY-KID-10-S-e03, BPY-KID-10-S-e04 / 업무: 만14세미만 회원 보호자 동의처리 / 처리: 읽기·쓰기 / 테이블: TB_KID_AGR_REQ / 입력: 휴대폰번호, 거래번호, 인증번호, 통신사, 회원명, SVC_TYPE, 거래번호, 거래일자, REQ_MOB_NO, FLAG … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_u001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=reject_btn / 라벨: 거절 / 앵커: BPY-KID-10-S-e03 / 해설: 거절
- 구분: 기능 / 좌표: id=agree_btn / 라벨: 동의 / 앵커: BPY-KID-10-S-e04 / 해설: 동의

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/kid_agr_app_recv_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
