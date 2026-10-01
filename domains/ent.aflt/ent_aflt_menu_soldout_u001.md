# 엔터프라이즈_가맹점 어드민_메뉴 품절 처리(앱 버전) — 메뉴번호(MENU_SEQ) 단건 대상 품절여부 변경 (ent_aflt_menu_soldout_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBOA-20-S | 엔터프라이즈_가맹점 어드민_메뉴 관리(앱 버전) | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 메뉴순번 (MENU_SEQ)
- 품절여부 (C_SOLDOUT_YN)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 메뉴관리 메뉴조회 (TB_CAFETERIA_MENU_R011)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU
- 입력: MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

### 구내식당 메뉴 수정 (TB_CAFETERIA_MENU_U004)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_MENU
- 입력: 대표메뉴 (REPR_MENU_NM), 주문구분 (ORDER_FORM_TP), 제공날짜 (MENU_PRVD_DT), BRUNCH_YN, LUNCH_YN, 제공방식 (PRVD_TP), 영양정보 순번 (NUTR_SEQ), 영양정보 순번 (NUTR_SEQ), 메뉴 이미지 순번 (MENU_IMG_SEQ), 메뉴 이미지 순번 (MENU_IMG_SEQ), 메뉴구성명 (MENU_PACK_NM), REPR_MENU_NM_EN, MENU_PACK_NM_EN, ORIGIN_NM, 메뉴 가격 (MENU_AMT), 메뉴 가격 (MENU_AMT), QTY, QTY, 남은수량 (QTY_LEFT), 남은수량 (QTY_LEFT), UPD_USER, SMT_ODR_PAY_YN, MENU_DV_SEQ, MENU_DV_SEQ, 마감일시 (DEAD_LINE_DTTM), 금액숨김여부 (AMT_HIDE_YN), 매장식사-품절 여부 (C_SOLDOUT_YN), MENU_SEQ, 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_menu_soldout_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/aflt/ent_aflt_menu_soldout_u001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_U004.xml:10
