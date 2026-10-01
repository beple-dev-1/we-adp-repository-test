# test (ent_afltbo_odr_list_r013)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-40-20-S | 주문내역 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- START_DATE
- END_DATE
- KEYWORD
- 주문유형 (ORDER_TYPE)
- 주문처리상태 (ORDER_PROC_ST)
- 페이지 (PAGE)
- PAGE_SIZE
- END_TIME
- STR_TIME
- 검색어 (SEARCH_KEYWORD)

## 출력

- EXCEL_REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 테스트 성능쿼리 (TB_CAFETERIA_ODR_R013)

- 종류: SELECT
- 테이블: TB_CAFETERIA_ODR
- 입력: START_DATE, END_DATE, 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r013.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r013_act.jsp:42
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R013.xml:10
