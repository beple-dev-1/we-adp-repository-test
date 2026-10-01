--- 꼬리표 ---
id: HIT-MNY-10-30-S / system: HIT / 기능: 힛플러스 > 비플머니 > 엔터프라이즈_비플머니 기본정보 > 엔터프라이즈_비플머니 출금 / 과업: []

--- 화면명세 ---
화면명: 엔터프라이즈_비플머니 출금
목적: 엔터프라이즈_비플머니 출금 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: HIT-MNY-10-S

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈_비플머니 출금 > 출금거래등록 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_CHRG_WDRW_DTL, TB_MNY_ACU_DTL, TB_MNY_TRAN_MST, TB_ALARM_INFO / 입력: AMT, BANK_CD, ACCT_NO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_zero_mny_wdrw_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pay/ent_zero_mny_wdrw_c001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_ACU_DTL_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_CHRG_WDRW_DTL_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=wdrw / 라벨: 신청하기 / 앵커: HIT-MNY-10-30-S-e11 / 해설: 신청하기
- 구분: 기능 / 좌표: - / 라벨: 팝업닫기 / 앵커: HIT-MNY-10-30-S-e12 / 해설: 팝업닫기
- 구분: 기능 / 좌표: id=go_back / 라벨: 뒤로가기 / 앵커: HIT-MNY-10-30-S-e13 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=acct_info / 라벨: 국민은행()계좌 / 앵커: HIT-MNY-10-30-S-e14 / 해설: 국민은행()계좌
- 구분: 기능 / 좌표: - / 라벨: 내용삭제 / 앵커: HIT-MNY-10-30-S-e15 / 해설: 내용삭제
- 구분: 기능 / 좌표: id=cash_all / 라벨: 전액출금 / 앵커: HIT-MNY-10-30-S-e16 / 해설: 전액출금
- 구분: 기능 / 좌표: id=com_close / 라벨: 닫기 / 앵커: HIT-MNY-10-30-S-e17 / 해설: 닫기
- 구분: 기능 / 좌표: id=com_complete / 라벨: 확인 / 앵커: HIT-MNY-10-30-S-e18 / 해설: 확인
- 구분: 항목 / 좌표: id=tr_amt / 라벨: 금액을 입력해 주세요 / 앵커: HIT-MNY-10-30-S-e19 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/ent/pay/ent_zero_mny_wdrw_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
