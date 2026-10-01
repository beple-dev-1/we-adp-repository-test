--- 꼬리표 ---
id: BPY-SRCH-20-S / system: BPY / 기능: 비플페이 앱 > 가맹점 찾기 > 가맹점찾기 > 메인 / 과업: []

--- 화면명세 ---
화면명: 가맹점찾기 > 메인
목적: 가맹점찾기 > 메인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관디테일 조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_clause_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/bp_aflt_clause_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
- 요소: 화면 / 업무: 비대면결제 약관동의 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: ONAF_AGR_YN, LOC_AGR_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_agr_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_agr_u001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U013.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 메인 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP / 입력: 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONAF_AGR_R002.xml:10
- 요소: 화면 / 업무: 보유 상품권 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_r001_act.jsp:47
- 요소: 화면 / 업무: 사용처 조회 / 처리: 읽기 / 테이블: TB_MEMBER_CORP_APRV / 입력: 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_r002_act.jsp:12 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 상품권 사용처별 가맹점 검색 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG / 입력: ZPP_ID, 보유상품권리스트 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 전체 가맹점 식권, 계좌결제, 공공상품권 사용처 / 앵커: BPY-SRCH-20-S-e03 / 해설: 전체 가맹점 식권, 계좌결제, 공공상품권 사용처

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_srch_aflt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
