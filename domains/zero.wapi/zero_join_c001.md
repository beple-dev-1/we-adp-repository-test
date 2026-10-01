# 휴대폰 본인인증번호 검증 및 회원가입 (zero_join_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-20-S | 휴대폰 본인인증 | 화면 |

## 입력

- 휴대폰번호 (MOB_NO)
- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 회원명 (MEMB_NM)
- 생년월일8자리 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- 마켓팅 정보 수신동의여부 (MRKT_AGR_YN)
- 앱 코드 (APP_CD)
- 인증키 (API_AUTH_KEY)

## 출력

- RES_CD
- RES_MSG
- CI
- IS_NEW_MEMBER
- 가입여부 (JOIN_YN)
- 암호화 CI (ENCRYPT_CI)
- 암호화 이름 (ENCRYPT_NM)
- 암호화 휴대폰번호 (ENCRYPT_NO)

## 데이터 처리

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### 회원명 변경 (TB_MEMBER_U026)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: 회원명 (MEMB_NM), 회원코드 (MEMB_CD)

### 회원정보 등록 (TB_MEMBER_C001)

- 종류: INSERT
- 테이블: TB_MEMBER
- 입력: 회원명 (MEMB_NM), 생년월일 (BRT_DT), 성별 (GNDR), 내외국인구분 (IN_FRN_TP), CI, DI, JOIN_APP_CD, MEMB_ST, UUID

### 회원정보조회(부가정보) (TB_MEMBER_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 사용자 정보 변경 (TB_MEMBER_APP_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, SMALL_YN, SMALL_JOIN_DTTM, 소상공인 사업자번호 (SMALL_BIZ_NO), QCK_PAY_YN, QCK_UPD_DTTM, MNY_MEMB_CD, OS_VER, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, RE_APRV_YN, RE_APRV_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### APP지역코드관리 정보 조회 (TB_APP_LOCAL_MNG_R001)

- 종류: SELECT
- 테이블: TB_APP_LOCAL_MNG
- 입력: 앱코드 (APP_CD), GIFT_TP, GIFT_TP_DET

### 브릿지 회원정보 등록 (TB_MEMBER_APP_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), OS, 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 비밀번호 (PWD), 거래승인번호 등록 여부 (TRX_PWD_REG_YN), ENC_SALT, FIN_CONN_DT, MEMB_ST, MAIN_LOC_CD, MRKT_AGR_YN, MRKT_AGR_DT, MNY_MEMB_CD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_join_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_join_c001_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10
