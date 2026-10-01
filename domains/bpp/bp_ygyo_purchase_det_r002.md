# 요기요_주문원장_조회_단건 (bp_ygyo_purchase_det_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-30-10-10-S | 주문내역(상세) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- SHOP_ID
- YGYO_ORDER_ID
- CART_ID

## 출력

- 코드 (CODE)
- MSG
- REC

## 데이터 처리

### 요기요 주문 원장 조회 (TB_YGYO_ODR_R001)

- 종류: SELECT
- 테이블: TB_YGYO_ODR
- 입력: YGYO_ORDER_ID, CART_ID, SHOP_ID, 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_r002_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_R001.xml:10
