--- 꼬리표 ---
id: BPG-OBO-10-30-30-S / system: BPG / 기능: 비플PG > 비플오더 점주 백오피스 > 비플오더 관리 메인 > 비플오더 주문형태 선택 > 비플오더 주문가능수량 설정 수정 / 과업: []

--- 화면명세 ---
화면명: 비플오더 주문가능수량 설정 수정
목적: 비플오더 주문가능수량 설정 수정 화면이다.

--- IA ---
- 종류: 화면 / 상위화면: BPG-OBO-10-30-S

--- 업무 ---
- 요소: BPG-OBO-10-30-30-S-e07 / 업무: 비플오더 주문가능수량 설정 수정 / 처리: 쓰기 / 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, UPSERT / 입력: 비플가맹점순번, 최소주문수량, MAX_ORDER_QTY, 수량제한없음 여부 / 근거: BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_odr_qty_u001.xml:6 · BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_odr_qty_u001_act.jsp:26 · BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U001.xml:10

--- 정의 ---
- 구분: 기능 / 좌표: id=back / 라벨: 뒤로가기 / 앵커: BPG-OBO-10-30-30-S-e06 / 해설: 뒤로가기
- 구분: 기능 / 좌표: id=save / 라벨: 저장 / 앵커: BPG-OBO-10-30-30-S-e07 / 해설: 저장
- 구분: 항목 / 좌표: id=minOdrQty / 라벨: 최소수량 / 앵커: BPG-OBO-10-30-30-S-e08 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=maxOdrQty / 라벨: 최대수량 / 앵커: BPG-OBO-10-30-30-S-e09 / 해설: 입력 칸
- 구분: 항목 / 좌표: id=noLimitQtyYn / 라벨: noLimitQtyYn / 앵커: BPG-OBO-10-30-30-S-e10 / 해설: 입력 칸

--- 원본 글 ---
> 역추출 소스: BIZ_ZEROPAY/web/view/jex/biz_zeropay/bpp/smartorder/bo_my_odr_qty_view.jsp
> page2md 가 html 에서 기계로 뽑음 — 좌표 · 해설은 사람이 고치면 다음 추출에도 남는다.
