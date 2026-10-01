--- 꼬리표 ---
id: BPG-YGYO-10-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 요기요 가맹점 상세(Y211) / 과업: []

--- 화면명세 ---
화면명: 요기요 가맹점 상세(Y211)
목적: 요기요 가맹점 상세(Y211) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 요기요 가맹점 상세조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_r001_act.jsp:43
- 요소: 화면 / 업무: 요기요_즐겨찾기등록 / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO_AFLT / 입력: 회원코드, 앱코드, SHOP_ID, SHOP_NAME, 즐겨찾기여부, IMG_URL, PICK_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_C001.xml:10
- 요소: 화면 / 업무: 요기요_즐겨찾기_정보조회_단건 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO_AFLT / 입력: 회원코드, 앱코드, SHOP_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_r002_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_R002.xml:10
- 요소: 화면 / 업무: 요기요 메뉴상세(Y220) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_menu.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_menu_act.jsp:43
- 요소: 화면 / 업무: 요기요 장바구니 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_mybag.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_mybag_act.jsp:42
- 요소: 화면 / 업무: 가게·원산지 정보 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_origin_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_origin_info_act.jsp:44

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 시작지점으로 올라가기 / 앵커: BPG-YGYO-10-S-e05 / 해설: 시작지점으로 올라가기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-YGYO-10-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 가게·원산지 정보 / 앵커: BPG-YGYO-10-S-e07 / 해설: 가게·원산지 정보
- 구분: 기능 / 좌표: - / 라벨: 닫기 / 앵커: BPG-YGYO-10-S-e08 / 해설: 닫기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_aflt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
