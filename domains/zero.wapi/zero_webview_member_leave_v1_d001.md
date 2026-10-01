# 웹뷰 API - 이용해지 처리 (zero_webview_member_leave_v1_d001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-30-30-C | 회원탈퇴 | 화면 |
| EXW-UWV-80-10-S | 이용해지 안내 | 화면 |
| EXW-UWV-80-20-S | 거래승인번호 입력 | 화면 |
| EXW-UWV-80-30-S | 이용해지 완료 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 재가입가능일시 (RE_JOIN_DTTM)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비밀번호 오류횟수 업데이트 (TB_MEMBER_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: PWD_FAIL_CNT, TRX_PWD_FAIL_CNT, PWD_TOKEN, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 사용자 정보 변경(앱별 정보 (TB_MEMBER_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, 이벤트약관동의여부 (EVT_AGR_YN), 이벤트약관동의일자 (EVT_AGR_DT), 이벤트약관동의여부 (EVT_AGR2_YN), 이벤트약관동의일자 (EVT_AGR2_DT), JSESSION_ID, BADGE_GIFT_SEND_USER_NM, BADGE_GIFT_SEND_DTTM, BADGE_GIFT_YN, GIFT_CERT_PUSH_YN, GIFT_PUSH_YN, QCK_PAY_YN, QCK_UPD_DTTM, TAXI_USE_YN, TAXI_UPD_DTTM, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 제로페이 미완료 거래 조회 (TB_ZEROPAY_TRAN_R009)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD)

### 회원부가정보 다중보유 여부 (TB_MEMBER_APP_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD)

### 비플머니 원장 조회(MEMB_CD) (TB_MEMBER_MNY_R003)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), DYNAMIC_0

### 회원별 비플머니 조회(Dynamic) (TB_MEMBER_MNY_R006)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 회원별 비플머니 업데이트 (TB_MEMBER_MNY_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_MNY
- 입력: CHRG_TP, MNY_ST, EXP_DTTM, REG_DTTM, BLC_TP, BLC_AMT, BLC_TP, BLC_AMT, REQ_WDRW_AMT, MNY_ID, MNY_MEMB_CD, 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 통합 거래내역 원장 등록 (TB_MNY_TRAN_MST_C001)

- 종류: INSERT
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), TRX_AMT, TRX_SIGN, 처리상태 (PROC_ST), 가맹점ID (AFLT_ID), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, AFT_TRX_TOT_MNY_BLC_AMT, WDRW_TP

### 계좌목록조회(하이브리드 포함) (TB_ACCOUNT_R021)

- 종류: SELECT
- 테이블: TB_BANK, TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: DYNAMIC_0

### 하이브리드 은행정보 조회(dynamic) (TB_HBRD_BANK_R001)

- 종류: SELECT
- 테이블: TB_HBRD_BANK
- 입력: DYNAMIC_0

### 하이브리드 계좌 삭제 (TB_ACCOUNT_HB_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌정보 갱신 (하이브리드 적용) (TB_ACCOUNT_U004)

- 종류: UPDATE
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: HD_ORG_CD, 회원코드 (MEMB_CD), PG_ORG_CD, 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), HD_REG_YN, HD_REG_DTTM, 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 회원부가정보 삭제 (TB_MEMBER_APP_D001)

- 종류: DELETE
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 회원마스터정보 회원상태 변경 (TB_MEMBER_U004)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: MEMB_ST, 회원코드 (MEMB_CD)

### NON_CI 사용자원장 삭제 (TB_MEMBER_NON_CI_D001)

- 종류: DELETE
- 테이블: TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_member_leave_v1_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_member_leave_v1_d001_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R009.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R021.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_HBRD_BANK_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_D001.xml:10
