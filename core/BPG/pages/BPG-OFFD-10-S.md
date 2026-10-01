--- 꼬리표 ---
id: BPG-OFFD-10-S / system: BPG / 기능: 비플PG > 오피스푸드 > 오피스푸드 메인 / 과업: []

--- 화면명세 ---
화면명: 오피스푸드 메인
목적: 오피스푸드 메인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: BPG-OFFD-10-S-e08 / 업무: 배송지 등록(로케이션) (화면) / 처리: 미확인 / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_loc.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_loc_act.jsp:25
- 요소: 화면 / 업무: 푸드오피스 메뉴 조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_DELIV, TB_BP_AFLT_DELIV_MENU / 입력: 회원코드, 앱코드, 비플가맹점순번, 거래일자 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R004.xml:10
- 요소: BPG-OFFD-10-S-e07 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10
- 요소: BPG-OFFD-10-S-e07 / 업무: 비플오더 가맹점 관리에 신청 가맹점 노출 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_CORP / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R010.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: id=oder_detail / 라벨: 주문내역 / 앵커: BPG-OFFD-10-S-e06 / 이동: BPG-HIST-10-10-S / 해설: 주문내역
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OFFD-10-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=locChange / 라벨: 배송지 변경 / 앵커: BPG-OFFD-10-S-e08 / 해설: 배송지 변경
- 구분: 기능 / 좌표: - / 라벨: 비플머니 / 앵커: BPG-OFFD-10-S-e09 / 해설: 비플머니
- 구분: 기능 / 좌표: - / 라벨: 톡상담 하러가기 / 앵커: BPG-OFFD-10-S-e10 / 해설: 톡상담 하러가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
