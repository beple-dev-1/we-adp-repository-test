# 가맹점관리 > 결제내역 > 결제내역 조회 (zero_aflt_tran_r002)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFMG-20-S | 가맹점관리 > 결제내역 | 화면 |

## 입력

- ZP_COMPANY_ID
- PAGE
- PAGE_SIZE
- SCH_START_DATE
- SCH_END_DATE
- SCH_TEXT
- SCH_TYPE

## 출력

- TOTAL_CNT
- REC

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_aflt_tran_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/zero_aflt_tran_r002_act.jsp:35
