# 푸드오피스 장바구니 추가 (bp_aflt_deliv_mybag_u003)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-20-S | 오피스푸드 메뉴 상세 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- SERVICE_TIME
- MENU_ID
- MENU_NAME
- 메뉴개수 (MENU_CNT)
- MENU_AMT
- 가격 (PRICE)
- 앱코드 (APP_CD)
- 가맹점 장바구니 순번 (MYBAG_SEQ)
- MENU_SCHEDULE_ID
- 회원코드 (MEMB_CD)
- 처리상태 (PROC_ST)
- 비플가맹점순번 (BP_AFLT_SEQ)
- TOT_AMT
- RECV_TYPE
- AMOUNT_QTY
- MAX_ORDER_QTY

## 출력

- MYBAG_SEQ
- 회원코드 (MEMB_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- 처리상태 (PROC_ST)
- REG_DTTM
- 앱코드 (APP_CD)
- TOT_AMT

## 데이터 처리

### 비플오더 장바구니 조회 (TB_BP_AFLT_MYBAG_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD)

### 비플오더 장바구니 삭제 (TB_BP_AFLT_MYBAG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

### 비플오더 장바구니 메뉴 삭제(by mybag_seq) (TB_BP_AFLT_MYBAG_PDT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 옵션 삭제 (TB_BP_AFLT_MYBAG_OPT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_OPT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 오피스푸드(식사배송) 장바구니 - 업데이트 (TB_BP_AFLT_DELIV_MYBAG_MENU_U002)

- 종류: INSERT
- 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU, UPSERT
- 입력: 거래일자 (TRX_DT), SERVICE_TIME, MENU_ID, MENU_NAME, 메뉴개수 (MENU_CNT), MENU_AMT, 가격 (PRICE), 앱코드 (APP_CD), 가맹점 장바구니 순번 (MYBAG_SEQ), MENU_SCHEDULE_ID, 가맹점 장바구니 순번 (MYBAG_SEQ), MENU_SCHEDULE_ID, 거래일자 (TRX_DT), SERVICE_TIME, MENU_ID, MENU_NAME, 메뉴개수 (MENU_CNT), MENU_AMT, 가격 (PRICE), 가맹점 장바구니 순번 (MYBAG_SEQ), 앱코드 (APP_CD)

### 비플오더 장바구니 수정 (TB_BP_AFLT_MYBAG_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_DELIV_MYBAG_MENU
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD)

### 비플오더 장바구니 등록 (TB_BP_AFLT_MYBAG_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: MYBAG_SEQ, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), 처리상태 (PROC_ST), 앱코드 (APP_CD), TOT_AMT, RECV_TYPE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_u003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_u003_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_C001.xml:10
