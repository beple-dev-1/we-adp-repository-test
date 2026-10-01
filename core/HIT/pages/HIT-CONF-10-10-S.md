--- 꼬리표 ---
id: HIT-CONF-10-10-S / system: HIT / 기능: 힛플러스 > 설정 > 엔터프라이즈 주 충전수단 조회 화면 > 설정 > 결제수단 설정 / 과업: []

--- 화면명세 ---
화면명: 설정 > 결제수단 설정
목적: 설정 > 결제수단 설정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-CONF-10-S

--- 업무 ---
- 요소: 화면 / 업무: 결제수단 정보 적재 / 처리: 쓰기 / 테이블: TB_MEMBER_ENT_PAY_MNG / 입력: CPX_PAY_MTHD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_payment_mng_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_payment_mng_c001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_C001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 결제수단 정보 조회 / 처리: 읽기 / 테이블: TB_CARD, TB_ACCOUNT, TB_MEMBER_ENT_PAY_MNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_payment_mng_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_payment_mng_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_R001.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 결제수단 정보 변경 / 처리: 쓰기 / 테이블: TB_MEMBER_ENT_PAY_MNG / 입력: 합산결제수단 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_payment_mng_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_payment_mng_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_PAY_MNG_U001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 충전수단 관리 / 앵커: HIT-CONF-10-10-S-e03 / 이동: HIT-CONF-10-S / 해설: 충전수단 관리
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-CONF-10-10-S-e04 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/conf/ent_payment_mng_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
