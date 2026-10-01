# 스탬프 이벤트 참여하기 (knb_stamp_agr)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-10-S | 알림 | 화면 |
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |

## 입력

- NOTI_SEQ
- 내용 (CTNT)

## 출력

- (없음)

## 데이터 처리

### 출석체크 이벤트 (TB_ATTEND_MNG_C001)

- 종류: INSERT
- 테이블: TB_ATTEND_MNG
- 입력: ATTEND_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 거래일자 (TRX_DT), 거래시간 (TRX_TM), NOTI_SEQ, 내용 (CTNT), EVENT_KEY, EVENT_VALUE

### TB_KNB_STAMP_C001 (TB_KNB_STAMP_C001)

- 종류: INSERT
- 테이블: TB_KNB_STAMP
- 입력: STAMP_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 거래구분 (TRX_TP), 처리상태 (PROC_ST), PROC_DTTM, RES_CD, STAMP_USER_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.knb_stamp_agr.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/knb_stamp_agr_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KNB_STAMP_C001.xml:10
