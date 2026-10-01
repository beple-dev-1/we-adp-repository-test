# 순서관리 팝업 오픈 시 사용중 메뉴분류 목록 조회 (ent_afltbo_menu_dv_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-30-S | 메뉴분류 관리 | 화면 |

## 입력

- 주문구분 (ORDER_FORM_TP)
- 제공형태 (PRVD_TP)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 조회건수 (RES_CNT)
- REC

## 데이터 처리

### 구내식당 메뉴분류 순서관리 목록조회 (TB_CAFETERIA_MENU_DV_R006)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 주문구분 (ORDER_FORM_TP), 제공형태 (PRVD_TP), 제공형태 (PRVD_TP)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r003_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R006.xml:10
