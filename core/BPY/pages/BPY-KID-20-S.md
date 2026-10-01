--- 꼬리표 ---
id: BPY-KID-20-S / system: BPY / 기능: 비플페이 앱 > 미성년 회원가입 > 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 / 과업: []

--- 화면명세 ---
화면명: 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면
목적: 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: BPY-KID-20-S-e08 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: 만 14세미만 보호자 동의요청 적재 / 처리: 읽기·쓰기 / 테이블: TB_KID_AGR_REQ / 입력: REQ_KID_MOB_NO, REQ_KID_NM, RECV_MOB_NO, RECV_NM, RECV_MEMB_CD, STS, SVC_TYPE, RECV_BRT_DT, REQ_BRT_DT / 실패: 만 14세미만 회원가입 일련번호 취득 오류 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_c001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_SEQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_C001.xml:10
- 요소: 화면 / 업무: 만14세미만 보호자 알림톡 발송 / 처리: 읽기 / 테이블: TB_TALK_TEMPLATE_MNG / 입력: 거래번호, 거래일자, 휴대폰번호, 회원명, SVC_TYPE, REQ_MOB_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_c002_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10
- 요소: 화면 / 업무: 만14세미만 아동 회원가입 처리 / 처리: 읽기·쓰기 / 테이블: TB_CERTIFY, TB_MEMBER, TB_APP_LOCAL_MNG, TB_MEMBER_APP, TB_APP_MNG, TB_TALK_TEMPLATE_MNG / 입력: 회원명, 생년월일, 성별, 내외국인구분, CI, DI, JOIN_APP_CD, MEMB_ST, 휴대폰번호, PUSH_ID … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_c003.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/kid_agr_req_c003_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U015.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10
- 요소: BPY-KID-20-S-e09 / 업무: 보호자 비플페이 회원여부 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: 회원명, 휴대폰번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R032.xml:10
- 요소: 화면 / 업무: 보호자 동의요청 처리결과조회 / 처리: 읽기 / 테이블: TB_KID_AGR_REQ / 입력: 거래일자, 거래번호, REQ_KID_MOB_NO, SVC_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_r002_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_R002.xml:10
- 요소: 화면 / 업무: 만 14세미만 위치 동의 업데이트 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: LOC_AGR_YN, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_u002_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KID_AGR_REQ_U002.xml:10
- 요소: BPY-KID-20-S-e13 / 업무: 가맹점찾기 > 메인 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_APP / 입력: 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONAF_AGR_R002.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: BPY-KID-20-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=btn_view / 라벨: 보기 / 앵커: BPY-KID-20-S-e08 / 해설: 보기
- 구분: 기능 / 좌표: id=req_btn / 라벨: 동의 요청하기 / 앵커: BPY-KID-20-S-e09 / 해설: 동의 요청하기
- 구분: 항목 / 좌표: id=req_YN / 라벨: req_YN / 앵커: BPY-KID-20-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=recv_nm / 라벨: 이름(실명)을 입력하세요. / 앵커: BPY-KID-20-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=recv_mob_no / 라벨: 휴대폰 번호를 입력하세요. / 앵커: BPY-KID-20-S-e12 / 해설: 입력 칸
- 구분: 기능 / 좌표: id=success_btn / 라벨: 확인 / 앵커: BPY-KID-20-S-e13 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/kid_agr_req_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
