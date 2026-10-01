# 엔터프라이즈 가맹점 어드민 메뉴관리(앱 버전) 메뉴조회 (ent_aflt_menu_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBOA-20-S | 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전) | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- START_DATE
- END_DATE
- 제공방식 (PRVD_TP)
- 페이지 (PAGE)
- PAGE_SIZE

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 조회건수 (RES_CNT)
- REC

## 데이터 처리

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴조회 (TB_CAFETERIA_MENU_R010)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), START_DATE, END_DATE, DYNAMIC_0, DYNAMIC_1

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_list_r001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R010.xml:10
