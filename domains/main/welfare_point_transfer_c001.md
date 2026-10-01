# 복지포인트 이관 요청 (welfare_point_transfer_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-WELF-40-10-S | 복지포인트 이관 요청 화면 | 화면 |

## 입력

- 이용기관구분 (ORG_TP)
- 이용기관ID (ORG_ID)
- 기관명 (ORG_NM)
- 사업자번호 (BIZ_NO)
- 카드번호 (CARD_NO)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 한도 (LMT_AMT)
- 한도일련번호 (LMT_SEQ)
- 한도명 (LMT_NM)
- 그룹명 (CLS_DSP_NM)
- 계좌사업자번호 (ACCT_BIZ_NO)
- CLS_DSP_SEQ
- 결제금액 (AMT)
- EMPL_NO
- URL

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- EMPL_NO
- REG_DTTM

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 복지포인트 전환이력 저장 (TB_WLFE_POINT_TRANS_HIST_C001)

- 종류: INSERT
- 테이블: TB_WLFE_POINT_TRANS_HIST
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 거래코드 (TRX_CD), 거래시간 (TRX_TM), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 결제금액 (AMT), EMPL_NO, 이용기관ID (ORG_ID), 이용기관구분 (ORG_TP), 기관명 (ORG_NM), 사업자번호 (BIZ_NO), 카드번호 (CARD_NO), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), 한도 (LMT_AMT), 한도일련번호 (LMT_SEQ), 한도명 (LMT_NM), CLS_DSP_SEQ, 그룹명 (CLS_DSP_NM), 응답코드 (RES_CD), 응답메시지 (RES_MSG)

### 복지포인트 전환집계원장(upsert) (TB_WLFE_POINT_TRANS_SUM_C001)

- 종류: INSERT
- 테이블: TB_WLFE_POINT_TRANS_SUM
- 입력: 거래일자 (TRX_DT), 거래코드 (TRX_CD), 앱코드 (APP_CD), 이용기관구분 (ORG_TP), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), SUCCESS_CNT, SUCCESS_AMT, FAIL_CNT, FAIL_AMT

### 가비몰 회원 가입 정보 변경 (TB_MEMBER_U009)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: GABI_JOIN_YN, 가비파트너스 일비몰 회원가입일시 (GABI_JOIN_DTTM), GABI_JOIN_NO, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.welfare_point_transfer_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/welfare_point_transfer_c001_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WLFE_POINT_TRANS_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WLFE_POINT_TRANS_SUM_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U009.xml:10
