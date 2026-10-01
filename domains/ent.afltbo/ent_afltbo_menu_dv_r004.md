# 저장 확인 팝업 노출 전 메뉴분류명 중복 여부 사전 검증 (ent_afltbo_menu_dv_r004)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-30-S | 메뉴분류 관리 | 화면 |

## 입력

- 메뉴분류명 (MENU_DV_NM)
- 주문구분 (ORDER_FORM_TP)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 메뉴분류명 조회 (by menu_dv_nm) (TB_CAFETERIA_MENU_DV_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: MENU_DV_NM, 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD), 주문구분 (ORDER_FORM_TP), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r004_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R002.xml:10
