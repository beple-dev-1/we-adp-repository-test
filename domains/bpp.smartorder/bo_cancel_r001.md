# 취소내역 조회 및 유효성 검증 (bo_cancel_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-80-S | 비플오더 취소 | 화면 |

## 입력

- MEMB_NM
- MOB_NO
- ORDER_DT
- DEAL_NO
- MANAGER_NAME
- 비플가맹점순번 (BP_AFLT_SEQ)
- ORDER_ID
- 앱코드 (APP_CD)

## 출력

- 주문정보 (ORDER_INFO)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 핸드폰번호로 회원코드조회 (TB_MEMBER_APP_R006)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 휴대폰번호 (MOB_NO)

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 주문정보 조회(ORDER_DT, MEMB_CD, ORDER_ID, BP_AFLT_SEQ) (TB_BP_AFLT_ODR_R017)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR
- 입력: ORDER_DT, ORDER_ID, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ)

### 주문정보 조회(ORDER_DT, MEMB_CD, DEAL_NO, BP_AFLT_SEQ) (TB_BP_AFLT_ODR_R014)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_ODR
- 입력: ORDER_DT, 회원코드 (MEMB_CD), DEAL_NO, 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 주문원장 조회(ORDER_DT, ORDER_ID) (TB_BP_AFLT_ODR_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 비플페이 거래내역 조회(ORDER_DT, ORDER_ID) (TB_BPPAY_TRAN_R002)

- 종류: SELECT
- 테이블: TB_MNY_CHRG_WDRW_DTL, TB_YGYO_ODR, TB_MEMBER, TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_CAFETERIA_OPEN_HOUR
- 입력: ORDER_ID, ORDER_DT, 거래구분 (TRX_TP)

### 비플페이 카드거래내역 수정(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_CARD_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_BPPAY_CARD_TRAN
- 입력: RES_CD, 응답메시지 (RES_MSG), VAN_ORG_CD, VAN_AUTH_NO, QUOTA, 카드번호 (CARD_NO), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 비플페이 복합결제 거래내역 수정(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_COMPLEX_TRAN_U001)

- 종류: UPDATE
- 테이블: TB_BPPAY_COMPLEX_TRAN
- 입력: 처리상태 (PROC_ST), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP), PAY_MEASURE_TP

### 비플페이 거래내역 수정(TRX_DT, TRX_SEQ, TRX_TP) (TB_BPPAY_TRAN_U003)

- 종류: UPDATE
- 테이블: TB_BPPAY_TRAN
- 입력: RES_CD, 응답메시지 (RES_MSG), 처리상태 (PROC_ST), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래구분 (TRX_TP)

### 비플오더 KIOSK 접속정보 조회 (TB_BP_KIOSK_CONN_R001)

- 종류: SELECT
- 테이블: TB_BP_KIOSK_CONN
- 입력: 거래일자 (TRX_DT), BRAND_CD, STORE_NO, POS_NO

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_cancel_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_cancel_r001_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R017.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_CARD_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_COMPLEX_TRAN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10
