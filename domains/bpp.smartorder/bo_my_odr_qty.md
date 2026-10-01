# 주문가능수량 설정 (bo_my_odr_qty)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-30-10-S | 주문설정(로봇배송) | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- PRE_URL

## 출력

- 최소주문수량 (MIN_ORDER_QTY)
- MAX_ORDER_QTY
- PRE_URL
- 수량제한없음 여부 (NO_LIMIT_QTY_YN)

## 데이터 처리

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_odr_qty.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_odr_qty_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
