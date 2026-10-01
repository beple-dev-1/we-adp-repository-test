--- 꼬리표 ---
id: BPG-ORDR-10-10-10-S / system: BPG / 기능: 비플PG > 스마트오더 주문 > 비플오더 장바구니 > 스마트오더 결제 > 결제완료 / 과업: []

--- 화면명세 ---
화면명: 결제완료
목적: 결제완료 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-ORDR-10-10-S

--- 업무 ---
- 요소: BPG-ORDR-10-10-10-S-e04 / 업무: 비플오더 가맹점 관리에 신청 가맹점 노출 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_CORP / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R010.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_main / 라벨: 뒤로가기 / 앵커: BPG-ORDR-10-10-10-S-e04 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=odr_purchase_info / 라벨: 주문내역 보기 / 앵커: BPG-ORDR-10-10-10-S-e05 / 해설: 주문내역 보기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_complete_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
