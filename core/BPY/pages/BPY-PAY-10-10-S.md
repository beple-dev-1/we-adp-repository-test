--- 꼬리표 ---
id: BPY-PAY-10-10-S / system: BPY / 기능: 비플페이 앱 > 제로페이 결제 > 식권제로페이 결제방식선택 > 법인 제로페이 결제화면 호출 / 과업: []

--- 화면명세 ---
화면명: 법인 제로페이 결제화면 호출
목적: 법인 제로페이 결제화면 호출 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-PAY-10-S

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: zero_corp_approve:544
- 요소: 화면 / 업무: 결제하기(변동형MPM) / 처리: 읽기·쓰기 / 테이블: TB_CORP_ACCOUNT, TB_ACCOUNT, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN … / 입력: QR코드, 결제금액, 카드번호, 은행코드, 계좌번호, 계좌SEQ / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZERO_000006.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/ZERO_000006_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CORP_ACCOUNT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_C001.xml:10
- 요소: 화면 / 업무: 결제결과 조회하기 / 처리: 읽기·쓰기 / 테이블: TB_QR_MNG, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP … / 입력: 거래일자, 거래번호, QR코드, 비대면여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZERO_000007.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/ZERO_000007_act.jsp:20 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R029.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_C001.xml:10
- 요소: 화면 / 업무: 결제하기 콜백(변동형MPM) / 처리: 미확인 / 입력: 응답코드, 응답메시지 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ZERO_000010.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/ZERO_000010_act.jsp:24
- 요소: 화면 / 업무: 계좌관리(개인) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
- 요소: 화면 / 업무: 제로페이 영수증 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_QR_MNG, TB_ZEROPAY_BPPG_TRAN, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_ZEROPAY_MT_ODR … / 입력: 거래일자, 거래번호, 거래코드, 업무코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_act.jsp:17 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: 화면 / 업무: 제로페이 영수증 v2 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN, TB_BRND_TRAN, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 실패: 올바르지 않은 검색 문자가 포함되어있습니다.[0] / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_v2_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: BPY-PAY-10-10-S-e14 / 업무: 건별 한도 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: USER_SELECTED, 결제금액 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_corp_approve_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_corp_approve_r001_act.jsp:25 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- 요소: 화면 / 업무: 식권제로페이 주문원장 등록 / 처리: 쓰기 / 테이블: TB_ZEROPAY_MT_ODR / 입력: REC_INDEX, PROD_DV / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_approve_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_approve_c001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10
- 요소: 화면 / 업무: 매장 상세 지도 정보 조회 / 처리: 읽기 / 테이블: TB_CTGR_CATG, TB_AFFILIATION_QR, TB_AFFILIATION_MNG, TB_CTGR_CATG_CD, TB_MEMBER_AFLT, TB_AFFILIATION_MY / 입력: AFLT_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_approve_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_approve_r002_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R009.xml:10
- 요소: 화면 / 업무: 통합 비대면결제 결제 완료 (화면) / 미확인: IDO 동적 이름 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_complete_act.jsp:32

--- 정의 ---
- 구분: 기능 / 좌표: id=move_back / 라벨: 뒤로가기 / 앵커: BPY-PAY-10-10-S-e10 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=remove / 라벨: 내용삭제 / 앵커: BPY-PAY-10-10-S-e11 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=mny_noti / 라벨: 충전안내 / 앵커: BPY-PAY-10-10-S-e12 / 해설: 충전안내
- 구분: 기능 / 좌표: id=change_chrg_acct / 라벨: 국민은행 / 앵커: BPY-PAY-10-10-S-e13 / 해설: 국민은행
- 구분: 기능 / 좌표: id=btn_next / 라벨: 다음 / 앵커: BPY-PAY-10-10-S-e14 / 해설: 다음
- 구분: 기능 / 좌표: id=btn_approve / 라벨: 결제하기 / 앵커: BPY-PAY-10-10-S-e15 / 해설: 결제하기
- 구분: 항목 / 좌표: id=tr_amt / 라벨: 결제금액 입력(원) / 앵커: BPY-PAY-10-10-S-e16 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=chk_mask / 라벨: chk_mask / 앵커: BPY-PAY-10-10-S-e17 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_corp_approve_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
