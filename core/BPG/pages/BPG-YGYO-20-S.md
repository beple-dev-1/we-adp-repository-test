--- 꼬리표 ---
id: BPG-YGYO-20-S / system: BPG / 기능: 비플PG > 요기요 제휴 > 요기요 장바구니 / 과업: []

--- 화면명세 ---
화면명: 요기요 장바구니
목적: 요기요 장바구니 화면이다.

--- IA ---
- 종류: 화면 / 상위화면:

--- 업무 ---
- 요소: 화면 / 업무: 요기요 가맹점 상세(Y211) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
- 요소: 화면 / 업무: 요기요 메뉴상세(Y220) (화면) / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_menu.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_menu_act.jsp:43
- 요소: BPG-YGYO-20-S-e10, BPG-YGYO-20-S-e11 / 업무: 요기요 장바구니 업데이트 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_mybag_c002.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_mybag_c002_act.jsp:43
- 요소: 화면 / 업무: 요기요 장바구니 조회 / 미확인: 외부 API 호출(IDO 없음) / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_mybag_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_mybag_r001_act.jsp:42
- 요소: 화면 / 업무: 요기요 결제 (화면) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG, TB_MEMBER_MNY, TB_BP_AFLT_REQ … / 입력: YGYO_RETURN_VALUE_MEAL_PARAM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_pay.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_pay_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_REQ_R001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: - / 라벨: 메뉴 빼기 / 앵커: BPG-YGYO-20-S-e07 / 해설: 메뉴 빼기
- 구분: 기능 / 좌표: - / 라벨: 홍길동 툴팁보기 홍길동 툴팁보기 / 앵커: BPG-YGYO-20-S-e08 / 해설: 홍길동 툴팁보기 홍길동 툴팁보기
- 구분: 기능 / 좌표: - / 라벨: 뒤로가기 / 앵커: BPG-YGYO-20-S-e09 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=plus / 라벨: 수량추가 / 앵커: BPG-YGYO-20-S-e10 / 해설: 수량추가
- 구분: 기능 / 좌표: id=minus / 라벨: 수량빼기 / 앵커: BPG-YGYO-20-S-e11 / 해설: 수량빼기
- 구분: 기능 / 좌표: - / 라벨: + 더 담으러 가기 / 앵커: BPG-YGYO-20-S-e12 / 해설: + 더 담으러 가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/bp_ygyo_mybag_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
