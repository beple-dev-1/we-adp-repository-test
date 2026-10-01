--- 꼬리표 ---
id: BPY-MNY-10-10-S / system: BPY / 기능: 비플페이 앱 > 비플머니 > 비플머니 기본정보 > 비플머니 충전 / 과업: []

--- 화면명세 ---
화면명: 비플머니 충전
목적: 비플머니 충전 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MNY-10-S

--- 업무 ---
- 요소: 화면 / 업무: 약관상세조회 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 사용구분, 은행코드, 이용기관ID, CLS_CD / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.detail_clause.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/detail_clause_act.jsp:28 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R004.xml:10
- 요소: 화면 / 업무: 은행별 약관조히 / 처리: 읽기 / 테이블: TB_CLAUSE / 입력: 은행코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.set_clause_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/set_clause_r001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R005.xml:10
- 요소: 화면 / 업무: 비플머니 충전 (화면) / 처리: 읽기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_TRAN_MST / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_mny_chrg.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_mny_chrg_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
- 요소: 화면 / 업무: 비플머니 충전 > 충전 및 출금이체 / 처리: 읽기·쓰기 / 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB, TB_MEMBER_APP, TB_MNY_TRAN_MST, TB_MEMBER_MNY … / 입력: AMT, BANK_CD, ACCT_NO, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_mny_chrg_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_mny_chrg_c001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_U001.xml:10
- 요소: 화면 / 업무: 비플머니 > 계좌신고 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB / 입력: 은행 코드, 계좌 번호, PROV_AGR_YN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_mny_chrg_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_mny_chrg_c002_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-MNY-10-10-S-e10 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=acct_info / 라벨: 비플머니 / 앵커: BPY-MNY-10-10-S-e11 / 해설: 비플머니
- 구분: 기능 / 좌표: - / 라벨: 내용삭제 / 앵커: BPY-MNY-10-10-S-e12 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=man / 라벨: +1만원 / 앵커: BPY-MNY-10-10-S-e13 / 해설: +1만원
- 구분: 기능 / 좌표: id=fiveman / 라벨: +5만원 / 앵커: BPY-MNY-10-10-S-e14 / 해설: +5만원
- 구분: 기능 / 좌표: id=temman / 라벨: +10만원 / 앵커: BPY-MNY-10-10-S-e15 / 해설: +10만원
- 구분: 기능 / 좌표: id=open_chrg_info / 라벨: 충전하기 / 앵커: BPY-MNY-10-10-S-e16 / 해설: 충전하기
- 구분: 항목 / 좌표: id=tr_amt / 라벨: 금액을 입력해 주세요 / 앵커: BPY-MNY-10-10-S-e17 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_mny_chrg_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
