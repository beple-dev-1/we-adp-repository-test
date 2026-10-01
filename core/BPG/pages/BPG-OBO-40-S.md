--- 꼬리표 ---
id: BPG-OBO-40-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 원산지 / 과업: []

--- 화면명세 ---
화면명: 비플오더 원산지
목적: 비플오더 원산지 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 비플오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
- 요소: 화면 / 업무: 비플오더 메뉴관리 원산지 수정 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MY / 입력: ORIGIN_INFO, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_orgin_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_orgin_u001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U005.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 카테고리 / 앵커: BPG-OBO-40-S-e09 / 이동: BPG-OBO-20-S / 해설: 카테고리
- 구분: 이동 / 좌표: - / 라벨: 메뉴 / 앵커: BPG-OBO-40-S-e10 / 이동: BPG-OBO-50-S / 해설: 메뉴
- 구분: 이동 / 좌표: - / 라벨: 옵션 / 앵커: BPG-OBO-40-S-e11 / 이동: BPG-OBO-30-S / 해설: 옵션
- 구분: 이동 / 좌표: - / 라벨: 확인 / 앵커: BPG-OBO-40-S-e12 / 이동: BPG-OBO-10-S / 해설: 확인
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OBO-40-S-e13 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 원산지 / 앵커: BPG-OBO-40-S-e14 / 해설: 원산지
- 구분: 기능 / 좌표: id=btn_show / 라벨: 메뉴수정 / 앵커: BPG-OBO-40-S-e15 / 해설: 메뉴수정
- 구분: 기능 / 좌표: id=btn_add / 라벨: + 원산지 정보 추가 / 앵커: BPG-OBO-40-S-e16 / 해설: + 원산지 정보 추가

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_orgin_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
