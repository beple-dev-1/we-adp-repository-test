--- 꼬리표 ---
id: BPY-MYAF-20-30-S / system: BPY / 기능: 비플페이 앱 > MY 가맹점 > MY 가맹점 기본 프로필 정보 수정 화면 > 가맹점 프로필 > 영업시간 수정 / 과업: []

--- 화면명세 ---
화면명: 가맹점 프로필 > 영업시간 수정
목적: 가맹점 프로필 > 영업시간 수정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-MYAF-20-S

--- 업무 ---
- 요소: BPY-MYAF-20-30-S-e09 / 업무: MY 가맹점 영업시간 등록/수정 정보 반영 / 처리: 읽기·쓰기 / 테이블: TB_AFFILIATION_MY_WT_INFO_HIST, TB_AFFILIATION_MY_WT_INFO, TEMP, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP … / 입력: DAY_INFO, 가맹점ID, ETC_INFO / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_wt_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_wt_c001_act.jsp:32 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_HIST_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_C001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_back / 라벨: 뒤로가기 / 앵커: BPY-MYAF-20-30-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: - / 라벨: 휴무일 / 앵커: BPY-MYAF-20-30-S-e07 / 해설: 휴무일
- 구분: 기능 / 좌표: - / 라벨: 선택한 요일 수정 / 앵커: BPY-MYAF-20-30-S-e08 / 해설: 선택한 요일 수정
- 구분: 기능 / 좌표: id=save_btn / 라벨: 저장 / 앵커: BPY-MYAF-20-30-S-e09 / 해설: 저장
- 구분: 항목 / 좌표: id=etc_info / 라벨: ex) 라스트 오더 22:00, 둘째 주 일요일 쉽니다. / 앵커: BPY-MYAF-20-30-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/my_aflt_update_wt_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
