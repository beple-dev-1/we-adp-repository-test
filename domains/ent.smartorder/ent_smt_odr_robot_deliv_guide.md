# 로봇배송 장소 안내 (ent_smt_odr_robot_deliv_guide)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |
| HIT-ORDR-22-S | 스마트오더 결제하기(VIEW) | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- ORDER_DT
- ORDER_ID

## 출력

- (없음)

## 데이터 처리

### 로봇배송 장소 조회 (TB_CAFETERIA_ROBOT_DELV_ADDR_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_ROBOT_DELV_ADDR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_robot_deliv_guide.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_robot_deliv_guide_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ROBOT_DELV_ADDR_R001.xml:10
