# 보유 상품권 조회 (zero_srch_aflt_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-20-S | 가맹점찾기 > 메인 | 화면 |
| MGC-LGFT-10-10-10-S | 보유중인 상품권으로 찾기 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- ZPP_REC

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_r001_act.jsp:47
