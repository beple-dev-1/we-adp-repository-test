# KSQR온가신등록_정산정보_계좌실명조회(act) (ksqr_settle_info_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-60-S | KSQR온가신등록_정산정보 | MCH-KSQR-60-S-e15 |

## 입력

- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 사업자번호 (BIZ_NO)
- 생년월일 (BRT_DT)

## 출력

- 응답코드 (RSLT_CD)
- 응답메시지 (RSLT_MSG)
- 채번 (TRSC_SEQ_NO)
- 계좌실명 (ACCT_NM)

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_KSQR_AFLT_APY_TOKEN_R002, TB_KSQR_AFLT_APY_TOKEN_R001, TB_KSQR_AFLT_APY_TOKEN_U001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_settle_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_settle_info_r001_act.jsp:19
