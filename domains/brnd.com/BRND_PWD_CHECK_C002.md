# 브랜드상품권 웹뷰 API 거래승인번호 등록 (by token) (BRND_PWD_CHECK_C002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-80-20-S | 브랜드상품권 웹뷰 API 거래승인번호 등록 | 화면 |

## 입력

- PASSWORD_ID
- PASSWORD_ID_CONFIRM
- TOKEN

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- 회원코드 (MEMB_CD)
- 개인계좌등록여부 (PERS_REG_YN)

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 사용자 정보 변경(앱별 정보 (TB_MEMBER_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, 이벤트약관동의여부 (EVT_AGR_YN), 이벤트약관동의일자 (EVT_AGR_DT), 이벤트약관동의여부 (EVT_AGR2_YN), 이벤트약관동의일자 (EVT_AGR2_DT), JSESSION_ID, BADGE_GIFT_SEND_USER_NM, BADGE_GIFT_SEND_DTTM, BADGE_GIFT_YN, GIFT_CERT_PUSH_YN, GIFT_PUSH_YN, QCK_PAY_YN, QCK_UPD_DTTM, TAXI_USE_YN, TAXI_UPD_DTTM, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_PWD_CHECK_C002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_PWD_CHECK_C002_act.jsp:40
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
