# 현대차 엔터프라이즈 PC 스마트오더 주문집계 조회 (ent_afltbo_aggr_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-40-10-S | 주문집계 | 화면 |

## 입력

- 제공날짜 (MENU_PRVD_DT)
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC
- DELV_YN

## 데이터 처리

### 주문내역 집계 리스트 (TB_CAFETERIA_ODR_R008)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 제공날짜 (MENU_PRVD_DT), 비플가맹점순번 (BP_AFLT_SEQ), 제공날짜 (MENU_PRVD_DT)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aggr_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aggr_r001_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R008.xml:10
