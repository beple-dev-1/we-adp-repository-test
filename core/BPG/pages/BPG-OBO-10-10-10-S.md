--- 꼬리표 ---
id: BPG-OBO-10-10-10-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 관리 메인 > 주문 내역 > 주문 내역 상세 / 과업: []

--- 화면명세 ---
화면명: 주문 내역 상세
목적: 주문 내역 상세 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-10-10-S

--- 업무 ---
- 요소: 화면 / 업무: 처리 호출(동적 id) / 미확인: 동적 id(식으로 만든 이름) / 근거: bo_my_list_det:77
- 요소: 화면 / 업무: 비플오더 주문서비스 영업시간관리 (화면) / 처리: 읽기 / 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR_OPT, ORDER_TABLE, TB_BPPAY_TRAN, TB_BP_AFLT_ORD_SORT / 입력: ORDER_DT, ORDER_ID, ORDER_TYPE / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_list_det.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_list_det_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R012.xml:10
- 요소: 화면 / 업무: 비플페이 결제취소 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_YGYO_ODR, TB_MNY_CHRG_WDRW_DTL … / 입력: 원거래주문ID, 원거래주문일자, 서비스채널 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.com_bppay_cancel.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/com_bppay_cancel_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_QR_MNG_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SALY_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPG_REPR_SUM_C001.xml:10
- 요소: 화면 / 업무: 주문 원장 (취소내역) insert / 처리: 쓰기 / 테이블: TB_BP_AFLT_ODR / 입력: 회원코드, ORDER_ID, ORDER_TYPE, 취소상태, 결제금액 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10
- 요소: 화면 / 업무: 주문원장(취소내역) update / 처리: 쓰기 / 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN / 입력: 처리상태, ORDER_ID, ORDER_DT, ORDER_PROC_ST, CAN_DEVICE, 회원코드, CAN_RJCT_CD, CAN_RJCT_TX / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_u001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OBO-10-10-10-S-e05 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=reject / 라벨: 거절 / 앵커: BPG-OBO-10-10-10-S-e06 / 해설: 거절
- 구분: 기능 / 좌표: id=accept / 라벨: 주문접수를 진행해주세요 접수 / 앵커: BPG-OBO-10-10-10-S-e07 / 해설: 주문접수를 진행해주세요 접수
- 구분: 기능 / 좌표: id=success / 라벨: 제조가 완료되면 눌러주세요 제조완료 / 앵커: BPG-OBO-10-10-10-S-e08 / 해설: 제조가 완료되면 눌러주세요 제조완료

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_list_det_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
