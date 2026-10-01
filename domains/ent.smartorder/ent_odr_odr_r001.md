# 주문 초기화 (ent_odr_odr_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-22-10-S | 스마트오더 주문 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_SEQ
- 제공날짜 (MENU_PRVD_DT)

## 출력

- MENU_SEQ
- 비플가맹점순번 (BP_AFLT_SEQ)
- MENU_DV_NM
- REPR_MENU_NM
- REPR_MENU_NM_EN
- MENU_PACK_NM
- MENU_AMT
- IMG_PATH
- QTY_LEFT
- ORDER_FORM_TP
- 제공방식 (PRVD_TP)
- RES_CD
- RES_MSG
- DELV_NM
- 가맹점명 (AFLT_NM)
- 금액숨김여부 (AMT_HIDE_YN)
- WORK_CD

## 데이터 처리

### 메뉴 상세 조회 (TB_CAFETERIA_MENU_R003)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_MENU_DV, TB_CAFETERIA_MENU_IMG, TB_CAFETERIA_OPEN_HOUR, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), MENU_SEQ, 제공날짜 (MENU_PRVD_DT)

### 회원별 배송지 조회 (TB_MEMBER_ENT_APP_R004)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP, TB_CAFETERIA_DELV_ADDR
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_odr_odr_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_odr_odr_r001_act.jsp:17
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_MENU_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R004.xml:10
