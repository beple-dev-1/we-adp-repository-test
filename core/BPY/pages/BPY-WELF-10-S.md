--- 꼬리표 ---
id: BPY-WELF-10-S / system: BPY / 기능: 비플페이 앱 > 기업복지·복지포인트 > 기업복지 인증, 약관동의 관련 분기하여 각각 보여주는 페이지 / 과업: []

--- 화면명세 ---
화면명: 기업복지 인증, 약관동의 관련 분기하여 각각 보여주는 페이지
목적: 기업복지 인증, 약관동의 관련 분기하여 각각 보여주는 페이지 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 기업 사용자 인증 정보 등록- 비플페이 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_CORP_APRV, TB_MEMBER, TB_MEMBER_APP / 입력: 회원코드, 앱코드, EMPL_NO, ORG_CD, 기관명, PROD_DV, 이용기관구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.corp_user_reg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/corp_user_reg_c001_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_C001.xml:10
- 요소: 화면 / 업무: 기업 사용자 정보 검증 - 비플페이 / 처리: 읽기 / 테이블: TB_MEMBER_CORP_APRV, TB_MEMBER, TB_MEMBER_APP, TB_CORP_CLAUSE / 입력: 회원코드, 앱코드, EMPL_NO, EMPL_PW, ORG_CD, PROD_DV / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.corp_user_reg_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/corp_user_reg_r001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CORP_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 기업 약관 상세 조회 / 처리: 읽기 / 테이블: TB_CORP_CLAUSE_DETAIL / 입력: 회원코드, 앱코드, ORG_CD, PROD_DV, 약관 코드, 이용기관구분 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.corp_user_reg_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/corp_user_reg_r002_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CORP_CLAUSE_DETAIL_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_back / 라벨: 이전페이지로 / 앵커: BPY-WELF-10-S-e03 / 해설: 이전페이지로
- 구분: 기능 / 좌표: - / 라벨: 복지카드 등록/관리 더보기 버튼 / 앵커: BPY-WELF-10-S-e04 / 해설: 복지카드 등록/관리 더보기 버튼

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/corp_user_reg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
