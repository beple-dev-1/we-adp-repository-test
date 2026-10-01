# 메뉴분류 목록 조회 (ent_afltbo_menu_dv_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-30-S | 메뉴분류 관리 | 화면 |

## 입력

- 제공방식 (PRVD_TP)
- 페이지 (PAGE)
- PAGE_SIZE

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 조회건수 (RES_CNT)
- REC

## 데이터 처리

### 구내식당 메뉴분류 목록 조회 (페이징) (TB_CAFETERIA_MENU_DV_R004)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R004.xml:10
