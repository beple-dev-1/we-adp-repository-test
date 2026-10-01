--- 꼬리표 ---
id: BPG-OBO-80-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 취소 / 과업: []

--- 화면명세 ---
화면명: 비플오더 취소
목적: 비플오더 취소 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 주문 원장 (취소내역) insert / 처리: 쓰기 / 테이블: TB_BP_AFLT_ODR / 입력: 회원코드, ORDER_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_c001_act.jsp:24 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10
- 요소: 화면 / 업무: 비플페이 결제취소 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_MNY_CHRG_WDRW_DTL, TB_YGYO_ODR … / 입력: 원거래주문ID, 원거래주문일자 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_c002_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_QR_MNG_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SALY_SUM_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R004.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_USE_CNCL_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPG_REPR_SUM_C001.xml:10
- 요소: 화면 / 업무: 취소내역 조회 및 유효성 검증 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_APP, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_MNY_CHRG_WDRW_DTL … / 입력: MEMB_NM, MOB_NO, ORDER_DT, DEAL_NO, MANAGER_NAME, 비플가맹점순번, ORDER_ID, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_r001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10
- 요소: 화면 / 업무: 오더퀸(kiosk) 주문취소 전문 호출 / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_BP_KIOSK_CONN, TB_BP_AFLT_ODR_OPT … / 입력: ORDER_ID, ORDER_DT / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_r002_act.jsp:50 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R008.xml:10
- 요소: 화면 / 업무: 주문원장(취소내역) update / 처리: 쓰기 / 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN / 입력: ORDER_ID, ORDER_DT, 회원코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_u001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U001.xml:10
- 요소: 화면 / 업무: 주문원장(취소내역) update / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT / 입력: ORDER_DT, ORDER_ID / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_u002_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ORD_SORT_U001.xml:10

--- 정의 ---
- 구분: 항목 / 좌표: id=bpAfltSeq / 라벨: bpAfltSeq / 앵커: BPG-OBO-80-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=membNm / 라벨: membNm / 앵커: BPG-OBO-80-S-e10 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mobNo / 라벨: mobNo / 앵커: BPG-OBO-80-S-e11 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=orderDt / 라벨: orderDt / 앵커: BPG-OBO-80-S-e12 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=dealNo / 라벨: dealNo / 앵커: BPG-OBO-80-S-e13 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=orderId / 라벨: orderId / 앵커: BPG-OBO-80-S-e14 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=managerName / 라벨: managerName / 앵커: BPG-OBO-80-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=appCd / 라벨: appCd / 앵커: BPG-OBO-80-S-e16 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_cancel_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
