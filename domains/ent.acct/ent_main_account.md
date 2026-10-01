# 계좌관리(개인) (ent_main_account)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-10-S | 엔터프라이즈 주 충전수단 조회 화면 | HIT-CONF-10-S-e18, HIT-CONF-10-S-e19 |

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_main_account.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/acct/ent_main_account_act.jsp:24
