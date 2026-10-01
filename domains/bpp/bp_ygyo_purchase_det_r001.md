# 주문내역 조회(상세) (bp_ygyo_purchase_det_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-30-10-10-S | 주문내역(상세) | 화면 |

## 입력

- shop_id
- shop_name
- lat
- lng
- order_id
- cart_id

## 출력

- shop_id
- shop_name
- lat
- lng
- order_id
- cart_id
- ORDERS
- BARCODES_YOGIYO_URL
- 배달지원여부 (DLVR_SPRT_YN)

## 데이터 처리

### 요기요 원장 조회(by order_id) (TB_YGYO_ODR_R004)

- 종류: SELECT
- 테이블: TB_YGYO_ODR, TB_BPPAY_TRAN
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_r001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_YGYO_ODR_R004.xml:10
