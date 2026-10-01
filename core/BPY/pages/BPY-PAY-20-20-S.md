--- 꼬리표 ---
id: BPY-PAY-20-20-S / system: BPY / 기능: 비플페이 앱 > 제로페이 결제 > 제로페이 결제 메인 > 계좌 목록 > 개인 제로페이 사용자 체크 / 과업: []

--- 화면명세 ---
화면명: 개인 제로페이 사용자 체크
목적: 개인 제로페이 사용자 체크 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-PAY-20-S

--- 업무 ---
- 요소: 화면 / 업무: 주계좌설정 / 처리: 읽기·쓰기 / 테이블: TB_ACCOUNT / 입력: SEQ, 은행코드, 계좌번호 / 실패: 선택하신 계좌가 존재하지 않습니다. | 선택하신 계좌정보가 일치하지 않습니다. / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000007_act.jsp:15 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U001.xml:10
- 요소: 화면 / 업무: 빠른결제 검증 / 처리: 읽기 / 테이블: TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_ONLN_AFF_TRAN / 입력: 회원코드, 앱코드, 가맹점ID, 결제금액, TYPE, 비픞머니 결제여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000015.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000015_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R018.xml:10
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
- 요소: 화면 / 업무: 개인 제로페이 결제화면 호출 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_QR, TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST … / 입력: QR코드, 비플머니 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_approve.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_approve_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R018.xml:10
- 요소: 화면 / 업무: 거래승인번호 토큰 검증 / 처리: 미확인 / 입력: TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_prvt_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_prvt_r001_act.jsp:18

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 종료하기 / 앵커: BPY-PAY-20-20-S-e03 / 해설: 종료하기
- 구분: 기능 / 좌표: id=move_send_page / 라벨: 거래승인번호 등록 / 앵커: BPY-PAY-20-20-S-e04 / 해설: 거래승인번호 등록

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_prvt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
