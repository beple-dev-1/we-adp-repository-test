# 비플페이 혜택 이동 데이터 생성 (event_main_r001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-EVNT-10-S | 비플페이 혜택 메인 페이지 | 화면 |

## 입력

- TYPE
- 광고아이디 (AD_ID)
- 동의여부 (AGR_YN)
- 앱코드 (APP_CD)

## 출력

- URL
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- TYPE
- 앱코드 (APP_CD)
- APP_SECRET
- SERVICE_KEY
- APP_ID
- USER_KEY

## 데이터 처리

### 에이닉 동의 현황 업데이트 (TB_MEMBER_APP_U020)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: 에이닉 서비스 약관동의 여부 (ANICK_AGR_YN), 에이닉 서비스 약관동의 일시 (ANICK_AGR_DTTM), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.event_main_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/event_main_r001_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U020.xml:10
