--- 꼬리표 ---
id: BPY-HIST-10-20-10-S / system: BPY / 기능: 비플페이 앱 > 결제내역 > 브랜드상품권 상품권내역 조회 메뉴리스트 > 브랜드 상품권 구매내역 조회 (hist) > 브랜드상품권 구매내역 상세조회 (info) / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 구매내역 상세조회 (info)
목적: 브랜드상품권 구매내역 상세조회 (info) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-HIST-10-20-S

--- 업무 ---
- 요소: 화면 / 업무: 브랜드상품권 환불/선물취소/유효기간 연장처리 / 처리: 쓰기 / 테이블: TB_BRND_ODR / 입력: 회원코드, 앱코드, 직원상태, 브랜드상품권 번호, GIFT_SRNO, 은행코드, 계좌번호, REFUND_ABL_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_action.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_action_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10
- 요소: 화면 / 업무: 브랜드상품권 구매내역 상세조회(영수증) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_complete_act.jsp:37
- 요소: 화면 / 업무: 브랜드상품권 구매내역 상세조회 (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_info_act.jsp:36
- 요소: 화면 / 업무: 브랜드상품권 환불예정금액 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_refund_amt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_refund_amt_r001_act.jsp:37

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 유효기간 연장 / 앵커: BPY-HIST-10-20-10-S-e08 / 이동unresolved: uf_btnAction() / 해설: 유효기간 연장
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-HIST-10-20-10-S-e09 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 상품권 상세 / 앵커: BPY-HIST-10-20-10-S-e10 / 해설: 상품권 상세
- 구분: 기능 / 좌표: - / 라벨: 해당 금액권 선물하기 / 앵커: BPY-HIST-10-20-10-S-e11 / 해설: 해당 금액권 선물하기
- 구분: 기능 / 좌표: - / 라벨: 환불 / 앵커: BPY-HIST-10-20-10-S-e12 / 해설: 환불

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_purchase_info_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
