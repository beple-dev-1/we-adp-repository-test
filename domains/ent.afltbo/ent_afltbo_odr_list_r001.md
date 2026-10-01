# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 주문내역 조회 (ent_afltbo_odr_list_r001)

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

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 조회건수 (RES_CNT)
- REC
- EXCEL_REC

## 데이터 처리

### 구내식당 주문 원장 조회 (TB_CAFETERIA_ODR_R006)

- 종류: SELECT
- 테이블: TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_BP_AFLT_ODR, TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_MEMBER_ENT_APP, TB_MEMBER_APP, TB_MEMBER, TB_ENT_CORP_SITE
- 입력: KN_BP_AFLT_SEQ, KN_BP_AFLT_SEQ, KN_BP_AFLT_SEQ, START_DATE, END_DATE, 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0, DYNAMIC_1

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_list_r001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R006.xml:10
