# 배송지 상세장소 (ent_afltbo_aff_delv_detail)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-20-20-S | 세부 장소 | 화면 |

## 입력

- 직원상태 (STATUS)
- DELV_SEQ

## 출력

- REC_DELV
- REC

## 데이터 처리

### 딜리버리 세부장소 조회 (TB_CAFETERIA_DELV_DETAIL_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV_DETAIL
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 직원상태 (STATUS), 직원상태 (STATUS), DELV_SEQ, DELV_SEQ

### 딜리버리 장소 카테고리 조회 (TB_CAFETERIA_DELV_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DELV_NM, DELV_NM, DELV_STATUS, DELV_STATUS

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10
