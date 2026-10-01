# 웹뷰 API - 휴대폰 본인인증 확인·가입(통합웹뷰버전) (zero_webview_lgn_000004_v1)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-10-S | 회원가입 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)
- 휴대폰번호 (MOB_NO)
- 거래일련번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- 주민번호뒷자리 (REGS_NO)
- 재전송여부 (RE_SEND_YN)
- 푸시ID (PUSH_ID)
- 마케팅동의여부 (MRKT_AGREE_YN)
- 이메일 (EMAIL)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래승인번호등록여부 (TRX_PWD_REG_YN)
- 가입여부 (JOIN_YN)
- 회원코드 (MEMB_CD)
- CI
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- 계좌등록여부 (ACCT_REG_YN)
- 생년월일 (ENC_BRT_DT)
- 성별 (GNDR)

## 데이터 처리

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### APP지역코드관리 정보 조회 (TB_APP_LOCAL_MNG_R001)

- 종류: SELECT
- 테이블: TB_APP_LOCAL_MNG
- 입력: 앱코드 (APP_CD), GIFT_TP, GIFT_TP_DET

### 회원정보조회(부가정보) (TB_MEMBER_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 사용자 정보 변경 (TB_MEMBER_APP_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, SMALL_YN, SMALL_JOIN_DTTM, 소상공인 사업자번호 (SMALL_BIZ_NO), QCK_PAY_YN, QCK_UPD_DTTM, MNY_MEMB_CD, OS_VER, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, RE_APRV_YN, RE_APRV_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 회원명 변경 (TB_MEMBER_U026)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: 회원명 (MEMB_NM), 회원코드 (MEMB_CD)

### 부분탈퇴 후 재가입 시, 탈퇴 전 비플머니회원코드 조회 (TB_MNY_TRAN_MST_R010)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 최근 본인인증정보 조회(생년월일) (TB_CERTIFY_R002)

- 종류: SELECT
- 테이블: TB_CERTIFY
- 입력: 거래일자 (TRX_DT), CI

### 브릿지 회원정보 등록 (TB_MEMBER_APP_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), OS, 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 비밀번호 (PWD), 거래승인번호 등록 여부 (TRX_PWD_REG_YN), ENC_SALT, FIN_CONN_DT, MEMB_ST, MAIN_LOC_CD, MRKT_AGR_YN, MRKT_AGR_DT, MNY_MEMB_CD

### 재가입 시 비플머니 사용자 데이터 연동 (LINK_USER_BIPLE_MNY_R001)

- 종류: SELECT
- 테이블: (없음)
- 입력: 회원코드 (MEMB_CD), MNY_MEMB_CD, 앱코드 (APP_CD)

### 전체탈퇴 후 재가입(CI 변경이 안된 경우) 시, 탈퇴 전 비플머니회원코드 조회 (TB_MNY_TRAN_MST_R011)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER
- 입력: CI, 앱코드 (APP_CD)

### 회원정보 등록 (TB_MEMBER_C001)

- 종류: INSERT
- 테이블: TB_MEMBER
- 입력: 회원명 (MEMB_NM), 생년월일 (BRT_DT), 성별 (GNDR), 내외국인구분 (IN_FRN_TP), CI, DI, JOIN_APP_CD, MEMB_ST, UUID

### 회원정보 EB코드 등록 (TB_MEMBER_U027)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: EB_MEMB_CD, PAYR_NO, 회원코드 (MEMB_CD)

### 납부자번호 저장 (TB_MEMBER_U003)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: PAYR_NO, 회원코드 (MEMB_CD)

### 회원 이메일 수정 (TB_MEMBER_U030)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: 이메일 (EMAIL), 회원코드 (MEMB_CD)

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### NON_CI 사용자 업데이트 (TB_MEMBER_NON_CI_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_NON_CI
- 입력: CI, 휴대폰번호 (MOB_NO), 고객명 (USER_NM), 생년월일 (BRT_DT), 성별 (GNDR), 내외국인구분 (IN_FRN_TP), CI_YN, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### NON_CI 사용자 저장 (TB_MEMBER_NON_CI_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), UUID, UUID_TYPE, CI, 휴대폰번호 (MOB_NO), 고객명 (USER_NM), 생년월일 (BRT_DT), 성별 (GNDR), 내외국인구분 (IN_FRN_TP), CI_YN, API_APP_CD

### 계좌 등록여부 (TB_ACCOUNT_R023)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_lgn_000004_v1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_lgn_000004_v1_act.jsp:45
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R010.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.LINK_USER_BIPLE_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U030.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R023.xml:10

## 목록 밖 — 보호 화면

이 화면들은 사람 손질로 md 를 바이트 그대로 둬 업무 절이 없다: EXW-UWV-70-30-10-C
