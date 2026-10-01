# 식수신청_날짜선택 (ent_headcnt_calendar)

- 처리: 미확인
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MEAL-10-20-S | 식수 신청작성(본인) | 화면 |
| HIT-MEAL-20-20-S | 신청 신청_정보 입력 | 화면 |

## 입력

- BLOCK_LAST_DATE
- SEND_DATE_INPUT

## 출력

- BLOCK_LAST_DATE
- SEND_DATE_INPUT

## 데이터 처리

- (IDO 호출 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_calendar.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_calendar_act.jsp:28
