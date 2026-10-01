--- 꼬리표 ---
id: MGC-GIFT-10-S / system: MGC / 기능: 모바일상품권 > 상품권 구매·가입 > 선물함 > 모바일 상품권 회원가입 / 과업: []

--- 화면명세 ---
화면명: 선물함 > 모바일 상품권 회원가입
목적: 선물함 > 모바일 상품권 회원가입 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 선물함 > 모바일 상품권 회원가입 요청 API / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: CLAUSE, 판매채널코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_join_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_join_r001_act.jsp:38 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U023.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U025.xml:10
- 요소: 화면 / 업무: 선물함 > 모바일 상품권 회원가입 > 약관 상세 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_join_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_join_r002_act.jsp:33

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: MGC-GIFT-10-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=join_btn / 라벨: 동의 후 회원가입 / 앵커: MGC-GIFT-10-S-e06 / 해설: 동의 후 회원가입
- 구분: 항목 / 좌표: id=agree-chk0 / 라벨: agree-chk0 / 앵커: MGC-GIFT-10-S-e07 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agree-chk / 라벨: agree-chk / 앵커: MGC-GIFT-10-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zpp/zero_gift_join_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
