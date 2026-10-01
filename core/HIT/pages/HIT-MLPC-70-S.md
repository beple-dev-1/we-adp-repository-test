--- 꼬리표 ---
id: HIT-MLPC-70-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 식수신청내역(본인) / 과업: []

--- 화면명세 ---
화면명: 식수신청내역(본인)
목적: 식수신청내역(본인) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 식수사업장조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_corp_site_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_headcnt_corp_site_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R002.xml:10
- 요소: 화면 / 업무: 식수신청내역 조회(본인) / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_WORK_CD_MNG, TB_ENT_HEADCNT, TB_MEMBER / 입력: 회원코드, 앱코드, ENT_HEADCNT_MAIN_DATA / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pcme_headcnt_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pcme_headcnt_list_r001_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R009.xml:10
- 요소: 화면 / 업무: 식수 신청근무지조회(pc_본인) / 처리: 읽기 / 테이블: TB_WORK_CD_MNG / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pcme_headcnt_work_cds_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pcme_headcnt_work_cds_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_R003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 1개월 / 앵커: HIT-MLPC-70-S-e11 / 해설: 1개월
- 구분: 기능 / 좌표: id=dropBox / 라벨: 전체상태 / 앵커: HIT-MLPC-70-S-e12 / 해설: 전체상태
- 구분: 기능 / 좌표: id=dropBox2 / 라벨: 전체근무지 / 앵커: HIT-MLPC-70-S-e13 / 해설: 전체근무지
- 구분: 기능 / 좌표: - / 라벨: 내려받기 / 앵커: HIT-MLPC-70-S-e14 / 해설: 내려받기
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MLPC-70-S-e15 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MLPC-70-S-e16 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MLPC-70-S-e17 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MLPC-70-S-e18 / 해설: last
- 구분: 기능 / 좌표: - / 라벨: 식수 신청 내역 / 앵커: HIT-MLPC-70-S-e19 / 해설: 식수 신청 내역
- 구분: 항목 / 좌표: id=headcnt_user_nm / 라벨: 신청자명,사원번호를 입력해주세요. / 앵커: HIT-MLPC-70-S-e20 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pc/ent_pcme_headcnt_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
