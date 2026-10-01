--- 꼬리표 ---
id: HIT-CONF-10-S / system: HIT / 기능: 힛플러스 > 설정 > 엔터프라이즈 주 충전수단 조회 화면 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈 주 충전수단 조회 화면
목적: 엔터프라이즈 주 충전수단 조회 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: KICC 카드 배치키 요청정보 등록 API / 처리: 쓰기 / 테이블: TB_CARD_TRAN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CARD_000001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/kicc/CARD_000001_act.jsp:42 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_U001.xml:10
- 요소: 화면 / 업무: KICC 카드 배치키 등록화면 응답 수신 여부 확인 / 처리: 읽기 / 테이블: TB_CARD_TRAN / 입력: 거래일자, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CARD_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/kicc/CARD_000002_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_R001.xml:10
- 요소: 화면 / 업무: KICC 카드 배치키 발급 요청 API / 처리: 읽기·쓰기 / 테이블: TB_CARD_TRAN, TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: 거래일자, 거래번호, 카드번호, PASSWORD, AUTH_VALUE, EXPIRY_DATE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CARD_000003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/kicc/CARD_000003_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_SEQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_C001.xml:10
- 요소: 화면 / 업무: KICC 카드 배치키 삭제 요청 API / 처리: 쓰기 / 테이블: TB_CARD_TRAN, TB_CARD / 입력: 배치키, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CARD_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/kicc/CARD_000004_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_D001.xml:10
- 요소: HIT-CONF-10-S-e18, HIT-CONF-10-S-e19 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/acct/ent_main_account_act.jsp:24
- 요소: HIT-CONF-10-S-e13, HIT-CONF-10-S-e14 / 업무: 엔터프라이즈 주 충전수단 조회 화면 (화면) / 처리: 읽기 / 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: CPLX_REF_URL, WACT_CPLX_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R005.xml:10
- 요소: 화면 / 업무: 엔터프라이즈 충전수단 삭제 action / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_BANK, TB_ZEROPAY_BANK, TB_CARD / 입력: 거래번호, 은행코드, 계좌번호 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_d001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_U001.xml:10
- 요소: HIT-CONF-10-S-e13, HIT-CONF-10-S-e14 / 업무: 엔터프라이즈 주 충전수단 설정 변경 action / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT, TB_CARD / 입력: 거래번호, 은행코드, 계좌번호, MTHD_GUBUN, 배치키 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_mny_chrg_mng_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_u001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CARD_R006.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-CONF-10-S-e11 / 이동: HIT-CONF-10-10-S / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=mthd_close / 라벨: 팝업닫기 / 앵커: HIT-CONF-10-S-e12 / 해설: 팝업닫기
- 구분: 기능 / 좌표: id=select / 라벨: 주 충전 수단 설정 / 앵커: HIT-CONF-10-S-e13 / 해설: 주 충전 수단 설정
- 구분: 기능 / 좌표: id=delete / 라벨: 삭제하기 / 앵커: HIT-CONF-10-S-e14 / 해설: 삭제하기
- 구분: 기능 / 좌표: id=go_mny_info / 라벨: 비플머니 / 앵커: HIT-CONF-10-S-e15 / 해설: 비플머니
- 구분: 기능 / 좌표: - / 라벨: 카드 설정 / 앵커: HIT-CONF-10-S-e16 / 해설: 카드 설정
- 구분: 기능 / 좌표: id=add / 라벨: 충전 수단 등록 / 앵커: HIT-CONF-10-S-e17 / 해설: 충전 수단 등록
- 구분: 기능 / 좌표: id=account / 라벨: 계좌 / 앵커: HIT-CONF-10-S-e18 / 해설: 계좌
- 구분: 기능 / 좌표: id=card / 라벨: 신용/체크카드 / 앵커: HIT-CONF-10-S-e19 / 해설: 신용/체크카드

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/conf/ent_mny_chrg_mng_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
