# 오피스푸드(식사배송) 주문내역 상세 -2 (bp_aflt_deliv_purchase_info_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-20-10-S | 오피스푸드(식사배송) 구매내역 상세 - 조회 | 화면 |
| BPG-OFFD-20-10-S | 오피스푸드(식사배송) 주문내역 취소 | 화면 |

## 입력

- ORDER_ID
- 주문처리상태 (ORDER_PROC_ST)
- 다이나믹 쿼리 사용여부 (DYNAMIC_YN)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### 오피스푸드(식사배송) 주문내역 상세 -2 (TB_BP_AFLT_DELIV_ODR_MENU_R001)

- 종류: SELECT
- 테이블: CAST, TB_BP_AFLT_DELIV_ODR_MENU, TB_BP_AFLT_DELIV_MENU, TB_BP_AFLT_ODR, TB_BPPAY_TRAN
- 입력: ORDER_ID, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_purchase_info_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_purchase_info_r002_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_ODR_MENU_R001.xml:10
