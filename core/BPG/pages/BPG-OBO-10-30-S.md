--- 꼬리표 ---
id: BPG-OBO-10-30-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 관리 메인 > 비플오더 주문형태 선택 / 과업: []

--- 화면명세 ---
화면명: 비플오더 주문형태 선택
목적: 비플오더 주문형태 선택 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-10-S

--- 업무 ---
- 요소: 화면 / 업무: 비플오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
- 요소: 화면 / 업무: 비플오더 주문서비스 설정 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_info_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R007.xml:10
- 요소: 화면 / 업무: 주문설정(로봇배송) (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main_robot_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_robot_info_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R007.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 포장 / 앵커: BPG-OBO-10-30-S-e04 / 이동: BPG-OBO-10-20-S / 해설: 포장
- 구분: 이동 / 좌표: - / 라벨: 로봇배송 / 앵커: BPG-OBO-10-30-S-e05 / 이동: BPG-OBO-10-30-10-S / 해설: 로봇배송
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OBO-10-30-S-e06 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_order_type_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
