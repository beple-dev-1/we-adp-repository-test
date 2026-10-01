--- 꼬리표 ---
id: BPG-OBO-10-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 관리 메인 / 과업: []

--- 화면명세 ---
화면명: 비플오더 관리 메인
목적: 비플오더 관리 메인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: BPG-OBO-10-S-e09 / 업무: 비플오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
- 요소: BPG-OBO-10-S-e12 / 업무: 비플오더 주문서비스 설정 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main_info.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_info_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R007.xml:10
- 요소: BPG-OBO-10-S-e12 / 업무: 비플오더 주문형태 선택 (화면) / 처리: 미확인 / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_order_type.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_order_type_act.jsp:25

--- 정의 ---
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OBO-10-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=profileManager / 라벨: 가맹점 프로필 관리 / 앵커: BPG-OBO-10-S-e08 / 해설: 가맹점 프로필 관리
- 구분: 기능 / 좌표: id=refresh / 라벨: 동기화 / 앵커: BPG-OBO-10-S-e09 / 해설: 동기화
- 구분: 기능 / 좌표: id=menuManager / 라벨: 메뉴 관리 / 앵커: BPG-OBO-10-S-e10 / 해설: 메뉴 관리
- 구분: 기능 / 좌표: id=orderDetail / 라벨: 주문 내역 / 앵커: BPG-OBO-10-S-e11 / 해설: 주문 내역
- 구분: 기능 / 좌표: id=orderSetting / 라벨: 주문 설정 / 앵커: BPG-OBO-10-S-e12 / 해설: 주문 설정

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_main_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
