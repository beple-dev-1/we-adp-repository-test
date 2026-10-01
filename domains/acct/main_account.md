# 계좌관리(개인) (main_account)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-10-S | 스마트오더 결제 | 화면 |
| BPG-YGYO-20-10-S | 요기요 결제 | 화면 |
| BPY-BRND-10-20-S | 브랜드상품권 상품권 구매 | 화면 |
| BPY-BRND-10-S | 브랜드상품권 구매가능 상품권 상세조회 | 화면 |
| BPY-BRND-30-S | 브랜드상품권 환불 계좌 조회 | 화면 |
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |
| BPY-PAY-10-10-S | 법인 제로페이 결제화면 호출 | 화면 |
| BPY-PAY-10-20-S | 식권제로페이 함께결제 (list) | 화면 |
| BPY-PAY-10-S | 식권제로페이 결제방식선택 | 화면 |
| BPY-PAY-20-10-S | 제로페이 결제 메인 > 계좌 상세 | 화면 |
| BPY-PAY-20-20-S | 개인 제로페이 사용자 체크 | 화면 |
| BPY-PAY-20-S | 제로페이 결제 메인 > 계좌 목록 | 화면 |
| BPY-PAY-30-S | 개인제로페이 MPM 결제 | 화면 |
| BPY-PAY-50-S | 식권제로페이 결제(보유식권 1개)+함께결제 N | 화면 |
| BPY-WELF-30-S | 복지포인트 결제 검증 | 화면 |
| BPY-WELF-40-S | 복지포인트 이용정보 조회 | 화면 |
| MGC-LGFT-20-10-S | 지역상품권 Gateway | 화면 |

## 입력

- REF_URL
- 주문번호 (ODR_NO)
- 사용자번호 (USER_NO)
- 거래구분 (DEAL_DIV_CD)
- 판매채널코드 (SALE_CHANNEL)
- 상품금액 (PRDT_AMT)
- 상품명 (PRDT_NM)
- CALL_BACK_URL
- BRD_YN
- WACT_CPLX_PARAM
- CPLX_REF_URL

## 출력

- 오픈뱅킹회원번호 (CP_MEMB_NO)
- BRD_YN
- RETURN_TO_PAYMENT_YN

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_account.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/acct/main_account_act.jsp:24
