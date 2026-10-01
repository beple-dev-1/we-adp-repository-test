--- 꼬리표 ---
id: BPG-YGYO-50-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 요기요 가게 검색 / 과업: []

--- 화면명세 ---
화면명: 요기요 가게 검색
목적: 요기요 가게 검색 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 요기요 가맹점 상세(Y211) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
- 요소: 화면 / 업무: 요기요_검색한 키워드로 자동완성 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_srch_shops_autocomplete_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_srch_shops_autocomplete_r001_act.jsp:35
- 요소: 화면 / 업무: 검색 기록 살제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: 검색유형, 앱코드, 회원코드, MENU_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_srch_shops_hist_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_srch_shops_hist_d001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
- 요소: 화면 / 업무: 요기요_가게,음식 키워드 가게 겁색 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: SRCH_WORD, ORDER_SERVING_TYPE, MAXIMUM_DELIVERY_FEE, LAT, LNG, START, LENGTH, SERVING_TYPE, SORT, MINIMUM_ORDER_AMOUNT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_srch_shops_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_srch_shops_r001_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_clear_search_history / 라벨: 전체삭제 / 앵커: BPG-YGYO-50-S-e11 / 해설: 전체삭제
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: BPG-YGYO-50-S-e12 / 해설: 삭제
- 구분: 기능 / 좌표: - / 라벨: 버거킹 / 앵커: BPG-YGYO-50-S-e13 / 해설: 버거킹
- 구분: 기능 / 좌표: - / 라벨: 냉채족발냉채족발냉채족발냉채족발 / 앵커: BPG-YGYO-50-S-e14 / 해설: 냉채족발냉채족발냉채족발냉채족발
- 구분: 기능 / 좌표: - / 라벨: 홈 / 앵커: BPG-YGYO-50-S-e15 / 해설: 홈
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: BPG-YGYO-50-S-e16 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 주문내역 / 앵커: BPG-YGYO-50-S-e17 / 해설: 주문내역
- 구분: 기능 / 좌표: - / 라벨: 찜 / 앵커: BPG-YGYO-50-S-e18 / 해설: 찜
- 구분: 항목 / 좌표: id=search_history_list / 라벨: search_history_list / 앵커: BPG-YGYO-50-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=input_search / 라벨: 가게명 또는 음식으로 검색해 주세요. / 앵커: BPG-YGYO-50-S-e20 / 해설: 입력 칸
- 구분: 기능 / 좌표: - / 라벨: 요기요 추천순 / 앵커: BPG-YGYO-50-S-e21 / 해설: 요기요 추천순
- 구분: 기능 / 좌표: - / 라벨: 배달요금 / 앵커: BPG-YGYO-50-S-e22 / 해설: 배달요금
- 구분: 기능 / 좌표: - / 라벨: 최소주문금액 / 앵커: BPG-YGYO-50-S-e23 / 해설: 최소주문금액
- 구분: 기능 / 좌표: - / 라벨: 배달이 잠시 중단되어 재오픈 준비 중 입니다. 일이삼사오육칠팔구십일이삼일 / 앵커: BPG-YGYO-50-S-e24 / 해설: 배달이 잠시 중단되어 재오픈 준비 중 입니다. 일이삼사오육칠팔구십일이삼일

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_srch_shops_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
