--- 꼬리표 ---
id: BPG-OBO-50-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 메뉴관리 메뉴 / 과업: []

--- 화면명세 ---
화면명: 비플오더 메뉴관리 메뉴
목적: 비플오더 메뉴관리 메뉴 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 비플오더 메인 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
- 요소: 화면 / 업무: 비플오더 원산지 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_orgin.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_orgin_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- 요소: 화면 / 업무: 비플오더 메뉴 삭제 / 처리: 쓰기 / 테이블: TB_BP_AFLT_CATG_PDT, TB_BP_AFLT_PDT_OPT_CATG, TB_BP_AFLT_MY_PDT_INFO / 입력: 비플가맹점순번, BP_AFLT_CATG_SEQ, 비플오더메뉴순번, BP_AFLT_OPT_CATG_SEQ, IMG_PATH_INFO, THUMB_IMG_PATH_INFO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_d001_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CATG_PDT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_D001.xml:10
- 요소: 화면 / 업무: 비플오더 메뉴관리 카테고리 메뉴 조회 / 처리: 읽기 / 테이블: TB_BP_AFLT_MY_CATG, TB_BP_AFLT_CATG_PDT, TB_BP_AFLT_MY_PDT_INFO / 입력: 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_CATG_R002.xml:10
- 요소: 화면 / 업무: 비플오더 메뉴 노출순번 수정 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MY_PDT_INFO / 입력: PDT_REC, 비플가맹점순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_u001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U001.xml:10
- 요소: 화면 / 업무: 비플오더 메뉴 품절,숨김 수정 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MY_PDT_INFO / 입력: 품절여부, HIDE_YN, 비플가맹점순번, 비플오더메뉴순번 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_u002_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U002.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 카테고리 / 앵커: BPG-OBO-50-S-e07 / 이동: BPG-OBO-20-S / 해설: 카테고리
- 구분: 이동 / 좌표: - / 라벨: 옵션 / 앵커: BPG-OBO-50-S-e08 / 이동: BPG-OBO-30-S / 해설: 옵션
- 구분: 이동 / 좌표: - / 라벨: 원산지 / 앵커: BPG-OBO-50-S-e09 / 이동: BPG-OBO-40-S / 해설: 원산지
- 구분: 이동 / 좌표: - / 라벨: 확인 / 앵커: BPG-OBO-50-S-e10 / 이동: BPG-OBO-10-S / 해설: 확인
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OBO-50-S-e11 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 메뉴 / 앵커: BPG-OBO-50-S-e12 / 해설: 메뉴

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
