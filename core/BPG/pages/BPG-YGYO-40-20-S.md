--- 꼬리표 ---
id: BPG-YGYO-40-20-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 기타 주소 (addr) > 주소 관리 (reg) / 과업: []

--- 화면명세 ---
화면명: 주소 관리 (reg)
목적: 주소 관리 (reg) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-YGYO-40-S

--- 업무 ---
- 요소: 화면 / 업무: 요기요_배송주소_검색등록 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP_YGYO / 입력: 회원코드, 앱코드, ADDR_SEQ, TYPE_TP, TYPE_ALI, POST_NO, ROAD_BUILDING, ADDR_DTL, 기본배송지 여부, LAT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_reg_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_C001.xml:10
- 요소: 화면 / 업무: 요기요_배송주소_수정등록 / 처리: 쓰기 / 테이블: TB_MEMBER_APP_YGYO / 입력: TYPE_TP, TYPE_ALI, POST_NO, ROAD_BUILDING, ADDR_DTL, LAT, 회원코드, 앱코드, ADDR_SEQ, 기본배송지 여부 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_addr_reg_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_addr_reg_u001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_U004.xml:10
- 요소: 화면 / 업무: 요기요_위치정보조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_geocodes.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_geocodes_act.jsp:18
- 요소: 화면 / 업무: js.act / 미확인: WSVC 없음 / 근거: js.act (WSVC 없음)

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 내용삭제 / 앵커: BPG-YGYO-40-20-S-e12 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=myLocationBtn / 라벨: 현재 위치로 주소찾기 / 앵커: BPG-YGYO-40-20-S-e13 / 해설: 현재 위치로 주소찾기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-YGYO-40-20-S-e17 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=saveBtn / 라벨: 완료 / 앵커: BPG-YGYO-40-20-S-e19 / 해설: 완료
- 구분: 항목 / 좌표: id=serchTxt / 라벨: 건물명, 도로명 또는 지번으로 검색해주세요 / 앵커: BPG-YGYO-40-20-S-e20 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_addr_reg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
