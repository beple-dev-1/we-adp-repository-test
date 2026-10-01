# 결제가능 상품권 조회API (brnd_webview_gift_pay_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-50-10-S | 브랜드상품권 상품권사용하기 화면 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- TOKEN
- 브랜드상품권ID (BGC_ID)

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- BGC_REC
- 브랜드상품권ID (BGC_ID)
- BGC_NM

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_pay_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_pay_r001_act.jsp:43
