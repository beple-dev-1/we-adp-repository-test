--- 꼬리표 ---
id: HIT-SRCH-30-10-10-S / system: HIT / 기능: 힛플러스 > 가맹점 찾기 > 가맹점 찾기 목록 조회 화면 > 가맹점 찾기 검색 화면 > 가맹점 찾기 점색 결과조회 화면 / 과업: []

--- 화면명세 ---
화면명: 가맹점 찾기 점색 결과조회 화면
목적: 가맹점 찾기 점색 결과조회 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-SRCH-30-10-S

--- 업무 ---
- 요소: HIT-SRCH-30-10-10-S-e16, HIT-SRCH-30-10-10-S-e17, HIT-SRCH-30-10-10-S-e20, HIT-SRCH-30-10-10-S-e21 / 업무: 가맹점 찾기 검색 결과 조회 / 처리: 읽기 / 테이블: TB_POST_SI, TB_CTGR_CATG_CD, TB_CTGR_CATG, TB_AFFILIATION_MST, TB_BP_AFLT_MNG, TB_AFFILIATION_MNG … / 입력: 나의 위도, 나의 경도, 위도, 경도, 정렬, 시/군/구 코드, 카테고리 코드, 필터 코드, SRCH_KEYWORD, LIMIT_CNT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_srch_keyword_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/srch/ent_aflt_srch_keyword_list_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_SI_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R006.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 내용삭제 / 앵커: HIT-SRCH-30-10-10-S-e15 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=A / 라벨: 정확도순 / 앵커: HIT-SRCH-30-10-10-S-e16 / 해설: 정확도순
- 구분: 기능 / 좌표: id=D / 라벨: 거리순 / 앵커: HIT-SRCH-30-10-10-S-e17 / 해설: 거리순
- 구분: 기능 / 좌표: id=close_arrange / 라벨: 팝업닫기 / 앵커: HIT-SRCH-30-10-10-S-e18 / 해설: 팝업닫기
- 구분: 기능 / 좌표: - / 라벨: 비플머니 / 앵커: HIT-SRCH-30-10-10-S-e19 / 해설: 비플머니
- 구분: 기능 / 좌표: id=sido / 라벨: 다음 / 앵커: HIT-SRCH-30-10-10-S-e20 / 해설: 다음
- 구분: 기능 / 좌표: id=sigungu / 라벨: 적용 / 앵커: HIT-SRCH-30-10-10-S-e21 / 해설: 적용
- 구분: 기능 / 좌표: id=ctgr_all / 라벨: 전체 / 앵커: HIT-SRCH-30-10-10-S-e22 / 해설: 전체
- 구분: 기능 / 좌표: id=bp_aprv_yn / 라벨: 비플 인증 가맹점 / 앵커: HIT-SRCH-30-10-10-S-e23 / 해설: 비플 인증 가맹점
- 구분: 기능 / 좌표: id=pay_abl_yn / 라벨: 최근 결제 인증 가맹점 / 앵커: HIT-SRCH-30-10-10-S-e24 / 해설: 최근 결제 인증 가맹점
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-SRCH-30-10-10-S-e25 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 나가기 / 앵커: HIT-SRCH-30-10-10-S-e26 / 해설: 나가기
- 구분: 기능 / 좌표: id=item_addr / 라벨: 비플머니 비플머니 / 앵커: HIT-SRCH-30-10-10-S-e27 / 해설: 비플머니 비플머니
- 구분: 항목 / 좌표: id=search_txt / 라벨: 매장명을 입력해 주세요. / 앵커: HIT-SRCH-30-10-10-S-e28 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/srch/ent_aflt_srch_keyword_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
