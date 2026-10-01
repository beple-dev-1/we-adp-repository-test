# 웹뷰 API - 거래승인번호 재설정 ACTION(통합웹뷰버전) (zero_webview_password_reset_v1_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-30-30-S | 재설정 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 요청부 (DATA)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 회원정보 조회(BY CI) (TB_MEMBER_R002)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), CI

### 사용자 정보 변경(앱별 정보 (TB_MEMBER_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: AUTO_LOGIN_YN, 생체로그인여부 (BIO_LOGIN_YN), 푸쉬등록여부 (PUSH_REG_YN), PUSH_APR_NOTI_YN, 거래승인번호 등록 여부 (TRX_PWD_REG_YN), TRX_PWD_FAIL_CNT, PWD_FAIL_CNT, 비밀번호 (PWD), PWD_CHNG_DT, 거래승인번호 (TRX_PWD), TRX_PWD_CHNG_DT, MEMB_ST, 휴대폰번호 (MOB_NO), 통신사 (TELE_CORP), DVC_ID, APP_TP, APP_ID, PUSH_ID, 모델명 (MDL_NM), FIN_CONN_DT, OS, ENC_SALT, PUSH_LMT_TM_YN, PUSH_LMT_STR_TM, PUSH_LMT_END_TM, MRKT_AGR_YN, MRKT_AGR_DT, 이벤트약관동의여부 (EVT_AGR_YN), 이벤트약관동의일자 (EVT_AGR_DT), 이벤트약관동의여부 (EVT_AGR2_YN), 이벤트약관동의일자 (EVT_AGR2_DT), JSESSION_ID, BADGE_GIFT_SEND_USER_NM, BADGE_GIFT_SEND_DTTM, BADGE_GIFT_YN, GIFT_CERT_PUSH_YN, GIFT_PUSH_YN, QCK_PAY_YN, QCK_UPD_DTTM, TAXI_USE_YN, TAXI_UPD_DTTM, MRKT_CNCL_DTTM, MRKT_AGR_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_password_reset_v1_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_password_reset_v1_u001_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U002.xml:10

## 목록 밖 — 보호 화면

이 화면들은 사람 손질로 md 를 바이트 그대로 둬 업무 절이 없다: EXW-UWV-70-30-50-C
