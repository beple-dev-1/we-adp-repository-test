# 요기요 결제 (bp_ygyo_pay)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-20-10-S | 요기요 결제 | BPG-YGYO-20-10-S-e24 |
| BPG-YGYO-20-S | 요기요 장바구니 | 화면 |
| BPY-PAY-10-20-S | 식권제로페이 함께결제 (list) | 화면 |

## 입력

- YGYO_RETURN_VALUE_MEAL_PARAM

## 출력

- MNY_AUTO_ACCT_CNT
- MNY_CUR_PRICE
- BP_AFLT_ID
- PG_AFLT_ID
- TGT_ORDER_ID
- TGT_ORDER_DT
- TGT_YN
- MEAL_REC
- MNY_AUTO_ACCT_REC
- BP_AFLT_REQ
- 휴대폰번호 (MOB_NO)
- MEMBER_DELIV_ADDR
- VOUCHER_REC

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비플페이 가맹점정보 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
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

### 요기요_배송주소조회 (TB_MEMBER_APP_YGYO_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_YGYO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_pay.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_pay_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_REQ_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_YGYO_R001.xml:10
