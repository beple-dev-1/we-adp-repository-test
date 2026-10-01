# 비플머니 이벤트 고객센터 화면 (event_cs_center_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-EVNT-10-10-10-S | 비플머니 이벤트 고객센터 화면 | 화면 |

## 입력

- 광고아이디 (AD_ID)
- 앱코드 (APP_CD)
- TYPE

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- URL
- 앱코드 (APP_CD)
- APP_ID
- APP_SECRET
- SERVICE_KEY
- USER_KEY

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.event_cs_center_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/event_cs_center_r001_act.jsp:31
