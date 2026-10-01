--- 꼬리표 ---
id: EXW-UWV-70-30-60-C / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 제휴기관 파생 화면 > 에이블리 > 비플머니 출금 / 과업: []

--- 화면명세 ---
화면명: 비플머니 출금
목적: 비플머니 출금 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 웹뷰 API - 비플머니 출금 실행 ACTION(통합웹뷰버전) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_ACCOUNT, TB_MEMBER_MNY, TB_MNY_ACU_DTL … / 입력: 이용기관ID, 요청부, 출금금액, 은행코드, 계좌번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_withdraw_v1_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_withdraw_v1_c001_act.jsp:40 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R011.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_ACU_DTL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 출금계좌 및 잔액조회 ACTION(통합웹뷰버전) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_MEMBER_MNY, TB_MNY_ACU_DTL, TB_BANK … / 입력: 이용기관ID, 요청부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_withdraw_v1_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_withdraw_v1_r001_act.jsp:34 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R010.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R024.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 출금가능 비플머니 / 앵커: EXW-UWV-70-30-60-C-e01 / 이동modal: popup-transper--info / 해설: popup-transper--info 팝업 열기
- 구분: 기능 / 좌표: - / 라벨: +1만원 / 앵커: EXW-UWV-70-30-60-C-e03 / 해설: +1만원
- 구분: 기능 / 좌표: - / 라벨: +5만원 / 앵커: EXW-UWV-70-30-60-C-e04 / 해설: +5만원
- 구분: 기능 / 좌표: - / 라벨: +10만원 / 앵커: EXW-UWV-70-30-60-C-e05 / 해설: +10만원
- 구분: 기능 / 좌표: - / 라벨: 전액 / 앵커: EXW-UWV-70-30-60-C-e06 / 해설: 전액
- 구분: 기능 / 좌표: - / 라벨: 출금 안내 출금 안내 열기 / 앵커: EXW-UWV-70-30-60-C-e07 / 해설: 출금 안내 출금 안내 열기
- 구분: 기능 / 좌표: id=btnClose / 라벨: 닫기 / 앵커: EXW-UWV-70-30-60-C-e09 / 해설: 닫기
- 구분: 기능 / 좌표: id=btnNext / 라벨: 다음 / 앵커: EXW-UWV-70-30-60-C-e10 / 해설: 다음
- 구분: 항목 / 좌표: id=inpAmt / 라벨: 금액을 입력해주세요 / 앵커: EXW-UWV-70-30-60-C-e11 / 해설: 입력 칸
- 구분: 이동 / 좌표: id=btnSelectAccount / 라벨: 입금계좌 / 앵커: EXW-UWV-70-30-60-C-e13 / 이동modal: popup-select--bank / 해설: popup-select--bank 팝업 열기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_webview_money_withdraw_aby_v1_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
