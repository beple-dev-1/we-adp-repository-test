--- 꼬리표 ---
id: BPY-BRND-10-20-20-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 구매가능 상품권 상세조회 > 브랜드상품권 상품권 구매 > 브랜드상품권 브랜드 리스트 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 브랜드 리스트
목적: 브랜드상품권 브랜드 리스트 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-BRND-10-20-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 브랜드 리스트 데이터 조회 action / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_main_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_main_list_r001_act.jsp:45
- 요소: BPY-BRND-10-20-20-S-e08 / 업무: 브랜드상품권 상품권 검색 webview (화면) / 처리: 읽기 / 테이블: TB_AFLT_SRCH_HIST / 입력: USE_YN, KEYWORD, SRCH_YN, SRCH_KEYWORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_srch.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_srch_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-BRND-10-20-20-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_srch / 라벨: 상품권 검색 / 앵커: BPY-BRND-10-20-20-S-e08 / 해설: 상품권 검색
- 구분: 기능 / 좌표: id=btn_outpage / 라벨: 페이지나가기 / 앵커: BPY-BRND-10-20-20-S-e09 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=buss_info / 라벨: 사업자정보 확인 / 앵커: BPY-BRND-10-20-20-S-e10 / 해설: 사업자정보 확인
- 구분: 기능 / 좌표: - / 라벨: bpay@bizplay.co.kr / 앵커: BPY-BRND-10-20-20-S-e11 / 해설: bpay@bizplay.co.kr
- 구분: 기능 / 좌표: id=btn_docTop / 라벨: 페이지 처음으로 가기 / 앵커: BPY-BRND-10-20-20-S-e12 / 해설: 페이지 처음으로 가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_main_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
