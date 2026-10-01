# 장소카테고리 (ent_afltbo_aff_delv)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-20-10-S | 장소 카테고리 | 화면 |

## 입력

- DELV_NM
- 비플가맹점순번 (BP_AFLT_SEQ)
- DELV_STATUS
- WORK_CD

## 출력

- REC_WORK
- REC

## 데이터 처리

### 딜리버리 장소 카테고리 조회 (TB_CAFETERIA_DELV_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DELV_NM, DELV_NM, DELV_STATUS, DELV_STATUS

### 딜리버리 근무지 그룹 헤더 조회(가맹점 매핑 전체) (TB_CAFETERIA_WORK_PLCE_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_WORK_PLCE, TB_BP_AFLT_MY
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_WORK_PLCE_R002.xml:10
