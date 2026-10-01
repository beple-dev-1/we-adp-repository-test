# 비플머니 충전 (zero_mny_chrg)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MNY-10-10-S | 비플머니 충전 | 화면 |
| BPY-MNY-10-S | 비플머니 기본정보 | BPY-MNY-10-S-e12 |

## 입력

- (없음)

## 출력

- MNY_CUR_PRICE
- TOTAL_CNT
- 비플머니 1회 충전 최소 금액 (MNY_CHRG_ONCE_MIN_AMT)
- 비플머니 1회 충전 최대 금액 (MNY_CHRG_ONCE_MAX_AMT)
- 비플머니 1일 충전 최대 금액 (MNY_CHRG_DAY_MAX_AMT)
- 비플머니 보유 한도 금액 (MNY_POSS_MAX_AMT)
- 일일 충전 금액 (DAY_TOTAMT)
- 비플머니 월 충전 최대 금액 (MNY_CHRG_MM_MAX_AMT)
- 월 충전 금액 (MON_TOTAMT)
- ACCT_REC
- 통합 비플머니 잔액 (ITGR_MNY_CUR_PRICE)

## 데이터 처리

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 비플머니 총 잔액 조회(전체 앱 통합 한도) (TB_MEMBER_MNY_R014)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 비플머니 일일 충전 금액 조회 (TB_MNY_TRAN_MST_R002)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

### 비플머니 월 충전 금액 조회 (TB_MNY_TRAN_MST_R009)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 거래일자 (TRX_DT), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_mny_chrg.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_mny_chrg_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R009.xml:10
