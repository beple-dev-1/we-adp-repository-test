--- 꼬리표 ---
id: HIT-MLPC-10-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 식수대용량신청내역 / 과업: []

--- 화면명세 ---
화면명: 식수대용량신청내역
목적: 식수대용량신청내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 식수대용량신청내역 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_headcnt_bulk_list.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_bulk_list_act.jsp:26
- 요소: 화면 / 업무: 식수신청내역 조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_headcnt_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_list_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R004.xml:10
- 요소: 화면 / 업무: 식수신청정보 변경 / 처리: 읽기·쓰기 / 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP, TB_ALARM_INFO / 입력: HEADCNT_SEQ, MANAGER_COMMENT, 처리상태, ENT_HEADCNT_MAIN_DATA / 실패: DB처리중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_headcnt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_u001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- 요소: 화면 / 업무: 식수사업장조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_corp_site_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_headcnt_corp_site_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R002.xml:10
- 요소: 화면 / 업무: 식수신청 정보 상세조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP / 입력: 회원코드, 앱코드, HEADCNT_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_det_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_det_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MLPC-10-S-e15 / 해설: 1개월
- 구분: 기능 / 좌표: id=dropBox / 라벨: 전체상태 / 앵커: HIT-MLPC-10-S-e16 / 해설: 전체상태
- 구분: 기능 / 좌표: id=dropBox2 / 라벨: 전체사업장 / 앵커: HIT-MLPC-10-S-e17 / 해설: 전체사업장
- 구분: 기능 / 좌표: - / 라벨: 내려받기 / 앵커: HIT-MLPC-10-S-e18 / 해설: 내려받기
- 구분: 기능 / 좌표: - / 라벨: 신청하기 / 앵커: HIT-MLPC-10-S-e19 / 해설: 신청하기
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MLPC-10-S-e20 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MLPC-10-S-e21 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MLPC-10-S-e22 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MLPC-10-S-e23 / 해설: last
- 구분: 기능 / 좌표: - / 라벨: 식수신청 / 앵커: HIT-MLPC-10-S-e24 / 해설: 식수신청
- 구분: 기능 / 좌표: - / 라벨: 식수 신청내역 조회 / 앵커: HIT-MLPC-10-S-e25 / 해설: 식수 신청내역 조회
- 구분: 기능 / 좌표: - / 라벨: 식수 대량 신청 / 앵커: HIT-MLPC-10-S-e26 / 해설: 식수 대량 신청
- 구분: 기능 / 좌표: - / 라벨: 신청 시간 관리 / 앵커: HIT-MLPC-10-S-e27 / 해설: 신청 시간 관리
- 구분: 항목 / 좌표: id=headcnt_user_nm / 라벨: 신청자명을 입력해주세요 / 앵커: HIT-MLPC-10-S-e28 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_bulk_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
