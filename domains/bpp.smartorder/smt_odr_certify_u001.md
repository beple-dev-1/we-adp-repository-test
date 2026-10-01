# 스마트오더 임직원 메일인증 (smt_odr_certify_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-88-S | 스마트오더 임직원도메인검증 | HIT-ORDR-88-S-e10 |

## 입력

- AUTH_PWD
- EMAIL
- 거래번호 (SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### TB_BP_AFLT_CORP_CERTIFY_R001 (TB_BP_AFLT_CORP_CERTIFY_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_CORP_CERTIFY
- 입력: EMAIL

### 고객상태를 업데이트 (TB_BP_AFLT_CORP_CERTIFY_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_CORP_CERTIFY
- 입력: CORP_MEMB_YN, EMAIL

### 스마트오더 인증여부 (TB_MEMBER_APP_U016)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: SMT_ODR_YN, SMT_ODR_DISCOUNT_YN, SMT_CORP_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_certify_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_certify_u001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_CORP_CERTIFY_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U016.xml:10
