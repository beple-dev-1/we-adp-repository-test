--- 꼬리표 ---
id: HIT-MLPC-30-S / system: HIT / 기능: 힛플러스 > 기업 담당자 PC > 공지사항 관리 / 과업: []

--- 화면명세 ---
화면명: 공지사항 관리
목적: 공지사항 관리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 현대_공지사항관리_등록 / 처리: 읽기·쓰기 / 테이블: TB_NOTICE_MNG, TB_ALARM_INFO, TB_PUSH_MSG / 입력: 앱코드, 공지여부, NOTI_STR_DT, 제목, 내용, NOTI_ENT, NOTI_HEAD, USER_ID, 거래번호, 거래일자 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_c001_act.jsp:23 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_NOTICE_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_PUSH_MSG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_NOTICE_MNG_U001.xml:10
- 요소: 화면 / 업무: 현대_공지사항관리_삭제 / 처리: 쓰기 / 테이블: TB_NOTICE_MNG / 입력: 거래번호, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_d001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_D001.xml:10
- 요소: 화면 / 업무: 공지사항 관리 리스트조회 / 처리: 읽기 / 테이블: TB_ADM_USER, TB_MEMBER, TB_NOTICE_MNG / 입력: PAGE_SIZE, DATE_SET, FILTER_TYPE_CHECK, FILTER_STATE_CHECK, 회원코드, 앱코드, PAGE_NUM, FILTER_DATE_END, FILTER_DATE_START, SEARCH_WORD … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_R001.xml:10
- 요소: 화면 / 업무: 공지사항 관리 상세조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_NOTICE_MNG / 입력: 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_r002_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_R002.xml:10
- 요소: 화면 / 업무: 현재_공지사항_관리_수정 / 처리: 쓰기 / 테이블: TB_NOTICE_MNG / 입력: NOTI_ENT, NOTI_STR_DT, 제목, 내용, 공지여부, 거래번호, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_u001_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_NOTICE_MNG_U002.xml:10
- 요소: 화면 / 업무: 현재 공지사항 관리 상태변경 / 처리: 쓰기 / 테이블: TB_NOTICE_MNG / 입력: 거래번호, 공지여부, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_u002_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_U002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 상세검색 / 앵커: HIT-MLPC-30-S-e12 / 해설: 상세검색
- 구분: 기능 / 좌표: - / 라벨: 등록일자 / 앵커: HIT-MLPC-30-S-e13 / 해설: 등록일자
- 구분: 기능 / 좌표: - / 라벨: 검색하기 / 앵커: HIT-MLPC-30-S-e14 / 해설: 검색하기
- 구분: 기능 / 좌표: - / 라벨: 공지등록 / 앵커: HIT-MLPC-30-S-e15 / 해설: 공지등록
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MLPC-30-S-e16 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MLPC-30-S-e17 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MLPC-30-S-e18 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MLPC-30-S-e19 / 해설: last
- 구분: 항목 / 좌표: id=searchWord / 라벨: 검색어를 입력해주세요. / 앵커: HIT-MLPC-30-S-e20 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=sDate / 라벨: sDate / 앵커: HIT-MLPC-30-S-e21 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=eDate / 라벨: eDate / 앵커: HIT-MLPC-30-S-e22 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pcbo/ent_noti_mng_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
