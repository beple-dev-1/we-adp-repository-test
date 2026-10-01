--- 꼬리표 ---
id: EXW-UWV-70-30-20-C / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 제휴기관 파생 화면 > 에이블리 > 비플머니 충전 / 과업: []

--- 화면명세 ---
화면명: 비플머니 충전
목적: 비플머니 충전 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 웹뷰 API - 비플머니 충전 실행 ACTION(v2) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MNY_CHRG_WDRW_DTL … / 입력: 이용기관ID, 요청부, 충전금액, 은행코드, 계좌번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_charge_v2_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_charge_v2_c001_act.jsp:44 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_U001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 비플머니 충전 v2 조회 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_MEMBER_MNY, TB_MNY_TRAN_MST / 입력: 이용기관ID, 요청봉투 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_charge_v2_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_charge_v2_r001_act.jsp:36 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: id=btnSelectAccount / 라벨: 충전계좌 / 앵커: EXW-UWV-70-30-20-C-e01 / 이동modal: popup-select--bank / 해설: popup-select--bank 팝업 열기
- 구분: 기능 / 좌표: - / 라벨: +5만원 / 앵커: EXW-UWV-70-30-20-C-e03 / 해설: +5만원
- 구분: 기능 / 좌표: - / 라벨: +10만원 / 앵커: EXW-UWV-70-30-20-C-e04 / 해설: +10만원
- 구분: 기능 / 좌표: - / 라벨: 충전 안내 충전 안내 열기 / 앵커: EXW-UWV-70-30-20-C-e05 / 해설: 충전 안내 충전 안내 열기
- 구분: 기능 / 좌표: id=btnClose / 라벨: 닫기 / 앵커: EXW-UWV-70-30-20-C-e06 / 해설: 닫기
- 구분: 기능 / 좌표: id=btnNext / 라벨: 다음 / 앵커: EXW-UWV-70-30-20-C-e07 / 해설: 다음
- 구분: 항목 / 좌표: id=inpAmt / 라벨: 금액을 입력해주세요 / 앵커: EXW-UWV-70-30-20-C-e08 / 해설: 입력 칸
- 구분: 기능 / 좌표: - / 라벨: +2만원 / 앵커: EXW-UWV-70-30-20-C-e10 / 해설: +2만원

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_webview_money_charge_aby_v1_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
