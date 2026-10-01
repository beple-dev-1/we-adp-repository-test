# 메인 > 알림함 > 알림내역 조회 (main_notice2_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |
| HIT-COMN-20-10-S | 엔터프라이즈 - 알림함 | 화면 |

## 입력

- ALARM_CTGR_TYPE_CD
- ALARM_TYPE_CD
- PAGE_NO
- AFLT_ID

## 출력

- 추가데이터여부 (MORE_YN)
- 알림레코드 (ALARM_REC)

## 데이터 처리

### 푸쉬메시지 목록 조회 (TB_PUSH_MSG_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO, TB_NOTICE_MNG, TB_AFFILIATION_MNG, TB_PUSH_MSG, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, INOUT
- 입력: 앱코드 (APP_CD), TRX_DT3, TRX_DT1, TRX_DT2, 처리상태 (PROC_ST), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0, DYNAMIC_1, FROMCNT, TOCNT

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- 메시지: 올바르지 않은 검색 문자가 포함되어있습니다.[0]
  - 조건: StrUtil.isAbleInput(ALARM_CTGR_TYPE_CD) || StrUtil.isAbleInput(ALARM_TYPE_CD) || StrUtil.isAbleInput(AFLT_ID) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_r001_act.jsp:57)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_r001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PUSH_MSG_R001.xml:10
