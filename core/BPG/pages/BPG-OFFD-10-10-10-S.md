--- 꼬리표 ---
id: BPG-OFFD-10-10-10-S / system: BPG / 기능: 비플PG > 오피스푸드 > 오피스푸드 메인 > 배송지 등록(로케이션) > 배송지 등록(SPOT) / 과업: []

--- 화면명세 ---
화면명: 배송지 등록(SPOT)
목적: 배송지 등록(SPOT) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OFFD-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: Api 배송지(스팟)조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.DELIV_0005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/DELIV_0005_act.jsp:22
- 요소: 화면 / 업무: api 푸드오피스 픽업스팟 저장 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP_DELIV, TB_BP_AFLT_MYBAG, TB_BP_AFLT_DELIV_MYBAG_MENU / 입력: 회원코드, 앱코드, 비플가맹점순번, LOC_ID, LOC_TITLE, ADDR1, ADDR2, SPOT_DEPTH, SPOT_ID_1, SPOT_TITLE_1 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.DELIV_0006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/DELIV_0006_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_D002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OFFD-10-10-10-S-e03 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_save / 라벨: 배송지 등록 / 앵커: BPG-OFFD-10-10-10-S-e04 / 해설: 배송지 등록

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_spot_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
