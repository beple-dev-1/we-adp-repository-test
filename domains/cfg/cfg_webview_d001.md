# 공통 회원 탈퇴 처리 actionc (cfg_webview_d001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-20-10-S | 브랜드상품권 이용해지 화면 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- (없음)

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 단골 상품권 회원 가입 정보 변경 (TB_MEMBER_U006)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: PMA_GIFT_JOIN, PMA_GIFT_USER_NO, PMA_GIFT_DTTM, DANGOL_LOC_AGR_YN, DANGOL_LOC_AGR_DTTM, ZEROPAY_PSS_GIFT_USER_NO, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플머니 원장 조회(MEMB_CD) (TB_MEMBER_MNY_R003)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), DYNAMIC_0

### 회원별 비플머니 업데이트 (TB_MEMBER_MNY_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_MNY
- 입력: CHRG_TP, MNY_ST, EXP_DTTM, REG_DTTM, BLC_TP, BLC_AMT, BLC_TP, BLC_AMT, REQ_WDRW_AMT, MNY_ID, MNY_MEMB_CD, 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 통합 거래내역 원장 등록 (TB_MNY_TRAN_MST_C001)

- 종류: INSERT
- 테이블: TB_MNY_TRAN_MST
- 입력: 거래번호 (TRX_SEQ), MNY_ID, 거래일자 (TRX_DT), 거래시간 (TRX_TM), 거래구분 (TRX_TP), TRX_AMT, TRX_SIGN, 처리상태 (PROC_ST), 가맹점ID (AFLT_ID), UPD_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), MNY_MEMB_CD, AFT_TRX_TOT_MNY_BLC_AMT, WDRW_TP

### 회원별 비플머니 조회(Dynamic) (TB_MEMBER_MNY_R006)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 제로페이 미완료 거래 조회 (TB_ZEROPAY_TRAN_R009)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD)

### 회원부가정보 다중보유 여부 (TB_MEMBER_APP_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD)

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 마이가맹점 상세 히스토리 원장 적재 (TB_AFFILIATION_MY_DETAIL_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_DETAIL_HIST, TB_AFFILIATION_MY_DETAIL
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 마이가맹점 직원정보 삭제(DYNAMIC) (TB_AFFILIATION_MY_DETAIL_D001)

- 종류: DELETE
- 테이블: TB_AFFILIATION_MY_DETAIL
- 입력: 가맹점ID (AFLT_ID), DYNAMIC_0

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

### 회원부가정보 삭제 (TB_MEMBER_APP_D001)

- 종류: DELETE
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 사용자 정보 변경(앱별 정보 (TB_MEMBER_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, 이벤트약관동의여부 (EVT_AGR_YN), 이벤트약관동의일자 (EVT_AGR_DT), 이벤트약관동의여부 (EVT_AGR2_YN), 이벤트약관동의일자 (EVT_AGR2_DT), JSESSION_ID, BADGE_GIFT_SEND_USER_NM, BADGE_GIFT_SEND_DTTM, BADGE_GIFT_YN, GIFT_CERT_PUSH_YN, GIFT_PUSH_YN, QCK_PAY_YN, QCK_UPD_DTTM, TAXI_USE_YN, TAXI_UPD_DTTM, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 회원마스터정보 회원상태 변경 (TB_MEMBER_U004)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: MEMB_ST, 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.cfg_webview_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/cfg/cfg_webview_d001_act.jsp:48
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R009.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U004.xml:10
