# 주문 정보 재조회 (ent_smt_odr_purchase_info_v2_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID
- 주문유형 (ORDER_TYPE)
- ORDER_FLAG

## 출력

- 응답코드 (RES_CD)
- 응답메세지 (RES_MSG)
- ORDER_STATUS_MSG
- ORDER_STEP_CLASS
- ORDER_STATUS_DTL_MSG
- ORDER_STATUS_DTL_SUB_MSG
- ETC_INFO_MSG

## 데이터 처리

### 구내식당 주문 상세내역 조회 (TB_CAFETERIA_ODR_R003)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_QR_MNG, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 스마트오더 주문 기본정보 조회 (TB_BP_AFLT_ODR_R030)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT, TB_BP_AFLT_ODR, TB_CAFETERIA_ROBOT_DELV_ADDR, TB_BPPAY_TRAN, TB_BP_QR_MNG
- 입력: 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), ORDER_ID, 주문유형 (ORDER_TYPE), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info_v2_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_v2_r001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R030.xml:10
