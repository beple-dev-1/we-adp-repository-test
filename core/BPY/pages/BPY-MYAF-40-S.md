--- 꼬리표 ---
id: BPY-MYAF-40-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > MY가맹점 > 가맹점 인증 / 과업: []

--- 화면명세 ---
화면명: MY가맹점 > 가맹점 인증
목적: MY가맹점 > 가맹점 인증 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 약관 디테일조회 (화면) / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 약관 코드, 이용기관ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLS_000002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/CLS_000002_act.jsp:16 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- 요소: 화면 / 업무: MY가맹정 > 가맹점인증API 조회 / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_CTGR_CATG, TB_AFFILIATION_MY_DETAIL, TB_BP_AFLT_APY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY / 입력: BIZ_NO, MOB_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_r001_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R004.xml:10
- 요소: 화면 / 업무: MY가맹점 > 약관동의 변경 / 처리: 쓰기 / 테이블: TB_MEMBER_APP / 입력: MY_AFLT_AGR_YN, 앱코드, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_u001_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U006.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 팝업 닫기 / 앵커: BPY-MYAF-40-S-e03 / 해설: 팝업 닫기
- 구분: 기능 / 좌표: id=begin_reg_btn / 라벨: 시작하기 / 앵커: BPY-MYAF-40-S-e04 / 해설: 시작하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_my_prvt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
