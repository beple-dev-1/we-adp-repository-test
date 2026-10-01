--- 꼬리표 ---
id: HIT-MBO-10-50-10-S / system: HIT / 기능: 힛플러스 > 점주 백오피스 PC > 스마트오더 관리 > 거래관리 > 거래내역 / 과업: []

--- 화면명세 ---
화면명: 거래내역
목적: 거래내역 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: HIT-MBO-10-50-10-S-e16 / 업무: 현대차 엔터프라이즈 PC 스마트오더 가맹점주 거래내역 조회 / 처리: 읽기 / 테이블: TB_ENT_CORP_SITE, TB_CTGR_CATG_CD, TB_CTGR_CATG, TB_BPPAY_TRAN, TB_BP_AFLT_ODR, TB_MEMBER_ENT_APP … / 입력: START_DATE, END_DATE, STR_TIME, END_TIME, 거래구문 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_tran_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_tran_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R017.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=tran_type / 라벨: 전체 / 앵커: HIT-MBO-10-50-10-S-e12 / 해설: 전체
- 구분: 기능 / 좌표: - / 라벨: 결제 / 앵커: HIT-MBO-10-50-10-S-e13 / 해설: 결제
- 구분: 기능 / 좌표: - / 라벨: 결제취소 / 앵커: HIT-MBO-10-50-10-S-e14 / 해설: 결제취소
- 구분: 기능 / 좌표: id=btn_search / 라벨: 조회 / 앵커: HIT-MBO-10-50-10-S-e15 / 해설: 조회
- 구분: 기능 / 좌표: id=btn_excel / 라벨: 엑셀 저장 / 앵커: HIT-MBO-10-50-10-S-e16 / 해설: 엑셀 저장
- 구분: 항목 / 좌표: id=start_date / 라벨: start_date / 앵커: HIT-MBO-10-50-10-S-e17 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=start_hour / 라벨: start_hour / 앵커: HIT-MBO-10-50-10-S-e18 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=start_min / 라벨: start_min / 앵커: HIT-MBO-10-50-10-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_date / 라벨: end_date / 앵커: HIT-MBO-10-50-10-S-e20 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_hour / 라벨: end_hour / 앵커: HIT-MBO-10-50-10-S-e21 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=end_min / 라벨: end_min / 앵커: HIT-MBO-10-50-10-S-e22 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_tran_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
