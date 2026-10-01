# 스마트오더 임직원도메인검증 (smt_odr_certify_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-88-S | 스마트오더 임직원도메인검증 | HIT-ORDR-88-S-e10 |

## 입력

- EMAIL
- 거래번호 (SEQ)
- 휴대폰번호 (MOB_NO)
- 회원명 (MEMB_NM)
- EMPLOYEE_YN

## 출력

- 거래번호 (TRX_SEQ)
- 충건수 (TOT_CNT)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 메일도메인 검증 (TB_BP_AFLT_DOMAIN_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_DOMAIN
- 입력: 거래번호 (SEQ), CORP_DOMAIN

### TB_BP_AFLT_CORP_CERTIFY_R001 (TB_BP_AFLT_CORP_CERTIFY_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_CORP_CERTIFY
- 입력: EMAIL

### TB_BP_AFLT_CORP_CERTIFY_U001 (TB_BP_AFLT_CORP_CERTIFY_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_CORP_CERTIFY
- 입력: AUTH_PWD, 거래일자 (TRX_DT), 거래시간 (TRX_TM), EMAIL, 휴대폰번호 (MOB_NO)

### 이메일 발송 목록 추가2 (TB_EMAIL_C002)

- 종류: INSERT
- 테이블: TB_EMAIL
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 제목 (TITLE), CONTENT, 처리상태 (PROC_ST), RECV_EMAIL, SEND_EMAIL, SEND_DTTM, EMAIL_SEQ, ATCH_YN, ATCH_PATH, ATCH_NAME, CONTENT_TYPE

### TB_BP_AFLT_CORP_CERTIFY_C001 (TB_BP_AFLT_CORP_CERTIFY_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_CORP_CERTIFY
- 입력: 거래번호 (TRX_SEQ), 거래일자 (TRX_DT), 거래시간 (TRX_TM), AUTH_PWD, EMAIL, 회원코드 (MEMB_CD), 회원명 (MEMB_NM), 휴대폰번호 (MOB_NO)

### TB_BP_AFLT_CORP_CERTIFY_R003 (TB_BP_AFLT_CORP_CERTIFY_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_CORP_CERTIFY
- 입력: EMAIL, 휴대폰번호 (MOB_NO)

### 스마트오더 인증여부 (TB_MEMBER_APP_U016)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: SMT_ODR_YN, SMT_ODR_DISCOUNT_YN, SMT_CORP_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_certify_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_certify_c001_act.jsp:43
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DOMAIN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_EMAIL_C002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U016.xml:10
