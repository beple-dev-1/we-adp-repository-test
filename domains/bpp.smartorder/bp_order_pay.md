# 스마트오더 결제 (bp_order_pay)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| BPY-PAY-10-20-S | 식권제로페이 함께결제 (list) | BPY-PAY-10-20-S-e04 |
| BPY-PAY-10-S | 식권제로페이 결제방식선택 | 화면 |

## 입력

- ORDER_DT
- ORDER_ID
- SMT_ODR_PARAM
- 메뉴개수 (MENU_CNT)
- MENU_SCHEDULE_ID

## 출력

- MNY_AUTO_ACCT_CNT
- MNY_CUR_PRICE
- AFLT_NM
- BP_AFLT_ID
- PG_AFLT_ID
- AMT
- ORDER_DT
- ORDER_ID
- TGT_ORDER_ID
- TGT_ORDER_DT
- TGT_YN
- MEAL_REC
- MNY_AUTO_ACCT_REC
- BP_AFLT_REQ
- 위치 타이틀 (LOC_TITLE)
- 위치정보2 (SPOT_TITLE_1)
- ADDR1
- 카드결제사용여부 (CARD_APRV_USE_YN)

## 데이터 처리

### 비플오더 주문원장 조회(ORDER_DT, ORDER_ID) (TB_BP_AFLT_ODR_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR, TB_BP_AFLT_MY
- 입력: ORDER_DT, ORDER_ID, 주문유형 (ORDER_TYPE)

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 푸드오피스 메뉴 조회 (TB_MEMBER_APP_DELIV_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_DELIV, TB_BP_AFLT_MNG, TB_BP_AFLT_MYBAG, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MY, TB_CTGR_CATG_CD
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD)

### 비플오더 가맹점관리 원장 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MY_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 사용자 정보 변경 (TB_MEMBER_APP_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, SMALL_YN, SMALL_JOIN_DTTM, 소상공인 사업자번호 (SMALL_BIZ_NO), QCK_PAY_YN, QCK_UPD_DTTM, MNY_MEMB_CD, OS_VER, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, RE_APRV_YN, RE_APRV_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 비플오더 주문요구사항 목록 조회 (TB_BP_AFLT_REQ_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_REQ, TB_BP_AFLT_REQ_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), REQ_USE_YN, INFO_USE_YN

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_order_pay.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_order_pay_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_REQ_R001.xml:10
