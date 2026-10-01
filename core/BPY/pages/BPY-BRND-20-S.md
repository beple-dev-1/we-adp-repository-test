--- 꼬리표 ---
id: BPY-BRND-20-S / system: BPY / 기능: 비플페이 앱 > 브랜드상품권 > 브랜드상품권 회원 서비스 중지 / 과업: []

--- 화면명세 ---
화면명: 브랜드상품권 회원 서비스 중지
목적: 브랜드상품권 회원 서비스 중지 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 엔터프라이즈 - 휴대폰 본인인증 요청 / 처리: 미확인 / 입력: 휴대폰번호, 회원명, 생년월일, 성별, 내외국인구분, 통신사, 재전송여부, 거래번호, 주민번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_member_stop_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_member_stop_c001_act.jsp:41
- 요소: 화면 / 업무: 브랜드상품권 웹뷰 API 휴대폰 본인인증 확인 / 처리: 읽기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: 휴대폰번호, 거래번호, 인증번호, 회원명, 생년월일, 내외국인구분, 통신사, PUSH_ID, 마켓팅 정보 수신동의여부, BRT_GNDR … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_member_stop_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_member_stop_u001_act.jsp:42 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_BRND_R001.xml:10
- 요소: 화면 / 업무: 사용자정보_상태변경 / 처리: 쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: 회원코드, 앱코드, 회원명, 휴대폰번호 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_member_stop_u002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_member_stop_u002_act.jsp:37 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_BRND_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_BRND_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 열기/닫기 / 앵커: BPY-BRND-20-S-e10 / 해설: 열기/닫기
- 구분: 기능 / 좌표: - / 라벨: 보기 / 앵커: BPY-BRND-20-S-e11 / 해설: 보기
- 구분: 기능 / 좌표: id=teleCorp / 라벨: 통신사 / 앵커: BPY-BRND-20-S-e12 / 해설: 통신사
- 구분: 기능 / 좌표: - / 라벨: 인증번호 요청 / 앵커: BPY-BRND-20-S-e13 / 해설: 인증번호 요청
- 구분: 기능 / 좌표: id=btn / 라벨: 인증 / 앵커: BPY-BRND-20-S-e14 / 해설: 인증
- 구분: 항목 / 좌표: - / 라벨: 이름(실명)을 입력해주세요. / 앵커: BPY-BRND-20-S-e15 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 주민번호 앞자리 / 앵커: BPY-BRND-20-S-e16 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=mobNo / 라벨: 휴대폰번호 / 앵커: BPY-BRND-20-S-e17 / 해설: 입력 칸
- 구분: 항목 / 좌표: - / 라벨: 인증번호 6자리 / 앵커: BPY-BRND-20-S-e18 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/brnd/brnd_gift_member_stop_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
