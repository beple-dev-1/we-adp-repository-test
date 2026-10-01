--- 꼬리표 ---
id: EXW-BRWV-10-10-10-S / system: EXW / 기능: 외부제공 웹뷰 > 브랜드상품권 웹뷰 > 상품권 구매 > 브랜드상품권 웹뷰 API - 구매가능 상품권목록 조회 화면 > 브랜드상품권 웹뷰 API - 구매대상 상품권 상세정보 조회화면 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 웹뷰 API - 구매대상 상품권 상세정보 조회화면
목적: 브랜드상품권 웹뷰 API - 구매대상 상품권 상세정보 조회화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: EXW-BRWV-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API - 구매대상 상품권 상세정보 조회화면 (화면) / 처리: 읽기 / 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 입력: 브랜드상품권ID, 권종 코드, 거래 구분, TOKEN, KEYWORD, CATE_BGC_ID, REF_GIFT_TYPE, REF_MIN_AMT, REF_MAX_AMT, REF_SORTING / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_detail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_detail_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 기본정보 / 앵커: EXW-BRWV-10-10-10-S-e01 / 해설: 기본정보
- 구분: 기능 / 좌표: - / 라벨: 안내사항 / 앵커: EXW-BRWV-10-10-10-S-e02 / 해설: 안내사항
- 구분: 기능 / 좌표: id=buss_info / 라벨: 사업자정보 확인 / 앵커: EXW-BRWV-10-10-10-S-e03 / 해설: 사업자정보 확인
- 구분: 기능 / 좌표: - / 라벨: bpay@bizplay.co.kr / 앵커: EXW-BRWV-10-10-10-S-e04 / 해설: bpay@bizplay.co.kr
- 구분: 기능 / 좌표: id=gift_btn / 라벨: 선물하기 / 앵커: EXW-BRWV-10-10-10-S-e05 / 해설: 선물하기
- 구분: 기능 / 좌표: id=buy_btn / 라벨: 구매하기 / 앵커: EXW-BRWV-10-10-10-S-e06 / 해설: 구매하기
- 구분: 기능 / 좌표: - / 라벨: 열기/닫기 / 앵커: EXW-BRWV-10-10-10-S-e08 / 해설: 열기/닫기
- 구분: 기능 / 좌표: id=btn_minus / 라벨: 수량빼기 / 앵커: EXW-BRWV-10-10-10-S-e09 / 해설: 수량빼기
- 구분: 기능 / 좌표: id=btn_plus / 라벨: 수량더하기 / 앵커: EXW-BRWV-10-10-10-S-e10 / 해설: 수량더하기
- 구분: 항목 / 좌표: id=qty / 라벨: qty / 앵커: EXW-BRWV-10-10-10-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/api/brnd_webview_gift_detail_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
