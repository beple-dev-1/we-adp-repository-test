--- 꼬리표 ---
id: BPG-OBO-50-10-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 메뉴관리 메뉴 > 비플오더 메뉴관리 메뉴 상세 / 과업: []

--- 화면명세 ---
화면명: 비플오더 메뉴관리 메뉴 상세
목적: 비플오더 메뉴관리 메뉴 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-50-S

--- 업무 ---
- 요소: 화면 / 업무: 이미지 웹 서버 삭제 / 처리: 미확인 / 입력: REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.FileTransfer.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/FileTransfer_act.jsp:26
- 요소: BPG-OBO-50-10-S-e20 / 업무: 비플오더 메뉴관리 메뉴 등록및수정,옵션 등록/삭제 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_CATG_PDT, TB_BP_AFLT_PDT_OPT_CATG / 입력: 비플가맹점순번, 비플오더메뉴순번, IMG_FILE_NM, RCMD_YN, 앱코드, 가맹점ID, OPT_YN, THUMB_IMG_PATH, PDT_NM, IMG_FILE_EXT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_pdt_det_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_det_c001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_U005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_D001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_PDT_OPT_CATG_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-OBO-50-10-S-e15 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 메뉴사진 / 앵커: BPG-OBO-50-10-S-e16 / 해설: 메뉴사진
- 구분: 기능 / 좌표: - / 라벨: 순서변경 / 앵커: BPG-OBO-50-10-S-e17 / 해설: 순서변경
- 구분: 기능 / 좌표: - / 라벨: 옵션삭제 / 앵커: BPG-OBO-50-10-S-e18 / 해설: 옵션삭제
- 구분: 기능 / 좌표: id=btn_optView / 라벨: + 옵션 추가 / 앵커: BPG-OBO-50-10-S-e19 / 해설: + 옵션 추가
- 구분: 기능 / 좌표: id=btn_save / 라벨: 저장 / 앵커: BPG-OBO-50-10-S-e20 / 해설: 저장
- 구분: 항목 / 좌표: id=pdtNm / 라벨: 메뉴명을 입력해 주세요. / 앵커: BPG-OBO-50-10-S-e21 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=rcmdChk / 라벨: rcmdChk / 앵커: BPG-OBO-50-10-S-e22 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=pdtInfo / 라벨: 메뉴소개를 입력해 주세요. / 앵커: BPG-OBO-50-10-S-e23 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=pdtPrice / 라벨: 가격을 입력해 주세요. / 앵커: BPG-OBO-50-10-S-e24 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=strTmTxt / 라벨: 시간 선택 / 앵커: BPG-OBO-50-10-S-e25 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=noOdrTmChk / 라벨: noOdrTmChk / 앵커: BPG-OBO-50-10-S-e26 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=odqMenuCd / 라벨: 오더퀸 메뉴코드 입력 / 앵커: BPG-OBO-50-10-S-e27 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=prtNo / 라벨: 프린트번호 입력 / 앵커: BPG-OBO-50-10-S-e28 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_pdt_det_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
