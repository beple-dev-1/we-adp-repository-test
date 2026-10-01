# 이벤트 동의여부 변경 (CLAULIST0013_U01)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-COMN-10-10-40-S | 제로페이 이벤트 참여를 위한 개인정보 제3자 제공에 대한 동의 | 화면 |

## 입력

- 내용 (CTNT)
- 거래일자 (TRX_DT)
- 거래시간 (TRX_TM)

## 출력

- (없음)

## 데이터 처리

### 이벤트 동의여부 조회 (TB_ATTEND_MNG_R004)

- 종류: SELECT
- 테이블: TB_ATTEND_MNG
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), NOTI_SEQ

### 이벤트 동의여부 변경 (TB_ATTEND_MNG_U001)

- 종류: UPDATE
- 테이블: TB_ATTEND_MNG
- 입력: 내용 (CTNT), 거래일자 (TRX_DT), 거래시간 (TRX_TM), 앱코드 (APP_CD), 회원코드 (MEMB_CD), NOTI_SEQ

### 출석체크 이벤트 (TB_ATTEND_MNG_C001)

- 종류: INSERT
- 테이블: TB_ATTEND_MNG
- 입력: ATTEND_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 거래일자 (TRX_DT), 거래시간 (TRX_TM), NOTI_SEQ, 내용 (CTNT), EVENT_KEY, EVENT_VALUE

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLAULIST0013_U01.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/conf/claulist/CLAULIST0013_U01_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ATTEND_MNG_C001.xml:10
