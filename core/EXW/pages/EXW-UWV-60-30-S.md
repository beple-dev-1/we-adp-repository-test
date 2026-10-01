--- 꼬리표 ---
id: EXW-UWV-60-30-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 결제 > CPM/MPM 결제 / 과업: []

--- 화면명세 ---
화면명: CPM/MPM 결제
목적: CPM/MPM 결제 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 결제결과 조회하기 / 처리: 읽기·쓰기 / 테이블: TB_QR_MNG, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP … / 입력: 거래일자, 거래번호, QR코드, 비대면여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZERO_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/ZERO_000007_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R029.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_C001.xml:10
- 요소: 화면 / 업무: 결제완료 및 영수증(웹뷰) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_MEMBER, TB_MEMBER_APP, TB_AFFILIATION_MNG, TB_ZEROPAY_MT_ODR / 입력: QR_TRX_DT, QR_TRX_SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.wapi_zero_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/wapi_zero_complete_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R030.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10
- 요소: 화면 / 업무: QR/바코드 토큰 생성(결제웹뷰) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_QR_MNG / 입력: MEMB_CD, WAPI_APP_CD, WAPI_ORG_ID, USER / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_pre_approve_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_pre_approve_r001_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R004.xml:10
- 요소: 화면 / 업무: 거래승인번호 검증(웹뷰) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: MEMB_CD, PASSWORD_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_pre_approve_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_pre_approve_r002_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_out_step1 / 라벨: 페이지나가기 / 앵커: EXW-UWV-60-30-S-e01 / 해설: 페이지나가기
- 구분: 항목 / 좌표: - / 라벨: 결제비밀번호 첫 번째 자리를 입력해주세요. / 앵커: EXW-UWV-60-30-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 결제비밀번호 두 번째 자리를 입력해주세요. / 앵커: EXW-UWV-60-30-S-e16 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 결제비밀번호 세 번째 자리를 입력해주세요. / 앵커: EXW-UWV-60-30-S-e17 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 결제비밀번호 네 번째 자리를 입력해주세요. / 앵커: EXW-UWV-60-30-S-e18 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 결제비밀번호 다섯 번째 자리를 입력해주세요. / 앵커: EXW-UWV-60-30-S-e19 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 결제비밀번호 여섯 번째 자리를 입력해주세요. / 앵커: EXW-UWV-60-30-S-e20 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_pre_approve_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
