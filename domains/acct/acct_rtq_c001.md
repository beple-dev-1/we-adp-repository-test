# 계좌등록 (acct_rtq_c001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ACCT-10-S | 계좌 등록/해지 요청 | 화면 |

## 입력

- (없음)

## 출력

- 충건수 (TOT_CNT)

## 데이터 처리

### 계좌목록조회(비플pg,펌뱅킹) (TB_ACCOUNT_R025)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_ACCOUNT_HB, TB_MEMBER_APP, TB_MEMBER
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.acct_rtq_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/acct_rtq_c001_act.jsp:41
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R025.xml:10
