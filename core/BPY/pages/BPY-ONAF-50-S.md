--- 꼬리표 ---
id: BPY-ONAF-50-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 비대면결제 결제하기 / 과업: []

--- 화면명세 ---
화면명: 비대면결제 결제하기
목적: 비대면결제 결제하기 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 주계좌 조회 / 처리: 읽기 / 테이블: TB_ACCOUNT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ACCT_000009.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/ACCT_000009_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R003.xml:10
- 요소: 화면 / 업무: 오픈뱅킹 서비스 은행목록 조회 / 처리: 읽기 / 테이블: TB_BANK / 입력: 은행코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.COM_000004.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/COM_000004_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10
- 요소: 화면 / 업무: 제로페이 결제하기(고정형MPM) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_WEBVIEW_API_MNG, TB_WEBVIEW_API_ORG, TB_CORP_ACCOUNT, TB_ACCOUNT … / 입력: QR코드, 결제금액, 카드번호, 은행코드, 계좌번호, 계좌SEQ, 결제유형, MEMO, ONLN_YN, 마스킹여부 … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZERO_000005.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/ZERO_000005_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WEBVIEW_API_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CORP_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BANK_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BOXPOS_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_REPR_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_FIRM_TRAN_R002.xml:10
- 요소: 화면 / 업무: 결제결과 조회하기 / 처리: 읽기·쓰기 / 테이블: TB_QR_MNG, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP … / 입력: 거래일자, 거래번호, QR코드, 비대면여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZERO_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/ZERO_000007_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R029.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_C001.xml:10
- 요소: 화면 / 업무: 제로페이 영수증 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG, TB_ZEROPAY_BPPG_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_ZEROPAY_MT_ODR … / 입력: 거래일자, 거래번호, 거래코드, 업무코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_act.jsp:17 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-ONAF-50-S-e07 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=go_home / 라벨: 페이지나가기 / 앵커: BPY-ONAF-50-S-e08 / 해설: 페이지나가기
- 구분: 기능 / 좌표: - / 라벨: 전화하기 / 앵커: BPY-ONAF-50-S-e09 / 해설: 전화하기
- 구분: 기능 / 좌표: - / 라벨: 삭제 / 앵커: BPY-ONAF-50-S-e10 / 해설: 삭제
- 구분: 기능 / 좌표: id=A_MEMO / 라벨: 메모하기 / 앵커: BPY-ONAF-50-S-e11 / 해설: 메모하기
- 구분: 기능 / 좌표: id=approve / 라벨: 결제하기 / 앵커: BPY-ONAF-50-S-e12 / 해설: 결제하기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_onaf_approve_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
