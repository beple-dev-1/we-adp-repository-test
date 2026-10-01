--- 꼬리표 ---
id: MGC-LGFT-10-10-40-S / system: MGC / 기능: 모바일상품권 > 지역상품권 > 가맹점 찾기 > 매장검색(카테고리·지도로 찾기) > 최근 검색 위치 / 과업: []

--- 화면명세 ---
화면명: 최근 검색 위치
목적: 최근 검색 위치 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: MGC-LGFT-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: 가맹점찾기 > 목록 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG / 입력: ZPP_ID, 상품권명, 보유상품권리스트, APP_PARAM_YN, ZPP_POST_DO, ZPP_POST_SI, ZPP_POST_ADDR / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AFLTSRCH0010.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0010_act.jsp:43 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 매장검색 (화면) / 처리: 읽기 / 테이블: TB_CTGR_CATG / 입력: ZPP_ID, 상품권명, 보유상품권리스트, APP_PARAM_YN, ZPP_POST_DO, ZPP_POST_SI, ZPP_POST_ADDR, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AFLTSRCH0020.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0020_act.jsp:43 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 사용자 검색 내역 히스토리 원장 등록 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 >사용자 검색 내역 전체삭제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 >사용자 검색 내역 건별삭제 / 처리: 쓰기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE, SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d002_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 최근검색내역 조회 / 처리: 읽기 / 테이블: TB_AFLT_SRCH_HIST / 입력: MENU_TYPE, SRCH_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r002_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_R001.xml:10
- 요소: 화면 / 업무: 가맹점찾기 > 위치검색 조회 / 처리: 읽기 / 테이블: TB_POST_DO, TB_POST_SI / 입력: SRCH_WORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r003_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 이전 / 앵커: MGC-LGFT-10-10-40-S-e07 / 해설: 이전
- 구분: 기능 / 좌표: - / 라벨: 위치검색 / 앵커: MGC-LGFT-10-10-40-S-e08 / 해설: 위치검색
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: MGC-LGFT-10-10-40-S-e09 / 해설: 삭제
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: MGC-LGFT-10-10-40-S-e10 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 전체삭제 / 앵커: MGC-LGFT-10-10-40-S-e11 / 해설: 전체삭제
- 구분: 항목 / 좌표: id=SRCH_WORD / 라벨: 시/도/구 검색 / 앵커: MGC-LGFT-10-10-40-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0040_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
