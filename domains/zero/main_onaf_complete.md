# 더보기>비대면결제내역>상세 (main_onaf_complete)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |
| BPY-HIST-20-10-S | 더보기>비대면결제내역 | 화면 |
| BPY-ONAF-40-10-S | 비대면 결제 완료 페이지 | 화면 |
| BPY-ONAF-70-10-S | 통합 비대면결제 결제 완료 | BPY-ONAF-70-10-S-e09 |

## 입력

- MEM_NM
- MDN
- MEMO
- AUTH_DATE
- AUTH_TIME
- REQ_TYPE
- TRADE_AMT
- PAY_VAT
- PAY_SERVICE_AMT
- MCH_SEND_UNIQ_NO
- ZPP_NM
- COMPANY_NM
- TRX_GB
- CHANNEL_GB
- UNTACT_NO
- TRX_SEQ
- TRX_DT
- AFLT_ID

## 출력

- MEM_NM
- MDN
- MEMO
- AUTH_DATE
- AUTH_TIME
- REQ_TYPE
- TRADE_AMT
- PAY_VAT
- PAY_SERVICE_AMT
- MCH_SEND_UNIQ_NO
- ZPP_NM
- COMPANY_NM
- TRX_GB
- CHANNEL_GB
- UNTACT_NO
- TRX_SEQ
- TRX_DT
- CERT_YN
- AFLT_ID

## 데이터 처리

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 비대면 결제내역 조회 (TB_ONLN_AFF_LIST_R002)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_MEMBER, TB_MEMBER_APP, TB_AFFILIATION_MNG, TB_ONLN_AFF_TRAN
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_complete_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_LIST_R002.xml:10
