# 브랜드상품권 선물 수락및 거절 action (brnd_webview_gift_mng_detail_u001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-40-10-S | 브랜드상품권 선물함 내역상세 조회 화면 | 화면 |

## 입력

- TOKEN
- GIFT_SRNO
- GIFT_UPDATE_TYPE

## 출력

- MSG
- 코드 (CODE)
- GIFT_DETAIL_RST

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_webview_gift_mng_detail_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/api/brnd_webview_gift_mng_detail_u001_act.jsp:47
