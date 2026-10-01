# 웹뷰 API - 계좌검증요청 (WEBVIEW_ACCT_000002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-10-10-S | 계좌 관리 | 화면 |
| BPG-PGM-10-20-S | 계좌 선택 | 화면 |
| BPG-PGM-10-30-S | 계좌번호 입력 | BPG-PGM-10-30-S-e07 |
| BPG-PGM-10-40-S | 계좌 등록 완료 | 화면 |
| BPG-PGM-10-50-S | 오픈뱅킹 약관 동의 | 화면 |
| BPG-PGM-10-60-S | 오픈뱅킹 금융정보조회 약관 | 화면 |

## 입력

- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- VERIFY_TRX_DT
- VERIFY_TRX_TM
- 오픈뱅킹 검증번호 (VERIFY_NO)
- 오픈뱅킹인증일자 (VERIFY_TR_DT)
- 오픈뱅킹 검증거래번호 (VERIFY_TR_NO)

## 데이터 처리

### 계좌상세조회(BY 계좌번호) (TB_ACCOUNT_R008)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000002_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R008.xml:10
