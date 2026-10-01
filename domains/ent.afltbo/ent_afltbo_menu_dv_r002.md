# 행 클릭 시 사용여부 검증 + 최신 데이터 재조회 (ent_afltbo_menu_dv_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-30-S | 메뉴분류 관리 | 화면 |

## 입력

- 메뉴분류순번 (MENU_DV_SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 메뉴분류명 (MENU_DV_NM)
- 주문구분 (ORDER_FORM_TP)
- 제거방식 (PRVD_TP)
- 사용여부 (USE_YN)
- IMG_PATH
- IMG_FILE_NM
- IMG_FILE_EXT

## 데이터 처리

### 구내식당 메뉴분류 단건 조회 (by seq) (TB_CAFETERIA_MENU_DV_R005)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_DV_SEQ

### 구내식당 메뉴분류 이미지 조회 (TB_CAFETERIA_MENU_DV_IMG_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 메뉴분류순번 (MENU_DV_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_r002_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_R001.xml:10
