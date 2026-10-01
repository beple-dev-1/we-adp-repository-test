--- 꼬리표 ---
id: BPG-PGM-20-10-S / system: BPG / 기능: 비플PG > 비플PG 회원·계좌 > 비플pg 사용자 인증 > 거래승인번호검증(v2) / 과업: []

--- 화면명세 ---
화면명: 거래승인번호검증(v2)
목적: 거래승인번호검증(v2) 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-PGM-20-S

--- 업무 ---
- 요소: 화면 / 업무: api_v2_payment_reserve.act / 미확인: WSVC 없음 / 근거: api_v2_payment_reserve.act (WSVC 없음)
- 요소: 화면 / 업무: 거래승인번호 등록 / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: PASSWORD_ID, PASSWORD_ID_CONFIRM, MEMB_CD, MOB_NO, APP_CD, MEMB_NM / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_bppg_v2_pwd_confirm_c001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/bppg/zero_bppg_v2_pwd_confirm_c001_act.jsp:33 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R031.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- 요소: 화면 / 업무: 거래승인번호검증(v2) / 처리: 읽기·쓰기 / 테이블: TB_MEMBER, TB_MEMBER_APP / 입력: MEMB_NM, MOB_NO, TRX_PWD, MEMB_CI, 앱코드 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_bppg_v2_pwd_confirm_r001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/bppg/zero_bppg_v2_pwd_confirm_r001_act.jsp:31 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R031.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=closeBtn / 라벨: 페이지 닫기 / 앵커: BPG-PGM-20-10-S-e04 / 해설: 페이지 닫기
- 구분: 기능 / 좌표: - / 라벨: 거래승인번호 재설정 > / 앵커: BPG-PGM-20-10-S-e05 / 해설: 거래승인번호 재설정 >
- 구분: 기능 / 좌표: - / 라벨: 확인 / 앵커: BPG-PGM-20-10-S-e06 / 해설: 확인

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/zero/bppg/zero_bppg_v2_pwd_confirm_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
