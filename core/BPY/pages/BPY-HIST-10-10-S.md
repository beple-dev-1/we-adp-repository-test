--- 꼬리표 ---
id: BPY-HIST-10-10-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 브랜드상품권 상품권내역 조회 메뉴리스트 > 브랜드 상품권 결제내역 조회 / 과업: []

--- 화면명세 ---
화면명: 브랜드 상품권 결제내역 조회
목적: 브랜드 상품권 결제내역 조회 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-HIST-10-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 결제내역 상세조회(영수증) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_pay_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_pay_complete_act.jsp:36
- 요소: 화면 / 업무: 브랜드 상품권 결제내역 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_pay_hist_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_pay_hist_r001_act.jsp:35
- 요소: 화면 / 업무: 브랜드 상품권 sass 사용자 웹뷰 조회 (in 결제내역) / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: 브랜드상품권ID, ORDER_ID, WEBVIEW_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_pay_hist_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_pay_hist_r002_act.jsp:36 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U025.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-HIST-10-10-S-e06 / 이동: BPY-HIST-10-S / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=tooltip_btn / 라벨: 결제내역 안내 버튼 / 앵커: BPY-HIST-10-10-S-e07 / 해설: 결제내역 안내 버튼
- 구분: 기능 / 좌표: id=option_period / 라벨: 1개월 더보기 / 앵커: BPY-HIST-10-10-S-e08 / 해설: 1개월 더보기
- 구분: 기능 / 좌표: id=kind_period / 라벨: 전체 상품권 더보기 / 앵커: BPY-HIST-10-10-S-e09 / 해설: 전체 상품권 더보기
- 구분: 기능 / 좌표: id=req_period / 라벨: 전체 상태 더보기 / 앵커: BPY-HIST-10-10-S-e10 / 해설: 전체 상태 더보기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_pay_hist_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
