# 구매내역 리스트 (smt_odr_purchase_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-S | 주문내역 | 화면 |
| HIT-HIST-10-20-10-S | 스마트오더 주문내역 | 화면 |

## 입력

- MEMB_CD
- APP_CD
- REQUEST_OFFSET
- LIMIT_CNT
- FILTER_TP

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 총건수 (TOT_CNT)
- REC

## 데이터 처리

### 주문내역 리스트 (TB_BP_AFLT_ODR_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_DELIV_ODR_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_MENU, TB_CAFETERIA_THEFT, TB_CAFETERIA_OPEN_HOUR, TB_BPPAY_TRAN, LIST
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0, DYNAMIC_1

### 주문내역 리스트(TOT_CNT) (TB_BP_AFLT_ODR_R028)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ORD_SORT, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_DELIV_ODR_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_MENU, TB_CAFETERIA_THEFT, TB_CAFETERIA_OPEN_HOUR, TB_BPPAY_TRAN, LIST
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0, DYNAMIC_1

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R028.xml:10
