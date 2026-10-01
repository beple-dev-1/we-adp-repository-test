--- 꼬리표 ---
id: BPG-YGYO-30-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 요기요_메인화면 / 과업: []

--- 화면명세 ---
화면명: 요기요_메인화면
목적: 요기요_메인화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 요기요_주소관리 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R001.xml:10
- 요소: 화면 / 업무: 요기요_배송주소조회저장 / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드, ADDR_SEQ, TYPE_TP, TYPE_ALI, POST_NO, ROAD_BUILDING, ADDR_DTL, 기본배송지 여부, LAT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_c001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_C001.xml:10
- 요소: 화면 / 업무: 요기요 가맹점 상세(Y211) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
- 요소: 화면 / 업무: 요기요_배너조회 / 처리: 읽기 / 테이블: TB_BANNER_GRP_MNG, TB_BANNER_IMG_MNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_banner.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_banner_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANNER_GRP_MNG_R001.xml:10
- 요소: 화면 / 업무: 요기요_카테고리 목록 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_categories.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_categories_act.jsp:18
- 요소: 화면 / 업무: 요기요_약관 (화면) / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_clause_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.BP_YGYO_CLAUSE_U001.xml:10
- 요소: 화면 / 업무: 요기요_즐겨찾기등록 / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO_AFLT / 입력: 회원코드, 앱코드, SHOP_ID, SHOP_NAME, 즐겨찾기여부, IMG_URL, PICK_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_C001.xml:10
- 요소: 화면 / 업무: 요기요_즐겨찾기_정보조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO_AFLT / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_R001.xml:10
- 요소: 화면 / 업무: 요기요_위치정보조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_geocodes.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_geocodes_act.jsp:18
- 요소: 화면 / 업무: 요기요_메인화면 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R001.xml:10
- 요소: 화면 / 업무: 주문 목록 조회 API / 처리: 읽기 / 테이블: TB_YGYO_ODR / 입력: 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_orders_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_orders_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.BP_YGYO_ORDERS_BADGE_YN_R001.xml:10
- 요소: 화면 / 업무: 요기요_도착예상시간_툴립제거 / 처리: 쓰기 / 테이블: TB_YGYO_ODR / 입력: 회원코드, YGYO_ORDER_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_orders_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_orders_u001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.BP_YGYO_ORDERS_BADGE_YN_U001.xml:10
- 요소: 화면 / 업무: 요기요_파트너유저_생성 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_partner_users.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_partner_users_act.jsp:35
- 요소: 화면 / 업무: 요기요_파트너유저_조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_partner_users_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_partner_users_r001_act.jsp:35
- 요소: 화면 / 업무: 주문내역(상세) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_act.jsp:42
- 요소: 화면 / 업무: 요기요_가게목록조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_shops.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_shops_act.jsp:34
- 요소: 화면 / 업무: 요기요 서비스 상태 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_status.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_status_act.jsp:35

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 배달 / 앵커: BPG-YGYO-30-S-e13 / 해설: 배달
- 구분: 기능 / 좌표: - / 라벨: 포장 / 앵커: BPG-YGYO-30-S-e14 / 해설: 포장
- 구분: 기능 / 좌표: - / 라벨: 요기요 추천 순 / 앵커: BPG-YGYO-30-S-e15 / 해설: 요기요 추천 순
- 구분: 기능 / 좌표: - / 라벨: 배달요금 / 앵커: BPG-YGYO-30-S-e16 / 해설: 배달요금
- 구분: 기능 / 좌표: - / 라벨: 최소주문금액 / 앵커: BPG-YGYO-30-S-e17 / 해설: 최소주문금액
- 구분: 기능 / 좌표: - / 라벨: 전체 카테고리 / 앵커: BPG-YGYO-30-S-e18 / 해설: 전체 카테고리
- 구분: 기능 / 좌표: - / 라벨: 닫기 / 앵커: BPG-YGYO-30-S-e19 / 해설: 닫기
- 구분: 기능 / 좌표: - / 라벨: 고객센터 바로가기 / 앵커: BPG-YGYO-30-S-e20 / 해설: 고객센터 바로가기
- 구분: 기능 / 좌표: - / 라벨: 홈 / 앵커: BPG-YGYO-30-S-e21 / 해설: 홈
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: BPG-YGYO-30-S-e22 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 주문내역 / 앵커: BPG-YGYO-30-S-e23 / 해설: 주문내역
- 구분: 기능 / 좌표: - / 라벨: 찜 / 앵커: BPG-YGYO-30-S-e24 / 해설: 찜

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_main_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
