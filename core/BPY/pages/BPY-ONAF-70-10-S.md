--- 꼬리표 ---
id: BPY-ONAF-70-10-S / system: BPY / 기능: 비플페이 앱 > 비대면결제 > 통합 비대면결제 결제 과정 > 통합 비대면결제 결제 완료 / 과업: []

--- 화면명세 ---
화면명: 통합 비대면결제 결제 완료
목적: 통합 비대면결제 결제 완료 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-ONAF-70-S

--- 업무 ---
- 요소: BPY-ONAF-70-10-S-e09 / 업무: 더보기>비대면결제내역>상세 (화면) / 처리: 읽기 / 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_ZEROPAY_TRAN, TB_MEMBER, TB_AFFILIATION_MNG … / 입력: MEM_NM, MDN, MEMO, AUTH_DATE, AUTH_TIME, REQ_TYPE, TRADE_AMT, PAY_VAT, PAY_SERVICE_AMT, MCH_SEND_UNIQ_NO … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_LIST_R002.xml:10
- 요소: BPY-ONAF-70-10-S-e07 / 업무: 제로페이 영수증 v2 (화면) / 처리: 읽기 / 테이블: TB_ZEROPAY_TRAN, TB_FIRM_TRAN, TB_BRND_TRAN, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG, TB_BPPAY_TRAN … / 입력: 거래일자, 거래번호, 거래코드, 업무코드, BIZ_CD_NM / 실패: 올바르지 않은 검색 문자가 포함되어있습니다.[0] / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_complete_v2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_complete_v2_act.jsp:18 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_QR_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_PG_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_STORE_MNG_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BPPG_TRAN_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_COMPLEX_TRAN_R001.xml:10
- 요소: 화면 / 업무: 통합 비대면결제 결제 완료(boxpos callback) / 처리: 읽기 / 테이블: TB_ZEROPAY_BOXPOS_TRAN, TB_ZEROPAY_TRAN, TB_ZEROPAY_GIFT_ONAF_TRAN / 입력: TYPE_CD, 거래번호, 거래일자, ORDER_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_complete_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_complete_r001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BOXPOS_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_BOXPOS_TRAN_R003.xml:10
- 요소: BPY-ONAF-70-10-S-e07 / 업무: 비대면결제 모바일상품권 영수증 (화면) / 처리: 미확인 / 입력: ORDER_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_receipt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_receipt_act.jsp:26

--- 정의 ---
- 구분: 기능 / 좌표: id=back_btn / 라벨: 뒤로가기 / 앵커: BPY-ONAF-70-10-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=receipt_btn / 라벨: 전자 영수증 보기 / 앵커: BPY-ONAF-70-10-S-e07 / 해설: 전자 영수증 보기
- 구분: 기능 / 좌표: id=send_message_btn / 라벨: 문자로 공유하기 / 앵커: BPY-ONAF-70-10-S-e08 / 해설: 문자로 공유하기
- 구분: 기능 / 좌표: id=send_kakao_btn / 라벨: 카카오톡으로 공유하기 / 앵커: BPY-ONAF-70-10-S-e09 / 해설: 카카오톡으로 공유하기
- 구분: 기능 / 좌표: id=confirm_btn / 라벨: 확인 / 앵커: BPY-ONAF-70-10-S-e10 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_one_onaf_complete_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
