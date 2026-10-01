# 요기요 장바구니 업데이트 (bp_ygyo_mybag_c002)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-10-20-S | 요기요 메뉴상세(Y220) | 화면 |
| BPG-YGYO-20-S | 요기요 장바구니 | BPG-YGYO-20-S-e10, BPG-YGYO-20-S-e11 |

## 입력

- shop_id
- lat
- lng
- cartRequest
- cart_id

## 출력

- shop_id
- lat
- lng
- cartResponse
- cartRequest

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_mybag_c002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_mybag_c002_act.jsp:43
