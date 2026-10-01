# 그린메세지 발송 (comm_send_green_msg)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-10-S | 주문내역 상세 | 화면 |
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| BPG-ORDR-10-S | 비플오더 장바구니 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |
| HIT-ORDR-16-S | 장바구니 조회 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- MESSAGE
- RECV_USER_MOB_NO

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.comm_send_green_msg.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/com/comm_send_green_msg_act.jsp:29
