# 요기요 가맹점 상세(Y211) (bp_ygyo_aflt)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-30-10-10-S | 주문내역(상세) | 화면 |
| BPG-HIST-30-10-S | 주문내역(메인) | 화면 |
| BPG-YGYO-20-S | 요기요 장바구니 | 화면 |
| BPG-YGYO-30-10-S | 요기요 가게 목록(정렬·지도) | 화면 |
| BPG-YGYO-30-20-S | 요기요 즐겨찾기 등록매장 | 화면 |
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |
| BPG-YGYO-50-S | 요기요 가게 검색 | 화면 |

## 입력

- shop_id
- lat
- lng
- type

## 출력

- shop_id
- lat
- lng

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_aflt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_aflt_act.jsp:42
