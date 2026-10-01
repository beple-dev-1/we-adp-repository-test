# 통합 비대면결제 결제 완료 (zero_one_onaf_complete)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(IDO 동적 이름)

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-20-S | 스마트오더 영수증 | BPG-HIST-10-20-S-e04 |
| BPY-HIST-40-20-S | 제로페이 영수증 | BPY-HIST-40-20-S-e04 |
| BPY-HIST-40-30-S | 제로페이 영수증 v2 | BPY-HIST-40-30-S-e11 |
| BPY-ONAF-70-S | 통합 비대면결제 결제 과정 | 화면 |
| BPY-PAY-10-10-S | 법인 제로페이 결제화면 호출 | 화면 |
| BPY-PAY-30-S | 개인제로페이 MPM 결제 | 화면 |

## 입력

- QR거래일자 (QR_TRX_DT)
- QR거래번호 (QR_TRX_SEQ)
- TRX_TP
- AFLT_ID
- AFLT_NM
- ORDER_ID
- AMT
- MEMB_NM
- MOB_NO
- MEMO
- MASKING_YN
- CSBC_YN
- CSBC_AMT
- CSBC_TYPE
- TYPE_CD
- SVC_TYPE

## 출력

- 거래번호 (TRX_SEQ)
- 업무코드 (BIZ_CD)
- 거래코드 (TRX_CD)
- 결제금액 (AMT)
- QR거래일자 (QR_TRX_DT)
- QR거래번호 (QR_TRX_SEQ)
- 가맹점명 (AFLT_NM)
- TEL_NO
- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)
- 가맹점ID (AFLT_ID)
- 메모 (MEMO)
- TRX_TP
- MASKING_YN
- ORDER_ID
- TRX_DT

## 데이터 처리

- (IDO 호출 없음) — IDO 동적 이름

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_one_onaf_complete.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_one_onaf_complete_act.jsp:32
