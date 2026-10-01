--- 꼬리표 ---
id: HIT-ORDR-22-30-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 스마트오더 결제하기(VIEW) > 스마트오더 결제완료(로봇배송 포함) / 과업: []

--- 화면명세 ---
화면명: 스마트오더 결제완료(로봇배송 포함)
목적: 스마트오더 결제완료(로봇배송 포함) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-ORDR-22-S

--- 업무 ---
- 요소: 화면 / 업무: 스마트오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_CAFETERIA_WORK_PLCE, TB_MEMBER_ENT_APP / 입력: 채널구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_act.jsp:14 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=receiptBtn / 라벨: 전자영수증 보기 / 앵커: HIT-ORDR-22-30-S-e05 / 해설: 전자영수증 보기
- 구분: 기능 / 좌표: id=retryBtn / 라벨: 다시 시도하기 / 앵커: HIT-ORDR-22-30-S-e06 / 해설: 다시 시도하기
- 구분: 기능 / 좌표: - / 라벨: 주문내역 보기 / 앵커: HIT-ORDR-22-30-S-e07 / 해설: 주문내역 보기
- 구분: 기능 / 좌표: - / 라벨: 확인 / 앵커: HIT-ORDR-22-30-S-e08 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/smartorder/ent_smt_odr_complete_v2_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
