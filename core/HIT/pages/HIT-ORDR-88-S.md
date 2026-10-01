--- 꼬리표 ---
id: HIT-ORDR-88-S / system: HIT / 기능: 힛플러스 > 스마트오더 > 스마트오더 임직원도메인검증 / 과업: []

--- 화면명세 ---
화면명: 스마트오더 임직원도메인검증
목적: 스마트오더 임직원도메인검증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: HIT-ORDR-88-S-e10 / 업무: 스마트오더 임직원도메인검증 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_DOMAIN, TB_BP_AFLT_CORP_CERTIFY, TB_EMAIL, TB_MEMBER_APP / 입력: EMAIL, 거래번호, 휴대폰번호, 회원명, EMPLOYEE_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_certify_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_certify_c001_act.jsp:43 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DOMAIN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_C002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U016.xml:10
- 요소: HIT-ORDR-88-S-e10 / 업무: 스마트오더 임직원 메일인증 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_CORP_CERTIFY, TB_MEMBER_APP / 입력: AUTH_PWD, EMAIL, 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_certify_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_certify_u001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U016.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_back / 라벨: 뒤로가기 / 앵커: HIT-ORDR-88-S-e08 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=email_domain / 라벨: 선택하세요 / 앵커: HIT-ORDR-88-S-e09 / 해설: 선택하세요
- 구분: 기능 / 좌표: id=authenticate / 라벨: 인증하기 / 앵커: HIT-ORDR-88-S-e10 / 해설: 인증하기
- 구분: 항목 / 좌표: id=isY / 라벨: isY / 앵커: HIT-ORDR-88-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=isN / 라벨: isN / 앵커: HIT-ORDR-88-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=emailId / 라벨: 회사 이메일 입력 / 앵커: HIT-ORDR-88-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=apv_no / 라벨: 인증번호 6자리 / 앵커: HIT-ORDR-88-S-e14 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/smt_odr_certify_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
