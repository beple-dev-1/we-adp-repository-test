--- 꼬리표 ---
id: HIT-SNCK-10-30-40-S / system: HIT / 기능: 힛플러스 > 다과신청관리 > 다과 신청 내역 (list) > 다과 예약 신청 (main) > 다과 예약 신청 (settle) / 과업: []

--- 화면명세 ---
화면명: 다과 예약 신청 (settle)
목적: 다과 예약 신청 (settle) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-SNCK-10-30-S

--- 업무 ---
- 요소: 화면 / 업무: 다과신청 등록 / 처리: 쓰기 / 테이블: TB_ENT_FRSH_BRK, TB_MEMBER_ENT_APP, TB_ENT_FRSH_BRK_MENU / 입력: MENU_INFO_STR, FRSH_BRK_SEQ, FRSH_BRK_TITLE, 거래일자, MEMB_CNT, 내용, REQUIREMENT, 처리상태, 결제금액, 회원코드 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_frsh_brk_settle_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_frsh_brk_settle_c001_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_MENU_C001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 상세내용 보기 / 앵커: HIT-SNCK-10-30-40-S-e09 / 해설: 상세내용 보기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: HIT-SNCK-10-30-40-S-e10 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 신청하기 / 앵커: HIT-SNCK-10-30-40-S-e11 / 해설: 신청하기
- 구분: 항목 / 좌표: - / 라벨: 최대 예산 금액을 입력해 주세요. / 앵커: HIT-SNCK-10-30-40-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 정산 담당자명을 입력해 주세요. / 앵커: HIT-SNCK-10-30-40-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 정산 담당자 이메일 정보를 입력해주세요. / 앵커: HIT-SNCK-10-30-40-S-e14 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 정산 담당자 연락처를 입력해 주세요. / 앵커: HIT-SNCK-10-30-40-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=agreeCheck / 라벨: agreeCheck / 앵커: HIT-SNCK-10-30-40-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/ent_frsh_brk_settle_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
