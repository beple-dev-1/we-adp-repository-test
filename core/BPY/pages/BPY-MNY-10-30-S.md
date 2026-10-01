--- 꼬리표 ---
id: BPY-MNY-10-30-S / system: BPY / 기능: 비플페이 앱 > 비플머니 > 비플머니 기본정보 > 비플머니 출금 / 과업: []

--- 화면명세 ---
화면명: 비플머니 출금
목적: 비플머니 출금 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MNY-10-S

--- 업무 ---
- 요소: 화면 / 업무: 비플머니 출금 > 출금거래등록 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL, TB_MNY_CHRG_WDRW_DTL, TB_MNY_TRAN_MST, TB_ALARM_INFO / 입력: AMT, BANK_CD, ACCT_NO, TOKEN / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_mny_wdrw_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_mny_wdrw_c001_act.jsp:29 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R013.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_ACU_DTL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: BPY-MNY-10-30-S-e10 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=acct_info / 라벨: 국민은행()계좌 / 앵커: BPY-MNY-10-30-S-e11 / 해설: 국민은행()계좌
- 구분: 기능 / 좌표: - / 라벨: 내용삭제 / 앵커: BPY-MNY-10-30-S-e12 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=cash_all / 라벨: 전액출금 / 앵커: BPY-MNY-10-30-S-e13 / 해설: 전액출금
- 구분: 기능 / 좌표: id=open_wdrw_info / 라벨: 신청하기 / 앵커: BPY-MNY-10-30-S-e14 / 해설: 신청하기
- 구분: 기능 / 좌표: id=com_close / 라벨: 페이지나가기 / 앵커: BPY-MNY-10-30-S-e15 / 해설: 페이지나가기
- 구분: 기능 / 좌표: id=com_complete / 라벨: 확인 / 앵커: BPY-MNY-10-30-S-e16 / 해설: 확인
- 구분: 항목 / 좌표: id=tr_amt / 라벨: 금액을 입력해 주세요 / 앵커: BPY-MNY-10-30-S-e17 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/zero_mny_wdrw_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
