# 드래그 정렬된 노출순서 일괄 저장 (ent_afltbo_menu_dv_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-30-S | 메뉴분류 관리 | 화면 |

## 입력

- ORDER_LIST

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 구내식당 메뉴분류 노출순서 수정 (TB_CAFETERIA_MENU_DV_U002)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_MENU_DV
- 입력: AGGR_DSP_SEQ, UPD_USER, 비플가맹점순번 (BP_AFLT_SEQ), MENU_DV_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_menu_dv_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_menu_dv_u002_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_DV_U002.xml:10
