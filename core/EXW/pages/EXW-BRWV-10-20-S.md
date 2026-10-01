--- 꼬리표 ---
id: EXW-BRWV-10-20-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 상품권 구매 > 브랜드상품권 웹뷰 API - 상품권 검색화면/action / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 웹뷰 API - 상품권 검색화면/action
목적: 브랜드상품권 웹뷰 API - 상품권 검색화면/action 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-10-S

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: brnd_webview_gift_srch:435
- 요소: 화면 / 업무: 브랜드상품권 Sass 사용자 웹뷰 조회 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: 브랜드상품권ID, 권종 코드, ORDER_ID, WEBVIEW_TYPE, 브랜드상품권 번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_list_r002_act.jsp:36 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U025.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 상품권 검색화면/action (화면) / 처리: 읽기 / 테이블: TB_AFLT_SRCH_HIST / 입력: TOKEN, REF_URL, KEYWORD, CATE_BGC_ID, REF_GIFT_TYPE, REF_MIN_AMT, REF_MAX_AMT, REF_SORTING / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_srch.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_srch_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 상품권 검색내역 저장 action / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_srch_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_srch_c001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 상품권 검색결과조회 action / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_srch_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_srch_r001_act.jsp:40

--- 정의 ---
- 구분: 기능 / 좌표: id=del_input_keyword / 라벨: 내용삭제 / 앵커: EXW-BRWV-10-20-S-e01 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=del_recent_all / 라벨: 전체 삭제 / 앵커: EXW-BRWV-10-20-S-e02 / 해설: 전체 삭제
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: EXW-BRWV-10-20-S-e03 / 해설: 삭제
- 구분: 이동 / 좌표: - / 라벨: 내역 / 앵커: EXW-BRWV-10-20-S-e05 / 이동: EXW-BRWV-20-S / 해설: 내역
- 구분: 이동 / 좌표: - / 라벨: 이전 / 앵커: EXW-BRWV-10-20-S-e06 / 이동: EXW-BRWV-10-S / 해설: 이전
- 구분: 이동 / 좌표: - / 라벨: 다음 / 앵커: EXW-BRWV-10-20-S-e07 / 이동: EXW-BRWV-10-10-10-S / 해설: 다음
- 구분: 이동 / 좌표: - / 라벨: 홈 / 앵커: EXW-BRWV-10-20-S-e08 / 이동: EXW-BRWV-10-S / 해설: 홈
- 구분: 항목 / 좌표: id=search_keyword / 라벨: 브랜드 또는 키워드를 검색해 보세요. / 앵커: EXW-BRWV-10-20-S-e09 / 해설: 입력 칸
- 구분: 기능 / 좌표: id=sort_type / 라벨: 혜택순 / 앵커: EXW-BRWV-10-20-S-e12 / 해설: 혜택순
- 구분: 기능 / 좌표: id=open_pop / 라벨: 필터 / 앵커: EXW-BRWV-10-20-S-e13 / 해설: 필터

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_gift_srch_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
