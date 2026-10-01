--- 꼬리표 ---
id: EXW-UWV-50-10-S / system: EXW / 기능: 외부제공 웹뷰 > 통합웹뷰API > 비플머니 > 기본정보 / 과업: []

--- 화면명세 ---
화면명: 기본정보
목적: 기본정보 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 웹뷰 API - 공통 암호화 봉투를 재생성하는 공통 웹서비스 / 처리: 미확인 / 입력: 이용기관ID, DATA, MERGE_DETAIL, NAV_ACTION, NAV_URL / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_envelope_v1.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_envelope_v1_act.jsp:25
- 요소: 화면 / 업무: 웹뷰 API - 소멸예정 비플머니(통합웹뷰버전) (화면) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI / 입력: 이용기관ID, DATA, 반환URL / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_expire_v1.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_expire_v1_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- 요소: 화면 / 업무: 웹뷰 API - 비플머니 v2 이용내역 조회 ACTION / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_MEMBER_MNY, TB_MNY_TRAN_MST, TB_MNY_ACU_DTL … / 입력: 이용기관ID, 요청봉투, 조회시작일, 조회종료일, 카테고리, 페이지번호, 페이지크기, 직전페이지 마지막 거래번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_v2_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_v2_r001_act.jsp:35 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R012.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R024.xml:10
- 요소: EXW-UWV-50-10-S-e01 / 업무: 웹뷰 API - 비플머니 상세 조회 ACTION(v2) / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI, TB_MEMBER_MNY, TB_MNY_TRAN_MST, TB_MNY_ACU_DTL / 입력: 이용기관ID, 요청봉투 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_v2_r002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_v2_r002_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R023.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R022.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: id=btnBalanceDetail / 라벨: popup-beple-money-detail / 앵커: EXW-UWV-50-10-S-e01 / 이동modal: popup-beple-money-detail / 해설: popup-beple-money-detail 팝업 열기
- 구분: 이동 / 좌표: id=btnFilterPeriod / 라벨: 3개월 / 앵커: EXW-UWV-50-10-S-e02 / 이동modal: popup-history--filter / 해설: popup-history--filter 팝업 열기
- 구분: 이동 / 좌표: id=btnFilterType / 라벨: 이용구분 / 앵커: EXW-UWV-50-10-S-e03 / 이동modal: popup-history--filter / 해설: popup-history--filter 팝업 열기
- 구분: 기능 / 좌표: id=btnWithdraw / 라벨: 출금하기 / 앵커: EXW-UWV-50-10-S-e04 / 해설: 출금하기
- 구분: 기능 / 좌표: id=btnCharge / 라벨: 충전하기 / 앵커: EXW-UWV-50-10-S-e05 / 해설: 충전하기
- 구분: 기능 / 좌표: id=btnExpire / 라벨: 5,000 원 소멸예정 비플머니를 확인하세요. / 앵커: EXW-UWV-50-10-S-e06 / 해설: 5,000 원 소멸예정 비플머니를 확인하세요.
- 구분: 기능 / 좌표: id=btnClose / 라벨: 닫기 / 앵커: EXW-UWV-50-10-S-e07 / 해설: 닫기
- 구분: 이동 / 좌표: id=btnUseInfo / 라벨: 이용안내 / 앵커: EXW-UWV-50-10-S-e09 / 이동modal: popup-use-info / 해설: popup-use-info 팝업 열기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/wapi/zero_webview_money_v2_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
