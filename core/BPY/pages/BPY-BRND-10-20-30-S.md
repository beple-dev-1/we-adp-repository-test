--- 꼬리표 ---
id: BPY-BRND-10-20-30-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 구매가능 상품권 상세조회 > 브랜드상품권 상품권 구매 > 브랜드상품권 상품권 검색 webview / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 상품권 검색 webview
목적: 브랜드상품권 상품권 검색 webview 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-BRND-10-20-S

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: brnd_gift_srch:360
- 요소: 화면 / 업무: 브랜드상품권 구매가능 상품권 상세조회 (화면) / 처리: 읽기 / 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_HBRD_BANK / 입력: 브랜드상품권ID, 권종 코드, 거래 구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_detail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_detail_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R026.xml:10
- 요소: 화면 / 업무: 브랜드상품권 Sass 사용자 웹뷰 조회 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: 브랜드상품권ID, 권종 코드, ORDER_ID, WEBVIEW_TYPE, 브랜드상품권 번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_list_r002_act.jsp:36 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U025.xml:10
- 요소: 화면 / 업무: 브랜드상품권 상품권 검색 webview (화면) / 처리: 읽기 / 테이블: TB_AFLT_SRCH_HIST / 입력: USE_YN, KEYWORD, SRCH_YN, SRCH_KEYWORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_srch.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_srch_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 상품권 검색결과조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_srch_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_srch_r001_act.jsp:35
- 요소: 화면 / 업무: 가맹점찾기 > 사용자 검색 내역 히스토리 원장 등록 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-BRND-10-20-30-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_outpage / 라벨: 페이지나가기 / 앵커: BPY-BRND-10-20-30-S-e08 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=del_input_keyword / 라벨: 내용삭제 / 앵커: BPY-BRND-10-20-30-S-e09 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=del_recent_all / 라벨: 전체 삭제 / 앵커: BPY-BRND-10-20-30-S-e10 / 해설: 전체 삭제
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: BPY-BRND-10-20-30-S-e11 / 해설: 삭제
- 구분: 항목 / 좌표: id=search_keyword / 라벨: 브랜드 또는 키워드를 검색해 보세요. / 앵커: BPY-BRND-10-20-30-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_srch_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
