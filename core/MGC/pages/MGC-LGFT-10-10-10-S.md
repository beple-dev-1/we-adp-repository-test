--- 꼬리표 ---
id: MGC-LGFT-10-10-10-S / system: MGC / 기능: 모바일상품권 > 지역상품권 > 가맹점 찾기 > 매장검색(카테고리·지도로 찾기) > 보유중인 상품권으로 찾기 / 과업: []

--- 화면명세 ---
화면명: 보유중인 상품권으로 찾기
목적: 보유중인 상품권으로 찾기 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MGC-LGFT-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: 가맹점찾기 > 목록 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG / 입력: ZPP_ID, 상품권명, 보유상품권리스트, APP_PARAM_YN, ZPP_POST_DO, ZPP_POST_SI, ZPP_POST_ADDR / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AFLTSRCH0010.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0010_act.jsp:43 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10
- 요소: 화면 / 업무: 비대면결제 약관동의 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: ONAF_AGR_YN, LOC_AGR_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_agr_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_agr_u001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U013.xml:10
- 요소: 화면 / 업무: 보유 상품권 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_r001_act.jsp:47

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 이전 / 앵커: MGC-LGFT-10-10-10-S-e03 / 해설: 이전
- 구분: 기능 / 좌표: - / 라벨: 전체 제로페이 / 앵커: MGC-LGFT-10-10-10-S-e04 / 해설: 전체 제로페이

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0000_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
