--- 꼬리표 ---
id: HIT-MLPC-10-20-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 식수대용량신청내역 > 식수시간관리 / 과업: []

--- 화면명세 ---
화면명: 식수시간관리
목적: 식수시간관리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MLPC-10-S

--- 업무 ---
- 요소: 화면 / 업무: 식수시간관리 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_headcnt_time_management.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_time_management_act.jsp:25
- 요소: 화면 / 업무: 식수시간관리등록 / 처리: 쓰기 / 테이블: TB_ENT_HEADCNT_ABLE_TM, UPSERT / 입력: ENT_HEADCNT_MAIN_DATA / 실패: DB처리중 오류가 발생하였습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_bo_headcnt_time_management_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_time_management_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_C001.xml:10
- 요소: 화면 / 업무: 식수사업장조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_corp_site_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_headcnt_corp_site_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R002.xml:10
- 요소: 화면 / 업무: 신청 시간관리조회 / 처리: 읽기 / 테이블: TB_ENT_HEADCNT_ABLE_TM / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA, SITE_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_time_management_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_headcnt_time_management_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=dropBox / 라벨: 선택해주세요 / 앵커: HIT-MLPC-10-20-S-e11 / 해설: 선택해주세요
- 구분: 기능 / 좌표: - / 라벨: 저장하기 / 앵커: HIT-MLPC-10-20-S-e12 / 해설: 저장하기
- 구분: 기능 / 좌표: - / 라벨: 식수신청 / 앵커: HIT-MLPC-10-20-S-e13 / 해설: 식수신청
- 구분: 기능 / 좌표: - / 라벨: 식수 신청내역 조회 / 앵커: HIT-MLPC-10-20-S-e14 / 해설: 식수 신청내역 조회
- 구분: 기능 / 좌표: - / 라벨: 식수 대량 신청 / 앵커: HIT-MLPC-10-20-S-e15 / 해설: 식수 대량 신청
- 구분: 기능 / 좌표: - / 라벨: 신청 시간 관리 / 앵커: HIT-MLPC-10-20-S-e16 / 해설: 신청 시간 관리
- 구분: 항목 / 좌표: id=std_hour / 라벨: std_hour / 앵커: HIT-MLPC-10-20-S-e17 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=std_minute / 라벨: std_minute / 앵커: HIT-MLPC-10-20-S-e18 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_hour / 라벨: end_hour / 앵커: HIT-MLPC-10-20-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_minute / 라벨: end_minute / 앵커: HIT-MLPC-10-20-S-e20 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pcbo/ent_bo_headcnt_time_management_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
