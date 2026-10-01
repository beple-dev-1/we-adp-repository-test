# 장소카테고리/수정 (ent_afltbo_aff_delv_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-20-10-S | 장소 카테고리 | 화면 |

## 입력

- ORDER_LIST
- 거래번호 (SEQ)
- ORDER_BY
- DELV_NM
- WORK_CD
- DELV_NM
- ORDER_BY
- DELV_SEQ
- WORK_CD

## 출력

- MSG

## 데이터 처리

### 장소카테고리 수정 (TB_CAFETERIA_DELV_U001)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_DELV
- 입력: DELV_NM, ORDER_BY, UPD_USER, 비플가맹점순번 (BP_AFLT_SEQ), DELV_SEQ

### 딜리버리 장소 카테고리 조회 (TB_CAFETERIA_DELV_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DELV_NM, DELV_NM, DELV_STATUS, DELV_STATUS

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_u001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10
