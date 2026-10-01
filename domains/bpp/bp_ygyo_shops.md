# 요기요_가게목록조회 (bp_ygyo_shops)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-30-10-S | 요기요 가게 목록(정렬·지도) | 화면 |
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- LAT
- LNG
- START
- LENGTH
- CATEGORY_CODE
- SERVING_TYPE
- MAXIMUM_DELIVERY_FEE
- HYGIENE
- SORT
- MINIMUM_ORDER_AMOUNT

## 출력

- 코드 (CODE)
- MSG
- JDATA

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_shops.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_shops_act.jsp:34
