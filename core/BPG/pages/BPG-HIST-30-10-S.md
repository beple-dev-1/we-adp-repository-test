--- 꼬리표 ---
id: BPG-HIST-30-10-S / system: BPG / 기능: 비플PG > 결제내역 > 요기요 > 주문내역(메인) / 과업: []

--- 화면명세 ---
화면명: 주문내역(메인)
목적: 주문내역(메인) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 요기요_배송주소조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R002.xml:10
- 요소: 화면 / 업무: 요기요 가맹점 상세(Y211) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
- 요소: 화면 / 업무: 주문내역(상세) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_act.jsp:42
- 요소: BPG-HIST-30-10-S-e07 / 업무: 주문내역 조회(메인) / 처리: 읽기 / 테이블: TB_YGYO_ODR, TB_BPPAY_TRAN / 입력: shop_id, shop_name, lat, lng, created_from, created_to, start, length, next_cursor / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_info_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_info_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_R004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_more / 라벨: 더보기 / 앵커: BPG-HIST-30-10-S-e07 / 해설: 더보기
- 구분: 기능 / 좌표: - / 라벨: 시작지점으로 / 앵커: BPG-HIST-30-10-S-e08 / 해설: 시작지점으로
- 구분: 기능 / 좌표: - / 라벨: 홈 / 앵커: BPG-HIST-30-10-S-e09 / 해설: 홈
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: BPG-HIST-30-10-S-e10 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 주문내역 / 앵커: BPG-HIST-30-10-S-e11 / 해설: 주문내역
- 구분: 기능 / 좌표: - / 라벨: 찜 / 앵커: BPG-HIST-30-10-S-e12 / 해설: 찜

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_purchase_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
