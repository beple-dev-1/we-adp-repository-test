# 알림함 모두읽기 처리 (main_notice2_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |
| HIT-COMN-20-10-S | 엔터프라이즈 - 알림함 | 화면 |

## 입력

- ALARM_CTGR_TYPE_CD
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 모두읽기처리 (TB_PUSH_MSG_U004)

- 종류: UPDATE
- 테이블: TB_PUSH_MSG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), ALARM_CTGR_TYPE_CD, CONFIRM_YN

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_u002_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_U004.xml:10
