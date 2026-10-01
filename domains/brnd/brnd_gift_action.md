# 브랜드상품권 환불/선물취소/유효기간 연장처리 (brnd_gift_action)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-30-S | 브랜드상품권 환불 계좌 조회 | 화면 |
| BPY-HIST-10-20-10-S | 브랜드상품권 구매내역 상세조회 (info) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 직원상태 (STATUS)
- 브랜드상품권 번호 (BGC_NO)
- GIFT_SRNO
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- REFUND_ABL_YN

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- EXTENTION_DATA
- REFUND_DATA

## 데이터 처리

### 브랜드상품권 주문내역 등록 (TB_BRND_ODR_C001)

- 종류: INSERT
- 테이블: TB_BRND_ODR
- 입력: ORDER_DT, ORDER_ID, 거래구분 (DEAL_DIV_CD), ORDER_TM, 회원코드 (MEMB_CD), PURCHASE_PRICE, ORDER_STS, ORDER_FAIL_MSG, PRE_RETV_TNS_NO, CAN_DT, CAN_TM, CAN_TRAN_NO, CAN_BIGO, 앱코드 (APP_CD), BRND_CHNL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_action.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_action_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_ODR_C001.xml:10
