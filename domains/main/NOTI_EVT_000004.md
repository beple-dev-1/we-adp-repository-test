# 출석횟수학인 (NOTI_EVT_000004)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- NOTI_SEQ
- EVENT
- FILTER_DATE
- 대상이벤트ID (EVENT_KEY)

## 출력

- ATTEND_CNT

## 데이터 처리

### 이달의 출석 횟수 확인 (TB_ATTEND_MNG_R001)

- 종류: SELECT
- 테이블: TB_ATTEND_MNG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), NOTI_SEQ, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000004.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000004_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_R001.xml:10
