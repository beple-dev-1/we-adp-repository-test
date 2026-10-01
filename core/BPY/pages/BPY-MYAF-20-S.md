--- 꼬리표 ---
id: BPY-MYAF-20-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > MY 가맹점 기본 프로필 정보 수정 화면 / 과업: []

--- 화면명세 ---
화면명: MY 가맹점 기본 프로필 정보 수정 화면
목적: MY 가맹점 기본 프로필 정보 수정 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 이미지 웹 서버 삭제 / 처리: 미확인 / 입력: REC / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.FileTransfer.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/FileTransfer_act.jsp:26
- 요소: 화면 / 업무: MY 가맹점 프로필사진 등록/수정/삭제 / 처리: 읽기·쓰기 / 테이블: TB_AFFILIATION_MY_HIST, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_BP_AFLT_MY, TB_ALARM_INFO / 입력: ADULT_LVL, VIOLENCE_LVL, RACY_LVL, MEDICAL_LVL, SPOOF_LVL, AFLT_ID, IMG_INFO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_profileImg_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_profileImg_u001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_back / 라벨: 뒤로가기 / 앵커: BPY-MYAF-20-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 사진수정 / 앵커: BPY-MYAF-20-S-e08 / 해설: 사진수정
- 구분: 기능 / 좌표: - / 라벨: 비플머니 / 앵커: BPY-MYAF-20-S-e09 / 해설: 비플머니
- 구분: 기능 / 좌표: - / 라벨: 대표번호를 추가해 주세요. / 앵커: BPY-MYAF-20-S-e10 / 해설: 대표번호를 추가해 주세요.
- 구분: 기능 / 좌표: id=btn_ok / 라벨: 확인 / 앵커: BPY-MYAF-20-S-e11 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_update_baseInfo_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
