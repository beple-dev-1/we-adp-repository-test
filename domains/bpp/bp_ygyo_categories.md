# 요기요_카테고리 목록 조회 (bp_ygyo_categories)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-30-10-S | 요기요 가게 목록(정렬·지도) | 화면 |
| BPG-YGYO-30-S | 요기요_메인화면 | 화면 |

## 입력

- TYPE
- LAT
- LNG
- ORDER_SERVING_TYPE
- 맴버십 타입 (MEMBERSHIP_TYPE)

## 출력

- 코드 (CODE)
- JDATA
- MSG

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_categories.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_categories_act.jsp:18
