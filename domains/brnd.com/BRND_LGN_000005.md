# 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 (BRND_LGN_000005)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-80-10-S | 브랜드상품권 웹뷰 API - 휴면계정해제 본인인증 | EXW-BRWV-80-10-S-e15 |

## 입력

- 휴대폰번호 (MOB_NO)
- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- PUSH_ID
- 마켓팅 정보 수신동의여부 (MRKT_AGREE_YN)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 회원코드 (MEMB_CD)
- 암호잠금 설정여부 (LOCK_YN)
- 생체인증설정여부 (BIO_LOCK_YN)
- 생체로그인여부 (BIO_LOGIN_YN)
- 마케팅 정보 수신동의 메시지 내용 (POP_MSG)

## 데이터 처리

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### 휴면관리원장 조회 (TB_SLEEP_MNG_R001)

- 종류: SELECT
- 테이블: TB_SLEEP_MNG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 사용자정보 일괄변경 (TB_MEMBER_APP_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP, TB_SLEEP_MNG
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 휴면상태해제 (TB_SLEEP_MNG_U001)

- 종류: UPDATE
- 테이블: TB_SLEEP_MNG
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

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

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000005.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000005_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SLEEP_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_SLEEP_MNG_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U026.xml:10
