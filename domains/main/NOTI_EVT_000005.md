# 출석체크 이벤트 (NOTI_EVT_000005)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- NOTI_SEQ
- 내용 (CTNT)
- 마켓팅 정보 수신동의여부 (MRKT_AGREE_YN)
- EVENT_KEY
- EVENT_VALUE

## 출력

- 거래시간 (TRX_TM)
- 거래일자 (TRX_DT)

## 데이터 처리

### 마케팅 수신 동의 (TB_MEMBER_APP_U014)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: MRKT_AGR_YN, MRKT_AGR_DT, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 출석체크 이벤트 (TB_ATTEND_MNG_C001)

- 종류: INSERT
- 테이블: TB_ATTEND_MNG
- 입력: ATTEND_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 거래일자 (TRX_DT), 거래시간 (TRX_TM), NOTI_SEQ, 내용 (CTNT), EVENT_KEY, EVENT_VALUE

### 공지사항 조회 (TB_NOTICE_MNG_R002)

- 종류: SELECT
- 테이블: TB_NOTICE_MNG
- 입력: 거래번호 (SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.NOTI_EVT_000005.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/NOTI_EVT_000005_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U014.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_R002.xml:10
