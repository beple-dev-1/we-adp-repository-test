--- 꼬리표 ---
id: BPY-EVNT-10-10-S / system: BPY / 기능: 비플페이 앱 > 혜택·이벤트 > 비플페이 혜택 메인 페이지 > 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출 / 과업: []

--- 화면명세 ---
화면명: 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출
목적: 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPY-EVNT-10-S

--- 업무 ---
- 요소: 화면 / 업무: 비플머니 적립내역 상세 (화면) / 처리: 읽기 / 테이블: TB_MNY_REWARD_TRAN, TB_MEMBER_MNY / 입력: 거래번호, 거래일자, 포인트상태명 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.event_reward_history_detail.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/event_reward_history_detail_act.jsp:27 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_REWARD_TRAN_R005.xml:10
- 요소: BPY-EVNT-10-10-S-e14 / 업무: 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출 / 처리: 읽기 / 테이블: TB_MNY_REWARD_TRAN, INFO, TB_MEMBER_MNY, TEST / 입력: 앱코드, 회원코드, 페이지번호, 거래일자 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.event_reward_history_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/event_reward_history_r001_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_REWARD_TRAN_R003.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_REWARD_TRAN_R004.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=btn_all_hist / 라벨: 비플머니 전체내역 / 앵커: BPY-EVNT-10-10-S-e08 / 해설: 비플머니 전체내역
- 구분: 기능 / 좌표: id=btn_prev / 라벨: 이전달 / 앵커: BPY-EVNT-10-10-S-e09 / 해설: 이전달
- 구분: 기능 / 좌표: id=btn_next / 라벨: 다음달 / 앵커: BPY-EVNT-10-10-S-e10 / 해설: 다음달
- 구분: 기능 / 좌표: id=btn_cs / 라벨: 상담 / 앵커: BPY-EVNT-10-10-S-e11 / 해설: 상담
- 구분: 기능 / 좌표: - / 라벨: 닫기 / 앵커: BPY-EVNT-10-10-S-e12 / 해설: 닫기
- 구분: 기능 / 좌표: - / 라벨: 10,000원 소멸예정 포인트를 확인하세요. / 앵커: BPY-EVNT-10-10-S-e13 / 해설: 10,000원 소멸예정 포인트를 확인하세요.
- 구분: 기능 / 좌표: id=btn_more / 라벨: 더보기 / 앵커: BPY-EVNT-10-10-S-e14 / 해설: 더보기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/main/event_reward_history_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
