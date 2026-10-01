# 오피스푸드(식사배송) 장바구니 - 수량 및 한도 검증 (bp_aflt_deliv_mybag_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | BPG-OFFD-10-30-S-e04 |

## 입력

- 메뉴개수 (MENU_CNT)
- MENU_SCHEDULE_ID

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 거래일자 (TRX_DT)
- 메뉴명 (MENU_NAME)

## 데이터 처리

### 오피스푸드(식사배송) 장바구니 - 수량 및 한도 검증 (TB_BP_AFLT_DELIV_MENU_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_DELIV_MENU
- 입력: MENU_SCHEDULE_ID

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_r002_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_R003.xml:10
