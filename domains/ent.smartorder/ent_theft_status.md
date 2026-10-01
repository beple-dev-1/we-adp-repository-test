# 스마트오더 도난현황 (ent_theft_status)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-HIST-10-10-S | 스마트오더 주문내역 상세 | 화면 |
| HIT-HIST-10-20-S | 스마트오더 주문 상세내역 v2 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID

## 출력

- ORDER_TOT_AMT
- SEQ
- DELV_DT
- CTNT
- THEFT_ST
- MENU_AMT
- MENU_NM
- QTY
- 가맹점명 (AFLT_NM)
- DEAL_NO
- PAY_INFO

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 구내식당 도난내역 조회 (TB_CAFETERIA_THEFT_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_CAFETERIA_THEFT, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID

### 스마트오더 결제내역 조회 (TB_BPPAY_TRAN_R010)

- 종류: SELECT
- 테이블: TB_BPPAY_TRAN, TB_BPPAY_COMPLEX_TRAN, TB_BP_QR_MNG
- 입력: ORDER_DT, ORDER_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_theft_status.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_theft_status_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_THEFT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R010.xml:10
