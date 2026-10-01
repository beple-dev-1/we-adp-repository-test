# 배송지 상세장소 수정 (ent_afltbo_aff_delv_detail_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-20-20-S | 세부 장소 | 화면 |

## 입력

- REC
- DELV_DETAIL_NM
- UPD_USER
- DELV_SEQ
- DELV_DETAIL_SEQ
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- (없음)

## 데이터 처리

### 딜리버리 상세 주소 변경 (TB_CAFETERIA_DELV_DETAIL_U001)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_DELV_DETAIL
- 입력: DELV_DETAIL_NM, UPD_USER, 비플가맹점순번 (BP_AFLT_SEQ), DELV_SEQ, DELV_DETAIL_SEQ

### 딜리버리 상세 주소 순서정렬 (TB_CAFETERIA_DELV_DETAIL_U002)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_DELV_DETAIL
- 입력: 직원상태 (STATUS), ORDER_BY, UPD_USER, 비플가맹점순번 (BP_AFLT_SEQ), DELV_SEQ, DELV_DETAIL_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_u001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_U002.xml:10
