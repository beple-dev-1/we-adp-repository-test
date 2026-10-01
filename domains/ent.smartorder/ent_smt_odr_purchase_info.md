# 스마트오더 주문내역 상세 (ent_smt_odr_purchase_info)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-COMN-20-10-S | 엔터프라이즈 - 알림함 | 화면 |
| HIT-HIST-10-10-S | 스마트오더 주문내역 상세 | HIT-HIST-10-10-S-e10 |
| HIT-HIST-10-20-20-S | 엔터프라이즈_스마트오더 영수증 | HIT-HIST-10-20-20-S-e04 |
| HIT-HIST-10-S | 엔터프라이즈제로페이 영수증_v2 | HIT-HIST-10-S-e10 |

## 입력

- ORDER_DT
- ORDER_ID
- ORDER_TYPE

## 출력

- ORDER_DT
- ORDER_ID
- ORDER_TYPE
- REG_DTTM
- DELV_ADDR
- DELV_ADDR2
- ORDER_TOT_AMT
- ORDER_FORM_TP
- PRVD_TP
- PICK_BARCODE
- MENU_NM
- QTY
- THEFT_ST
- PSIB_THEFT_YN
- TRX_DT
- TRX_SEQ
- TRX_TP
- AMT
- ORDER_PROC_ST
- SERVICE_CHNL
- AFLT_NM
- SERVICE_DTL_CHNL
- PAY_MSR_NM
- DELV_PSIB_CNCL_TM
- CFTR_PSIB_CNCL_YN
- DEAL_NO
- CAFETERIA_PICK_BARCODE
- 후불결제여부 (POSTPAID_YN)
- 마감일시 (DEAD_LINE_DTTM)
- 취소상태 (CAN_ST)
- 픽업용바코드열람횟수 (PICK_BARCODE_SHOW_CNT)
- 복합결제리스트 (COMPLEX_LIST)
- COMPLEX_YN
- 금액숨김여부 (AMT_HIDE_YN)

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 구내식당 주문 상세내역 조회 (TB_CAFETERIA_ODR_R003)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_CAFETERIA_ODR, TB_CAFETERIA_ODR_MENU, TB_CAFETERIA_THEFT, TB_BPPAY_TRAN, TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_QR_MNG, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_DT, ORDER_ID, ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플페이 복합결제 거래내역 조회(TRX_DT,TRX_SEQ,TRX_TP) (TB_BPPAY_COMPLEX_TRAN_R004)

- 종류: SELECT
- 테이블: TB_BP_QR_MNG, TB_BPPAY_COMPLEX_TRAN, TB_BPPAY_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_purchase_info.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_purchase_info_act.jsp:20
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_R004.xml:10
