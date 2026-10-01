# 개인 제로페이 결제화면 호출 (zero_onaf_approve)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-10-10-S | 비대면 결제매장 상세정보 | BPY-ONAF-10-10-S-e12 |

## 입력

- QR코드 (QR_CODE)

## 출력

- QR코드 (QR_CODE)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 가맹점명 (AFLT_NM)
- 결제 1회 최소금액 (APR_ONCE_MIN_AMT)
- 결제 1회 최대금액 (APR_ONCE_MAX_AMT)
- 결제 1일 최대 금액 (APR_DAY_MAX_AMT)
- 결제 월 최대 금액 (APR_MM_MAX_AMT)
- 사용자 일누적 결제금액 (USER_DAY_AMT)
- 사용자 월누적 금액 (USER_MM_AMT)
- 대표자명 (REPR_NM)
- 결제금액 (AMT)
- 가맹점ID (AFLT_ID)
- 거래구분 (TRX_TP)
- ADDRS
- ADDRS2
- TEL_NO

## 데이터 처리

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 가맹점ID (AFLT_ID)

### 제로페이 가맹점QR정보 조회 (TB_AFFILIATION_QR_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_QR
- 입력: AFLT_ID, QR_CODE

### 일일 거래금액(여러거래 통합) (TB_ZEROPAY_TRAN_R027)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST
- 입력: 거래일자 (TRX_DT), INPUT_0, INPUT_1, INPUT_2, INPUT_3, INPUT_4, CI, 앱코드 (APP_CD), DYNAMIC_0, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_1, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_2

### 월 거래금액(여러거래 통합) (TB_ZEROPAY_TRAN_R026)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_ZEROPAY_PG_TRAN, TB_MNY_TRAN_MST
- 입력: 거래일자 (TRX_DT), INPUT_0, INPUT_1, INPUT_2, INPUT_3, INPUT_4, CI, 앱코드 (APP_CD), DYNAMIC_0, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_1, 거래일자 (TRX_DT), 앱코드 (APP_CD), CI, DYNAMIC_2

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_approve.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_approve_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_QR_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R027.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R026.xml:10
