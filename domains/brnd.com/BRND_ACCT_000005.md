# 브랜드상품권 웹뷰 API - ARS 인증 결과 확인 (BRND_ACCT_000005)

- 처리: 읽기
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
- TOKEN

## 출력

- 처리상태 (PROC_ST)
- RSPS_CD
- RSPS_MSG

## 데이터 처리

### ARS 거래 조회(BY KEY) (TB_CERTIFY_ARS_R001)

- 종류: SELECT
- 테이블: TB_CERTIFY_ARS
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_ACCT_000005.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_ACCT_000005_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CERTIFY_ARS_R001.xml:10
