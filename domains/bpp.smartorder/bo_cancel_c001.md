# 주문 원장 (취소내역) insert (bo_cancel_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-80-S | 비플오더 취소 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- ORDER_ID

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문 원장 (취소내역) insert (TB_BP_AFLT_ODR_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR
- 입력: 결제금액 (AMT), 결제금액 (AMT), ORDER_ID, ORDER_ID, CAN_ST, 회원코드 (MEMB_CD), ORDER_ID, ORDER_TYPE

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_c001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10
