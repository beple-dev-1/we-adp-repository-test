--- 꼬리표 ---
id: BPY-ONAF-20-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 비대면결제 검색하기 / 과업: []

--- 화면명세 ---
화면명: 비대면결제 검색하기
목적: 비대면결제 검색하기 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 비대면결제 검색하기 (화면) / 처리: 읽기 / 테이블: TB_POST_SI, TB_POST_DO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_SI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R001.xml:10
- 요소: BPY-ONAF-20-S-e09 / 업무: 비대면 최근가맹점 조회 (화면) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ONLN_AFF_MNG, UPSERT, TB_AFFILIATION_QR, TB_MEMBER_AFLT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_aff_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_aff_tran_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_home / 라벨: 페이지나가기 / 앵커: BPY-ONAF-20-S-e07 / 해설: 페이지나가기
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: BPY-ONAF-20-S-e08 / 해설: 검색
- 구분: 기능 / 좌표: id=go_aff_tran / 라벨: 최근결제 가맹점 / 앵커: BPY-ONAF-20-S-e09 / 해설: 최근결제 가맹점
- 구분: 항목 / 좌표: id=post_do / 라벨: post_do / 앵커: BPY-ONAF-20-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=post_si / 라벨: post_si / 앵커: BPY-ONAF-20-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=afld_keyword / 라벨: 매장명 검색 / 앵커: BPY-ONAF-20-S-e12 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_onaf_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
