# 만14세미만 아동 회원가입 처리 (kid_agr_req_c003)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-30-10-10-S | PG_만 14세미만 회원가입 | 화면 |
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | 화면 |

## 입력

- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 성별 (GNDR)
- 내외국인구분 (IN_FRN_TP)
- CI
- DI
- JOIN_APP_CD
- MEMB_ST
- 휴대폰번호 (MOB_NO)
- PUSH_ID
- 마켓팅 정보 수신동의여부 (MRKT_AGREE_YN)
- 통신사 (TELE_CORP)

## 출력

- ERROR_MSG
- 에러여부 (ERROR_YN)
- 마케팅 정보 수신동의 메시지 내용 (POP_MSG)
- 회원코드 (MEMB_CD)
- CI

## 데이터 처리

### 최근 본인인증정보 조회 (TB_CERTIFY_R001)

- 종류: SELECT
- 테이블: TB_CERTIFY
- 입력: 휴대폰번호 (MOB_NO)

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### APP지역코드관리 정보 조회 (TB_APP_LOCAL_MNG_R001)

- 종류: SELECT
- 테이블: TB_APP_LOCAL_MNG
- 입력: 앱코드 (APP_CD), GIFT_TP, GIFT_TP_DET

### 회원정보 등록 (TB_MEMBER_C001)

- 종류: INSERT
- 테이블: TB_MEMBER
- 입력: 회원명 (MEMB_NM), 생년월일 (BRT_DT), 성별 (GNDR), 내외국인구분 (IN_FRN_TP), CI, DI, JOIN_APP_CD, MEMB_ST, UUID

### 회원정보 EB코드 등록 (TB_MEMBER_U027)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: EB_MEMB_CD, PAYR_NO, 회원코드 (MEMB_CD)

### 브릿지 회원정보 등록 (TB_MEMBER_APP_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), OS, 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 비밀번호 (PWD), 거래승인번호 등록 여부 (TRX_PWD_REG_YN), ENC_SALT, FIN_CONN_DT, MEMB_ST, MAIN_LOC_CD, MRKT_AGR_YN, MRKT_AGR_DT, MNY_MEMB_CD

### 만 14세미만 아동 여부, 위치 동의 업데이트 (TB_MEMBER_APP_U015)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: KID_YN, LOC_AGR_YN, 회원코드 (MEMB_CD)

### 납부자번호 저장 (TB_MEMBER_U003)

- 종류: UPDATE
- 테이블: TB_MEMBER
- 입력: PAYR_NO, 회원코드 (MEMB_CD)

### 앱정보 조회 (TB_APP_MNG_R001)

- 종류: SELECT
- 테이블: TB_APP_MNG
- 입력: 앱코드 (APP_CD)

### 알림톡 템플릿 정보 조회 (TB_TALK_TEMPLATE_MNG_R002)

- 종류: SELECT
- 테이블: TB_TALK_TEMPLATE_MNG
- 입력: 템플릿 아이디 (TEMPLATE_ID)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_c003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/kid_agr_req_c003_act.jsp:40
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U015.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10
