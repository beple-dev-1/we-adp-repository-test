# 브랜드상품권 웹뷰 API 휴대폰 본인인증 확인 (BRND_LGN_000004)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-80-30-10-S | 브랜드상품권 웹뷰 API 회원가입 | EXW-BRWV-80-30-10-S-e02 |

## 입력

- 휴대폰번호 (MOB_NO)
- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 내외국인구분 (IN_FRN_TP)
- 통신사 (TELE_CORP)
- PUSH_ID
- 마켓팅 정보 수신동의여부 (MRKT_AGREE_YN)
- BRT_GNDR
- 앱코드 (APP_CD)
- 성별 (GNDR)
- NMA_DEV_ID
- NMA_MODEL
- NMA_NETNM
- NMA_PLF
- NMA_PLF_VER
- B_CI
- ORG_APP_CD

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 회원코드 (MEMB_CD)
- 암호잠금 설정여부 (LOCK_YN)
- 생체인증설정여부 (BIO_LOCK_YN)
- 생체로그인여부 (BIO_LOGIN_YN)
- 마케팅 정보 수신동의 메시지 내용 (POP_MSG)
- 에러여부 (ERROR_YN)
- ERROR_MSG
- NEW_MEMB_YN
- TOKEN

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

### 비플제로페이 가입 채널 경로 업데이트 (TB_MEMBER_APP_U018)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: ORG_APP_CD, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_LGN_000004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_LGN_000004_act.jsp:42
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_LOCAL_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R010.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U018.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.LINK_USER_BIPLE_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R011.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_TALK_TEMPLATE_MNG_R002.xml:10
