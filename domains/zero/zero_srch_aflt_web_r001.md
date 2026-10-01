# 상품권 사용처도회(지도용) API (zero_srch_aflt_web_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-30-S | 가맹점찾기를 PC 및 모바일브라우저에서 조회 | 화면 |

## 입력

- 판매채널코드 (SALE_CHANNEL)
- 사용자번호 (USER_NO)
- 상품권ID (ZPP_ID)
- LAT
- LNG
- 제로페이 상품권 요청데이터 검증 값 (ZPPHASH)
- DISTANCE

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- COMPANY_REC

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_web_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_web_r001_act.jsp:43
