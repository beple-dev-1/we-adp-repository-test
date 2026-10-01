# 브랜드상품권 웹뷰 API - ARS 요청 (BRND_ACCT_000004)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-30-S | 브랜드상품권 웹뷰 API - 계좌관리 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 오픈뱅킹회원번호 (CP_MEMB_NO)
- TOKEN

## 출력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 오픈뱅킹ARS승인일자 (ARS_TR_DT)
- 오픈뱅킹ARS거래번호 (ARS_TR_NO)

## 데이터 처리

### 은행 정보 조회 (TB_BANK_R006)

- 종류: SELECT
- 테이블: TB_BANK
- 입력: DYNAMIC_0

### ARS 거래 등록 (TB_CERTIFY_ARS_C001)

- 종류: INSERT
- 테이블: TB_CERTIFY_ARS
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), 회원명 (MEMB_NM), 휴대폰번호 (MOB_NO), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), TTS_MENT1, TTS_MENT2, ARS_ORG_CD, ARS_SECR_KEY, 거래코드 (TRX_CD), AUTH_PWD, CERTION_TID, EVDC_FILE_NM, 응답코드 (RSPS_CD), 응답메세지 (RSPS_MSG), 처리상태 (PROC_ST), OPEN_YN

### 기타집계 등록 (TB_ETC_SUM_C001)

- 종류: INSERT
- 테이블: TB_ETC_SUM
- 입력: 거래일자 (TRX_DT), 거래구분 (TRX_TP), TOT_CNT, SUCC_CNT, SUCC_CNT2, FAIL_CNT

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000004_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BANK_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ETC_SUM_C001.xml:10
