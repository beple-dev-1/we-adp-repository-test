--- 꼬리표 ---
id: MCH-COMN-20-20-S / system: MCH / 기능: 가맹점관리 > 공통 > 검색 > 업종검색 / 과업: []

--- 화면명세 ---
화면명: 업종검색
목적: 업종검색 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 업종 코드 조회 (고객확인서) / 처리: 읽기 / 테이블: TB_CTGRY_CODE / 입력: KEYWORD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.comm_biztype_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/aml/comm/comm_biztype_r001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_popclose / 라벨: 종료하기 / 앵커: MCH-COMN-20-20-S-e05 / 해설: 종료하기
- 구분: 기능 / 좌표: - / 라벨: 검색 / 앵커: MCH-COMN-20-20-S-e06 / 해설: 검색
- 구분: 기능 / 좌표: id=upjong_sel / 라벨: 확인 / 앵커: MCH-COMN-20-20-S-e07 / 해설: 확인
- 구분: 항목 / 좌표: id=upjong / 라벨: 업종명 또는 업종코드 입력 / 앵커: MCH-COMN-20-20-S-e08 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/aml/comm/comm_biztype_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
