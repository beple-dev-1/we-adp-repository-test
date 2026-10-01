--- 꼬리표 ---
id: HIT-ORDR-34-10-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 가맹점 상세 기본정보_v2 > 얼굴 등록, 삭제기능 / 과업: []

--- 화면명세 ---
화면명: 얼굴 등록, 삭제기능
목적: 얼굴 등록, 삭제기능 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-ORDR-34-S

--- 업무 ---
- 요소: 화면 / 업무: 얼굴 등록 / 처리: 쓰기 / 테이블: TB_USER_FACE_MNG / 입력: IMG_PATH / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_robot_face_mng_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_robot_face_mng_c001_act.jsp:30 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_USER_FACE_MNG_C001.xml:10
- 요소: 화면 / 업무: 얼굴 삭제 / 처리: 쓰기 / 테이블: TB_USER_FACE_MNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_robot_face_mng_d001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_robot_face_mng_d001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_USER_FACE_MNG_U001.xml:10
- 요소: 화면 / 업무: 얼굴 조회 / 처리: 읽기 / 테이블: TB_USER_FACE_MNG / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_robot_face_mng_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_robot_face_mng_r001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_USER_FACE_MNG_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=backBtn / 라벨: 이전 페이지로 / 앵커: HIT-ORDR-34-10-S-e07 / 해설: 이전 페이지로
- 구분: 기능 / 좌표: - / 라벨: 다시 촬영하기 / 앵커: HIT-ORDR-34-10-S-e08 / 해설: 다시 촬영하기
- 구분: 기능 / 좌표: id=createBtn / 라벨: 등록하기 / 앵커: HIT-ORDR-34-10-S-e09 / 해설: 등록하기
- 구분: 기능 / 좌표: id=deleteBtn / 라벨: 삭제 / 앵커: HIT-ORDR-34-10-S-e10 / 해설: 삭제
- 구분: 기능 / 좌표: id=reCreateBtn / 라벨: 재등록 / 앵커: HIT-ORDR-34-10-S-e11 / 해설: 재등록
- 구분: 기능 / 좌표: id=completeBtn / 라벨: 확인 / 앵커: HIT-ORDR-34-10-S-e12 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/conf/ent_robot_face_mng_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
