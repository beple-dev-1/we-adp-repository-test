--- 꼬리표 ---
id: BPG-OBO-70-20-10-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 가입 3/3 — 주문 서비스 기본 설정 > 비플오더 가입 2/3 — 업종·대표번호 확인 > 비플오더 가입 1/3 — 기본정보 확인 / 과업: []

--- 화면명세 ---
화면명: 비플오더 가입 1/3 — 기본정보 확인
목적: 비플오더 가입 1/3 — 기본정보 확인 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-70-20-S

--- 업무 ---
- 요소: 화면 / 업무: 비플오더가입 업종,대표번호확인 (화면) / 처리: 읽기·쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, UPSERT, TB_BP_AFLT_ODR, TB_AFFILIATION_MY, TB_CTGR_CATG … / 입력: BP_AFLT_SEQ / 실패: PG 가맹점 등록 통지 API 호출 실패 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_chk2.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_chk2_act.jsp:22 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U001.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R017.xml:10 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_U001.xml:10

--- 정의 ---
- 구분: 이동 / 좌표: - / 라벨: 다음 / 앵커: BPG-OBO-70-20-10-S-e03 / 이동: BPG-OBO-70-20-S / 해설: 다음
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OBO-70-20-10-S-e04 / 해설: 뒤로가기

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bp_aflt_my_chk1_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
