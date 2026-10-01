# 비대면 결제 완료 > 결제 정보 조회 (zero_onaf2_complete_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-40-10-S | 비대면 결제 완료 페이지 | 화면 |

## 입력

- QR거래일자 (QR_TRX_DT)
- QR거래번호 (QR_TRX_SEQ)

## 출력

- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)
- 거래번호 (TRX_SEQ)
- 업무코드 (BIZ_CD)
- 거래코드 (TRX_CD)
- 결제금액 (AMT)
- 계좌번호 (ACCT_NO)
- QR거래일자 (QR_TRX_DT)
- QR거래번호 (QR_TRX_SEQ)
- 은행명 (BANK_NM)
- 가맹점명 (AFLT_NM)
- TEL_NO
- 마스킹여부 (MASKING_YN)
- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)
- 가맹점ID (AFLT_ID)
- 메모 (MEMO)

## 데이터 처리

### 결제 정보 조회 (by QR_TRX_DT, QR_TRX_SEQ) (TB_ZEROPAY_TRAN_R014)

- 종류: SELECT
- 테이블: TB_ZEROPAY_TRAN, TB_BANK, TB_MEMBER, TB_MEMBER_APP, TB_AFFILIATION_MNG, TB_ONLN_AFF_TRAN
- 입력: QR거래일자 (QR_TRX_DT), QR거래번호 (QR_TRX_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_complete_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_complete_r001_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_TRAN_R014.xml:10
