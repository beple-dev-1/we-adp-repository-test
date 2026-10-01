# 비대면 결제 가맹점 즐겨찾기 등록/해제 (GATEWAY_044)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-30-10-S | 비대면결제매장 상세정보 | 화면 |
| BPY-ONAF-30-S | 비대면결제 메인 | 화면 |
| BPY-ONAF-40-S | 비대면결제 > 비대면결제과정 | 화면 |

## 입력

- USER_NO
- APP_CD
- AFLT_ID
- BOOKMARK_YN

## 출력

- RES_CD
- RES_MSG

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.GATEWAY_044.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/GATEWAY_044_act.jsp:27
