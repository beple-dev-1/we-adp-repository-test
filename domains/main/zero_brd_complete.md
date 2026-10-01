# 브랜드상품권 구매 영수증 (zero_brd_complete)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-HIST-10-S | 결제내역 | 화면 |

## 입력

- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)

## 출력

- TRX_DT
- TRX_SEQ
- TRX_TM
- SALES_AMT
- MSG
- SUPPLY_AMT
- VAT
- MSG
- MSGT_DIV_CD

## 데이터 처리

### 브랜드상품권 거래원장 조회(다이나믹) (TB_BRND_TRAN_R001)

- 종류: SELECT
- 테이블: TB_BRND_TRAN
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_brd_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_brd_complete_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R001.xml:10
