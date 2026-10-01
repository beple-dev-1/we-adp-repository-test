--- 꼬리표 ---
id: BPG-OBO-10-20-10-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 관리 메인 > 비플오더 주문서비스 설정 > 최소 시간 / 과업: []

--- 화면명세 ---
화면명: 최소 시간
목적: 최소 시간 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-10-20-S

--- 업무 ---
- 요소: BPG-OBO-10-20-10-S-e05 / 업무: 비플오더 주문완료시간 수정 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, UPSERT / 입력: BP_AFLT_ID, BP_AFLT_ST, REPR_MOB_NO, AFLT_TEL_NO, 가맹점명, AFLT_ADDRS, 가맹점주소2, CTGR_CATG_CD, AFLT_ZIP_CD, LAT … / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_odr_tm_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_odr_tm_u001_act.jsp:21 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OBO-10-20-10-S-e04 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=save / 라벨: 저장 / 앵커: BPG-OBO-10-20-10-S-e05 / 해설: 저장
- 구분: 항목 / 좌표: id=mnfMinTm / 라벨: 시간 입력(분) / 앵커: BPG-OBO-10-20-10-S-e06 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_odr_tm_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
