# 브랜드상품권 구맥 조회 (이벤트) (NOTI_EVT_000006)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- (없음)

## 출력

- LM_PURCHASE_PRICE
- TM_PURCHASE_PRICE

## 데이터 처리

### 브랜드상품권 정상 총금액 조회(msgt_div_cd) (TB_BRND_TRAN_R005)

- 종류: SELECT
- 테이블: TB_BRND_TRAN
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000006.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000006_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BRND_TRAN_R005.xml:10
