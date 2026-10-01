--- 꼬리표 ---
id: HIT-MBO-10-40-20-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 주문관리 > 주문내역 / 과업: []

--- 화면명세 ---
화면명: 주문내역
목적: 주문내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 주문내역 조회 / 처리: 읽기 / 테이블: TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV … / 입력: 비플가맹점순번, START_DATE, END_DATE, KEYWORD, 주문유형, 주문처리상태, 페이지, PAGE_SIZE, END_TIME, STR_TIME … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R006.xml:10
- 요소: 화면 / 업무: 주문내역 별 결제수단 조회 / 처리: 읽기 / 테이블: TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN, TB_CAFETERIA_ODR / 입력: 거래일자, 거래번호, ORDER_ID, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r002_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R010.xml:10
- 요소: HIT-MBO-10-40-20-S-e36 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 주문내역 엑셀다운로드 / 처리: 읽기 / 테이블: TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV … / 입력: 비플가맹점순번, START_DATE, END_DATE, KEYWORD, 주문유형, 주문처리상태, 페이지, PAGE_SIZE, END_TIME, STR_TIME … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r003_act.jsp:46 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R006.xml:10
- 요소: 화면 / 업무: test / 처리: 읽기 / 테이블: TB_CAFETERIA_ODR / 입력: 비플가맹점순번, START_DATE, END_DATE, KEYWORD, 주문유형, 주문처리상태, 페이지, PAGE_SIZE, END_TIME, STR_TIME … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r013.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r013_act.jsp:42 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R013.xml:10
- 요소: 화면 / 업무: 주문취소처리 / 처리: 읽기·쓰기 / 테이블: TB_WORK_CD_MNG, TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_ENT_APP, TB_BPPAY_TRAN, TB_BP_AFLT_ODR … / 입력: ORDER_DT, DEAL_NO, BP_AFLT_SEQ, EMPL_NO, PASSWD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_cancel_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_cancel_c001_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_QR_MNG_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=sel_keyword / 라벨: 전체 / 앵커: HIT-MBO-10-40-20-S-e25 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 주문번호 / 앵커: HIT-MBO-10-40-20-S-e26 / 해설: 주문번호
- 구분: 기능 / 좌표: - / 라벨: 사원번호 / 앵커: HIT-MBO-10-40-20-S-e27 / 해설: 사원번호
- 구분: 기능 / 좌표: - / 라벨: 주문자명 / 앵커: HIT-MBO-10-40-20-S-e28 / 해설: 주문자명
- 구분: 기능 / 좌표: - / 라벨: 사전예약 / 앵커: HIT-MBO-10-40-20-S-e29 / 해설: 사전예약
- 구분: 기능 / 좌표: - / 라벨: 딜리버리/픽업 / 앵커: HIT-MBO-10-40-20-S-e30 / 해설: 딜리버리/픽업
- 구분: 기능 / 좌표: - / 라벨: 접수대기 / 앵커: HIT-MBO-10-40-20-S-e31 / 해설: 접수대기
- 구분: 기능 / 좌표: - / 라벨: 접수완료 / 앵커: HIT-MBO-10-40-20-S-e32 / 해설: 접수완료
- 구분: 기능 / 좌표: - / 라벨: 주문취소 / 앵커: HIT-MBO-10-40-20-S-e33 / 해설: 주문취소
- 구분: 기능 / 좌표: - / 라벨: 도난신고 / 앵커: HIT-MBO-10-40-20-S-e34 / 해설: 도난신고
- 구분: 기능 / 좌표: id=btn_search / 라벨: 조회 / 앵커: HIT-MBO-10-40-20-S-e35 / 해설: 조회
- 구분: 기능 / 좌표: id=btn_excel / 라벨: 엑셀 저장 / 앵커: HIT-MBO-10-40-20-S-e36 / 해설: 엑셀 저장
- 구분: 기능 / 좌표: - / 라벨: first / 앵커: HIT-MBO-10-40-20-S-e37 / 해설: first
- 구분: 기능 / 좌표: - / 라벨: prev / 앵커: HIT-MBO-10-40-20-S-e38 / 해설: prev
- 구분: 기능 / 좌표: - / 라벨: next / 앵커: HIT-MBO-10-40-20-S-e39 / 해설: next
- 구분: 기능 / 좌표: - / 라벨: last / 앵커: HIT-MBO-10-40-20-S-e40 / 해설: last
- 구분: 항목 / 좌표: id=start_date / 라벨: start_date / 앵커: HIT-MBO-10-40-20-S-e41 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=start_hour / 라벨: start_hour / 앵커: HIT-MBO-10-40-20-S-e42 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=start_min / 라벨: start_min / 앵커: HIT-MBO-10-40-20-S-e43 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_date / 라벨: end_date / 앵커: HIT-MBO-10-40-20-S-e44 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_hour / 라벨: end_hour / 앵커: HIT-MBO-10-40-20-S-e45 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_min / 라벨: end_min / 앵커: HIT-MBO-10-40-20-S-e46 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=keyword / 라벨: 검색어를 입력해 주세요. / 앵커: HIT-MBO-10-40-20-S-e47 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=show_cnt / 라벨: show_cnt / 앵커: HIT-MBO-10-40-20-S-e48 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
