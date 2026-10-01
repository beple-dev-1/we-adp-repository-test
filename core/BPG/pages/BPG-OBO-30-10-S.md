--- 꼬리표 ---
id: BPG-OBO-30-10-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 메뉴관리 옵션 > 비플오더 메뉴관리 옵션 상세 / 과업: []

--- 화면명세 ---
화면명: 비플오더 메뉴관리 옵션 상세
목적: 비플오더 메뉴관리 옵션 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-30-S

--- 업무 ---
- 요소: BPG-OBO-30-10-S-e13 / 업무: 비플오더 메뉴관리 옵션 카테고리 메뉴 등록및수정및삭제 / 처리: 쓰기 / 테이블: TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_OPT, TB_BP_AFLT_PDT_OPT_CATG, TB_BP_AFLT_MY_PDT_INFO / 입력: OPT_CATG_NM, 비플가맹점순번, BP_AFLT_OPT_CATG_SEQ, 앱코드, OPT_DEL_REC, OPT_ADD_REC, PDT_DEL_REC, PDT_ADD_REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_opt_det_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_opt_det_c001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_CATG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_OPT_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U003.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OBO-30-10-S-e09 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 옵션 삭제 / 앵커: BPG-OBO-30-10-S-e10 / 해설: 옵션 삭제
- 구분: 기능 / 좌표: - / 라벨: 옵션삭제 / 앵커: BPG-OBO-30-10-S-e11 / 해설: 옵션삭제
- 구분: 기능 / 좌표: id=btn_pdtView / 라벨: + 연결 메뉴 추가 / 앵커: BPG-OBO-30-10-S-e12 / 해설: + 연결 메뉴 추가
- 구분: 기능 / 좌표: id=btn_save / 라벨: 저장 / 앵커: BPG-OBO-30-10-S-e13 / 해설: 저장
- 구분: 항목 / 좌표: id=optCatgNm / 라벨: ex) HOT/ICE ,시럽, 당도 / 앵커: BPG-OBO-30-10-S-e14 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=optNm0 / 라벨: 옵션종류 / 앵커: BPG-OBO-30-10-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=optPrice0 / 라벨: 옵션가격 / 앵커: BPG-OBO-30-10-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_opt_det_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
