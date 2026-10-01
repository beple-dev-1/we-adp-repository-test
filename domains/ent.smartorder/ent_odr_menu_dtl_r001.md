# 메뉴 상세 초기화 (ent_odr_menu_dtl_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-28-S | 메뉴 상세 초기화 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_SEQ
- 제공날짜 (MENU_PRVD_DT)
- 조중식구분 (BLD_TP)
- 제공방식 (PRVD_TP)
- 주문구분 (ORDER_FORM_TP)

## 출력

- MENU_SEQ
- BP_AFLT_SEQ
- MENU_DV_NM
- REPR_MENU_NM
- 대표메뉴(영문) (REPR_MENU_NM_EN)
- MENU_PACK_NM
- 메뉴구성명(영문) (MENU_PACK_NM_EN)
- MENU_AMT
- IMG_PATH
- YD_OPEN_HOUR_STR_TM
- YD_OPEN_HOUR_END_TM
- TD_OPEN_HOUR_STR_TM
- TD_OPEN_HOUR_END_TM
- QTY_LEFT
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 제공방식 (PRVD_TP)
- 가맹점영업여부 (CLOSE_YN)
- BRUNCH_YN
- LUNCH_YN
- 주문구분 (ORDER_FORM_TP)
- 제공방식 (PRVD_TP)
- BO_EDITING_YN
- 금액숨김여부 (AMT_HIDE_YN)
- 매장식사-품절 여부 (C_SOLDOUT_YN)

## 데이터 처리

### 메뉴 상세 조회(BY 제공날짜) (TB_CAFETERIA_MENU_R004)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DTL, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_OPEN_HOUR, TB_BP_AFLT_MY, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_MENU_DV_IMG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ, 제공날짜 (MENU_PRVD_DT), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_menu_dtl_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_menu_dtl_r001_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R004.xml:10
