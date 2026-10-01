--- 꼬리표 ---
id: BPY-ONAF-10-10-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 비대면 최근가맹점 > 비대면 결제매장 상세정보 / 과업: []

--- 화면명세 ---
화면명: 비대면 결제매장 상세정보
목적: 비대면 결제매장 상세정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-ONAF-10-S

--- 업무 ---
- 요소: BPY-ONAF-10-10-S-e09 / 업무: 비대면 최근결제매장 삭제 / 처리: 쓰기 / 테이블: TB_ONLN_AFF_MNG / 입력: 가맹점ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.onln_aff_mng_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/onln_aff_mng_d001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_D001.xml:10
- 요소: BPY-ONAF-10-10-S-e09 / 업무: 비대면 최근가맹점 조회 (화면) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_ONLN_AFF_MNG, UPSERT, TB_AFFILIATION_QR, TB_MEMBER_AFLT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_aff_tran.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_aff_tran_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R004.xml:10
- 요소: BPY-ONAF-10-10-S-e12 / 업무: 개인 제로페이 결제화면 호출 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_QR, TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST / 입력: QR코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_approve.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_approve_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPY-ONAF-10-10-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=go_home / 라벨: 페이지나가기 / 앵커: BPY-ONAF-10-10-S-e08 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=del_btn / 라벨: 삭제 / 앵커: BPY-ONAF-10-10-S-e09 / 해설: 삭제
- 구분: 기능 / 좌표: - / 라벨: 전화하기 / 앵커: BPY-ONAF-10-10-S-e10 / 해설: 전화하기
- 구분: 기능 / 좌표: - / 라벨: 기본 정보 / 앵커: BPY-ONAF-10-10-S-e11 / 해설: 기본 정보
- 구분: 기능 / 좌표: id=submit_btn / 라벨: 결제하기 / 앵커: BPY-ONAF-10-10-S-e12 / 해설: 결제하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_onaf_aff_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
