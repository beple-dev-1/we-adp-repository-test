# 주문 원장 (취소내역) insert (smt_odr_purchase_info_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-10-S | 주문내역 상세 | 화면 |
| BPG-OBO-10-10-10-S | 주문 내역 상세 | 화면 |
| BPG-OBO-10-10-20-S | 주문 거부 사유 | BPG-OBO-10-10-20-S-e05 |
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- ORDER_ID
- ORDER_TYPE
- 취소상태 (CAN_ST)
- 결제금액 (AMT)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문 원장 (취소내역) insert (TB_BP_AFLT_ODR_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_ODR
- 입력: 결제금액 (AMT), 결제금액 (AMT), ORDER_ID, ORDER_ID, CAN_ST, 회원코드 (MEMB_CD), ORDER_ID, ORDER_TYPE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_c001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_C001.xml:10
