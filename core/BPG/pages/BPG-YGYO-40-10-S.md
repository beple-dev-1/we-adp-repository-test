--- 꼬리표 ---
id: BPG-YGYO-40-10-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 기타 주소 (addr) > 기타 주소 (edit) / 과업: []

--- 화면명세 ---
화면명: 기타 주소 (edit)
목적: 기타 주소 (edit) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-YGYO-40-S

--- 업무 ---
- 요소: 화면 / 업무: 요기요_배송주소조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R002.xml:10
- 요소: 화면 / 업무: 요기요_주소관리_편집_상세 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_reg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_reg_act.jsp:21
- 요소: 화면 / 업무: 요기요_배송주소_수정대상조회(SEQ) / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드, ADDR_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_member_app_ygyo_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/tb_member_app_ygyo_r004_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R004.xml:10
- 요소: 화면 / 업무: 요기요_배송주소_삭제(상태값수정) / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드, ADDR_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_member_app_ygyo_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/tb_member_app_ygyo_u001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btnBack / 라벨: 뒤로가기 / 앵커: BPG-YGYO-40-10-S-e02 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_addr_edit_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
