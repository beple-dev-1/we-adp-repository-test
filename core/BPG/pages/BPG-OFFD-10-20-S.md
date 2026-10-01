--- 꼬리표 ---
id: BPG-OFFD-10-20-S / system: BPG / 기능: 비플PG > 오피스푸드 > 오피스푸드 메인 > 오피스푸드 메뉴 상세 / 과업: []

--- 화면명세 ---
화면명: 오피스푸드 메뉴 상세
목적: 오피스푸드 메뉴 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OFFD-10-S

--- 업무 ---
- 요소: 화면 / 업무: 푸드오피스 장바구니 추가 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_DELIV_MYBAG_MENU, UPSERT / 입력: 거래일자, SERVICE_TIME, MENU_ID, MENU_NAME, 메뉴개수, MENU_AMT, 가격, 앱코드, 가맹점 장바구니 순번, MENU_SCHEDULE_ID … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_u003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_u003_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_C001.xml:10
- 요소: 화면 / 업무: 오피스푸드 장바구니 데이터 확인 후 있으면 alert 없으면 장바구니에 추가 / 처리: 읽기 / 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_DELIV_MYBAG_MENU / 입력: MENU_SCHEDULE_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_r004_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OFFD-10-20-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 수량빼기 / 앵커: BPG-OFFD-10-20-S-e07 / 해설: 수량빼기
- 구분: 기능 / 좌표: - / 라벨: 수량추가 / 앵커: BPG-OFFD-10-20-S-e08 / 해설: 수량추가
- 구분: 기능 / 좌표: - / 라벨: 원 담기 / 앵커: BPG-OFFD-10-20-S-e09 / 해설: 원 담기
- 구분: 기능 / 좌표: - / 라벨: 주문이 마감되었습니다 / 앵커: BPG-OFFD-10-20-S-e10 / 해설: 주문이 마감되었습니다

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_menu_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
