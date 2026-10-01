--- 꼬리표 ---
id: HIT-SRCH-30-S / system: HIT / 기능: 힛플러스 > 가맹점 찾기 > 가맹점 찾기 목록 조회 화면 / 과업: []

--- 화면명세 ---
화면명: 가맹점 찾기 목록 조회 화면
목적: 가맹점 찾기 목록 조회 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: HIT-SRCH-30-S-e13, HIT-SRCH-30-S-e14, HIT-SRCH-30-S-e18 / 업무: 가맹점 찾기 결과 조회 / 처리: 읽기 / 테이블: TB_POST_DO, TB_POST_SI, TB_CTGR_CATG_CD, TB_CTGR_CATG, TB_AFFILIATION_MST, TB_BP_AFLT_MNG … / 입력: 나의 경도, 나의 위도, LAT, LNG, 정렬, 업종 카테고리 코드, 검색 필터 코드, ADDR, LIMIT_CNT, REQUEST_OFFSET / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_srch_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/srch/ent_aflt_srch_list_r001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R006.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=A / 라벨: 정확도순 / 앵커: HIT-SRCH-30-S-e13 / 해설: 정확도순
- 구분: 기능 / 좌표: id=D / 라벨: 거리순 / 앵커: HIT-SRCH-30-S-e14 / 해설: 거리순
- 구분: 기능 / 좌표: id=close_arrange / 라벨: 팝업닫기 / 앵커: HIT-SRCH-30-S-e15 / 해설: 팝업닫기
- 구분: 기능 / 좌표: id=ctgr_all / 라벨: 전체 / 앵커: HIT-SRCH-30-S-e16 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 비플머니 / 앵커: HIT-SRCH-30-S-e17 / 해설: 비플머니
- 구분: 기능 / 좌표: id=ctgr / 라벨: 적용 / 앵커: HIT-SRCH-30-S-e18 / 해설: 적용
- 구분: 기능 / 좌표: id=bp_aprv_yn / 라벨: 비플 인증 가맹점 / 앵커: HIT-SRCH-30-S-e19 / 해설: 비플 인증 가맹점
- 구분: 기능 / 좌표: id=pay_abl_yn / 라벨: 최근 결제 인증 가맹점 / 앵커: HIT-SRCH-30-S-e20 / 해설: 최근 결제 인증 가맹점
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-SRCH-30-S-e21 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 즐겨찾기 / 앵커: HIT-SRCH-30-S-e22 / 해설: 즐겨찾기
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: HIT-SRCH-30-S-e23 / 해설: 검색
- 구분: 기능 / 좌표: - / 라벨: 지도로 보기 / 앵커: HIT-SRCH-30-S-e24 / 해설: 지도로 보기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/srch/ent_aflt_srch_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
