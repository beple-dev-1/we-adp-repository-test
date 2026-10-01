# 메뉴분류 수정 - 사용여부만 변경 (ent_afltbo_menu_dv_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-30-S | 메뉴분류 관리 | 화면 |

## 입력

- 메뉴분류순번 (MENU_DV_SEQ)
- 사용여부 (USE_YN)
- 사진(Base64) (FILE)
- 사진확장자 (FILE_EXT)
- 사진삭제여부 (DELETE_IMG)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 메뉴분류명 (MENU_DV_NM)

## 데이터 처리

### 구내식당 메뉴분류 단건 조회 (by seq) (TB_CAFETERIA_MENU_DV_R005)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_DV_SEQ

### 메뉴분류명 조회 (by menu_dv_nm) (TB_CAFETERIA_MENU_DV_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: MENU_DV_NM, 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD), 주문구분 (ORDER_FORM_TP), DYNAMIC_0

### 구내식당 메뉴분류 사용여부 수정 (TB_CAFETERIA_MENU_DV_U001)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: USE_YN, UPD_USER, 비플가맹점순번 (BP_AFLT_SEQ), MENU_DV_SEQ

### 구내식당 메뉴분류 이미지 삭제 (TB_CAFETERIA_MENU_DV_IMG_D001)

- 종류: DELETE
- 테이블: TB_CAFETERIA_MENU_DV_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 메뉴분류순번 (MENU_DV_SEQ)

### 구내식당 메뉴분류 이미지 등록 (TB_CAFETERIA_MENU_DV_IMG_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_MENU_DV_IMG
- 입력: 메뉴분류순번 (MENU_DV_SEQ), 메뉴분류 이미지 순번 (MENU_DV_IMG_SEQ), 비플가맹점순번 (BP_AFLT_SEQ), IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, THUMB_IMG_PATH, THUMB_IMG_FILE_NM, THUMB_IMG_FILE_EXT, 앱코드 (APP_CD), REG_USER

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_u001_act.jsp:40
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_IMG_C001.xml:10
