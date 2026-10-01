# 출석체크하기 (NOTI_EVT_000003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-10-S | 알림 | 화면 |
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- NOTI_SEQ
- EVENT
- 대상이벤트ID (EVENT_KEY)

## 출력

- MRKT_AGR_YN
- MRKT_AGR_DT
- 푸쉬등록여부 (PUSH_REG_YN)
- ATTEND_CNT
- ACCOUNT_CNT
- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)
- 내용 (CTNT)
- 대상이벤트ID (EVENT_KEY)
- EVENT_VALUE

## 데이터 처리

### 마케팅동의 여부 (TB_MEMBER_APP_R007)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 계좌 등록여부 (TB_ACCOUNT_R023)

- 종류: SELECT
- 테이블: TB_ACCOUNT
- 입력: 회원코드 (MEMB_CD)

### 해당일 출첵 안함 (TB_ATTEND_MNG_R002)

- 종류: SELECT
- 테이블: TB_ATTEND_MNG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), NOTI_SEQ, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000003_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R023.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_R002.xml:10
