# 오피스푸드 주문내역 상세 - 금액 (bp_aflt_deliv_purchase_info_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-20-10-S | 오피스푸드(식사배송) 구매내역 상세 - 조회 | 화면 |

## 입력

- ORDER_ID
- 주문유형 (ORDER_TYPE)

## 출력

- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 오피스푸드 주문내역 상세 - 금액 (TB_BP_AFLT_ODR_R021)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: ORDER_ID, ORDER_ID, ORDER_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r003_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R021.xml:10
