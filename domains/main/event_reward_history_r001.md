# 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출 (event_reward_history_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-EVNT-10-10-S | 이벤트 참여를 통해 적립받은 비플머니에 대한 적립 내역을 노출 | BPY-EVNT-10-10-S-e14 |

## 입력

- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)
- 페이지번호 (PAGE_NO)
- 거래일자 (TRX_DT)

## 출력

- 총금액 (TOT_AMT)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 추가데이터여부 (MORE_YN)
- HIST_LIST

## 데이터 처리

### 비플 리워드 SUM (TB_MNY_REWARD_TRAN_R003)

- 종류: SELECT
- 테이블: TB_MNY_REWARD_TRAN
- 입력: 앱코드 (APP_CD), MSGT_DIV_CD, 회원코드 (MEMB_CD), DYNAMIC_0

### 비플 리워드 내역 조회 (TB_MNY_REWARD_TRAN_R004)

- 종류: SELECT
- 테이블: TB_MNY_REWARD_TRAN, INFO, TB_MEMBER_MNY, TEST
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), START_DATE, END_DATE, 회원코드 (MEMB_CD), 앱코드 (APP_CD), START_DTTM, END_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), START_DATE, END_DATE, FROMCNT, TOCNT

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.event_reward_history_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/event_reward_history_r001_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_REWARD_TRAN_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_REWARD_TRAN_R004.xml:10
