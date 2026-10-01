--- 꼬리표 ---
id: BPG-YGYO-40-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 기타 주소 (addr) / 과업: []

--- 화면명세 ---
화면명: 기타 주소 (addr)
목적: 기타 주소 (addr) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 요기요_배송주소조회 / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_r001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R002.xml:10
- 요소: 화면 / 업무: 요기요_주소관리_편집_상세 (화면) / 처리: 미확인 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_reg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_reg_act.jsp:21
- 요소: 화면 / 업무: 요기요_배송주소_기본선택수정 / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO / 입력: DELETE_YN, 회원코드, 앱코드, ADDR_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_u001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U002.xml:10
- 요소: 화면 / 업무: 요기요_배송주소_수정대상조회(SEQ) / 처리: 읽기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드, ADDR_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.tb_member_app_ygyo_r004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/tb_member_app_ygyo_r004_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R004.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 편집 / 앵커: BPG-YGYO-40-S-e06 / 이동: BPG-YGYO-40-10-S / 해설: 편집
- 구분: 기능 / 좌표: - / 라벨: 내용삭제 / 앵커: BPG-YGYO-40-S-e07 / 해설: 내용삭제
- 구분: 기능 / 좌표: - / 라벨: 현재 위치로 주소찾기 / 앵커: BPG-YGYO-40-S-e08 / 해설: 현재 위치로 주소찾기
- 구분: 기능 / 좌표: id=btnBack / 라벨: 뒤로가기 / 앵커: BPG-YGYO-40-S-e09 / 해설: 뒤로가기
- 구분: 항목 / 좌표: - / 라벨: 건물명, 도로명 또는 지번으로 검색해주세요 / 앵커: BPG-YGYO-40-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_addr_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
