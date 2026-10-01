# 식권제로페이 주문원장 등록 (zero_meal_ticket_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-PAY-10-S | 식권제로페이 결제방식선택 | 화면 |
| BPY-PAY-50-S | 식권제로페이 결제(보유식권 1개)+함께결제 N | 화면 |

## 입력

- REC_INDEX
- TRX_TP

## 출력

- ODR_ID
- ODR_DT

## 데이터 처리

### 식권제로페이 주문원장 거래내역 등록 (TB_ZEROPAY_MT_ODR_C001)

- 종류: INSERT
- 테이블: TB_ZEROPAY_MT_ODR
- 입력: ORDER_DT, ORDER_ID, 거래번호 (SEQ), 회원코드 (MEMB_CD), 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 결제금액 (PAY_AMT), 한도 (LMT_AMT), 카드번호 (CARD_NO), 고객명 (USER_NM), CLS_DSP_SEQ, 그룹명 (CLS_DSP_NM), 한도일련번호 (LMT_SEQ), 한도명 (LMT_NM), 부서명 (DEPT_NM), 부서코드 (DEPT_CD), TGT_YN, MAIN_YN, REG_DTTM, 거래구분 (TRX_TP)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_meal_ticket_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_meal_ticket_c001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ZEROPAY_MT_ODR_C001.xml:10
