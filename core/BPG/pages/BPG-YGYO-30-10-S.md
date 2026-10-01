--- 꼬리표 ---
id: BPG-YGYO-30-10-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 요기요_메인화면 > 요기요 가게 목록(정렬·지도) / 과업: []

--- 화면명세 ---
화면명: 요기요 가게 목록(정렬·지도)
목적: 요기요 가게 목록(정렬·지도) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-YGYO-30-S

--- 업무 ---
- 요소: 화면 / 업무: 요기요 가맹점 상세(Y211) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
- 요소: 화면 / 업무: 요기요_카테고리 목록 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_categories.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_categories_act.jsp:18
- 요소: 화면 / 업무: 요기요_즐겨찾기등록 / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO_AFLT / 입력: 회원코드, 앱코드, SHOP_ID, SHOP_NAME, 즐겨찾기여부, IMG_URL, PICK_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_C001.xml:10
- 요소: 화면 / 업무: 요기요_즐겨찾기_정보조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO_AFLT / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_favorites_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_favorites_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_AFLT_R001.xml:10
- 요소: 화면 / 업무: 요기요_가게목록조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_shops.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_shops_act.jsp:34

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 요기요 추천 순 / 앵커: BPG-YGYO-30-10-S-e10 / 해설: 요기요 추천 순
- 구분: 기능 / 좌표: - / 라벨: 배달요금 / 앵커: BPG-YGYO-30-10-S-e11 / 해설: 배달요금
- 구분: 기능 / 좌표: - / 라벨: 최소주문금액 / 앵커: BPG-YGYO-30-10-S-e12 / 해설: 최소주문금액
- 구분: 기능 / 좌표: - / 라벨: 시작지점으로 / 앵커: BPG-YGYO-30-10-S-e13 / 해설: 시작지점으로
- 구분: 기능 / 좌표: - / 라벨: 고객센터 바로가기 / 앵커: BPG-YGYO-30-10-S-e14 / 해설: 고객센터 바로가기
- 구분: 기능 / 좌표: - / 라벨: 홈 / 앵커: BPG-YGYO-30-10-S-e15 / 해설: 홈
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: BPG-YGYO-30-10-S-e16 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 주문내역 / 앵커: BPG-YGYO-30-10-S-e17 / 해설: 주문내역
- 구분: 기능 / 좌표: - / 라벨: 찜 / 앵커: BPG-YGYO-30-10-S-e18 / 해설: 찜

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_cat_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
