# 오피스푸드(식사배송) 장바구니 - 업데이트 (bp_aflt_deliv_mybag_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | 화면 |

## 입력

- MENU_CNT
- 가격 (PRICE)
- 가맹점 장바구니 순번 (MYBAG_SEQ)
- MENU_SCHEDULE_ID
- 거래일자 (TRX_DT)
- SERVICE_TIME
- TOT_AMT
- 회원코드 (MEMB_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 오피스푸드(식사배송) 장바구니 - 업데이트 (TB_BP_AFLT_DELIV_MYBAG_MENU_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU
- 입력: MENU_CNT, 가격 (PRICE), 가맹점 장바구니 순번 (MYBAG_SEQ), MENU_SCHEDULE_ID, 거래일자 (TRX_DT), SERVICE_TIME

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_u001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_U001.xml:10
