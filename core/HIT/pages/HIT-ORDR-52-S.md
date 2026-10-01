--- 꼬리표 ---
id: HIT-ORDR-52-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 주문취소처리 / 과업: []

--- 화면명세 ---
화면명: 주문취소처리
목적: 주문취소처리 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 임직원인증 초기화 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP, TB_MEMBER_ENT_APP / 입력: 휴대폰번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aprv_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_aprv_r001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U001.xml:10
- 요소: 화면 / 업무: 임직원인증 패스워드 초기화 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR / 입력: 휴대폰번호, TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pwd_fail_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_pwd_fail_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U001.xml:10
- 요소: 화면 / 업무: 주문취소처리 / 처리: 읽기·쓰기 / 테이블: TB_WORK_CD_MNG, TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_ENT_APP, TB_BPPAY_TRAN, TB_BP_AFLT_ODR … / 입력: ORDER_DT, DEAL_NO, BP_AFLT_SEQ, EMPL_NO, PASSWD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_cancel_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_cancel_c001_act.jsp:39 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_QR_MNG_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 항목 / 좌표: id=bpAfltSeq / 라벨: bpAfltSeq / 앵커: HIT-ORDR-52-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=emplNo / 라벨: emplNo / 앵커: HIT-ORDR-52-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=orderDt / 라벨: orderDt / 앵커: HIT-ORDR-52-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=dealNo / 라벨: dealNo / 앵커: HIT-ORDR-52-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=managerName / 라벨: managerName / 앵커: HIT-ORDR-52-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=passwd / 라벨: passwd / 앵커: HIT-ORDR-52-S-e14 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mobNo / 라벨: mobNo / 앵커: HIT-ORDR-52-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mobNo_1 / 라벨: mobNo_1 / 앵커: HIT-ORDR-52-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_smt_odr_cancel_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
