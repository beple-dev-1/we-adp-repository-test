# 엔터프라이즈 가맹점pc_시간정보 수정 (ent_afltbo_hour_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-20-S | 시간설정 | 화면 |

## 입력

- BRUNCH
- LUNCH
- PICKUP
- RESERVATION

## 출력

- CODE
- MSG

## 데이터 처리

### 구내식당 이용시간 조회(단건) (TB_CAFETERIA_OPEN_HOUR_R005)

- 종류: SELECT
- 테이블: TB_CAFETERIA_OPEN_HOUR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 주문구분 (ORDER_FORM_TP), 조중식구분 (BLD_TP), 제공방식 (PRVD_TP), 앱코드 (APP_CD)

### 구내식당 이용시간 수정 (TB_CAFETERIA_OPEN_HOUR_U002)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_OPEN_HOUR
- 입력: YD_OPEN_HOUR_STR_TM, YD_OPEN_HOUR_END_TM, UPD_USER, TD_OPEN_HOUR_STR_TM, TD_OPEN_HOUR_END_TM, 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD), 주문구분 (ORDER_FORM_TP), 조중식구분 (BLD_TP), 제공방식 (PRVD_TP), OPEN_HOUR_SEQ

### 메뉴 dead_line_dttm 변경 (TB_CAFETERIA_MENU_U006)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_MENU, TEMP
- 입력: YD_OPEN_HOUR_STR_TM, TD_OPEN_HOUR_END_TM, DEAD_LINE_TM, YD_OPEN_HOUR_STR_TM, YD_OPEN_HOUR_END_TM, DEAD_LINE_TM, TD_OPEN_HOUR_STR_TM, TD_OPEN_HOUR_END_TM, DEAD_LINE_TM, 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD), 주문구분 (ORDER_FORM_TP), 제공방식 (PRVD_TP), 제공날짜 (MENU_PRVD_DT)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_hour_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_hour_u001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U006.xml:10
