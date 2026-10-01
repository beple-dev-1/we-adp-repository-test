# 알림함 -> 상세 진입위한 단골상품권 상품권ID내역 조회(initOrderId) (dangol_giftcard_tran_list_r002)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(IDO 동적 이름)

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |
| HIT-COMN-20-10-S | 엔터프라이즈 - 알림함 | 화면 |

## 입력

- zppId
- bpAfltId
- initOrderId
- BPAFLTID
- INITORDERID

## 출력

- refundExpAmt
- zppNoList
- refundNoList
- curPrice
- zppNo
- zppId
- giftAvailYn
- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

- (IDO 호출 없음) — IDO 동적 이름

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.dangol_giftcard_tran_list_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/dangol/dangol_giftcard_tran_list_r002_act.jsp:35
