# 웹뷰 API - 계좌삭제 (WEBVIEW_ACCT_000008)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-10-10-S | 계좌 관리 | 화면 |
| BPG-PGM-10-20-S | 계좌 선택 | 화면 |
| BPG-PGM-10-30-S | 계좌번호 입력 | 화면 |
| BPG-PGM-10-40-S | 계좌 등록 완료 | 화면 |
| BPG-PGM-10-50-S | 오픈뱅킹 약관 동의 | 화면 |
| BPG-PGM-10-60-S | 오픈뱅킹 금융정보조회 약관 | 화면 |

## 입력

- SEQ
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 회원코드 (MEMB_CD)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- PAYR_NO
- 앱코드 (APP_CD)
- 휴대폰번호 (MOB_NO)

## 출력

- (없음)

## 데이터 처리

### 계좌상세조회(BY KEY) (TB_ACCOUNT_R002)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌조회(하이브리드 조인) (TB_ACCOUNT_R022)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB
- 입력: 거래번호 (SEQ), 회원코드 (MEMB_CD)

### 하이브리드 계좌 삭제 (TB_ACCOUNT_HB_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT_HB
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 계좌삭제(BY KEY) (TB_ACCOUNT_D001)

- 종류: DELETE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 거래번호 (SEQ)

### 주계좌설정(최근등록계좌) (TB_ACCOUNT_U003)

- 종류: UPDATE
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD), 회원코드 (MEMB_CD)

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

## 실패

- 메시지: 선택하신 계좌가 존재하지 않습니다.
  - 조건: DomainUtil.getResultCount(idoOutAR002) == 0 (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000008_act.jsp:77)
- 메시지: 선택하신 계좌정보가 일치하지 않습니다.
  - 조건: !idoOutAR002.getString("BANK_CD").equals(input.getString("BANK_CD")) || !idoOutAR002.getString("MASK_ACCT_NO").equals(input.getString("ACCT_NO")) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000008_act.jsp:81)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.WEBVIEW_ACCT_000008.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/acct/WEBVIEW_ACCT_000008_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R022.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_HB_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
