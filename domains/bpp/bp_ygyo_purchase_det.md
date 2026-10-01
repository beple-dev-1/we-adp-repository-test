# 주문내역(상세) (bp_ygyo_purchase_det)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-30-10-S | 주문내역(메인) | 화면 |
| BPG-YGYO-20-10-S | 요기요 결제 | 화면 |
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

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

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_purchase_det.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_purchase_det_act.jsp:42
