# 현대_공지사항관리_등록 (ent_noti_mng_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-30-S | 공지사항 관리 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 공지여부 (NOTI_YN)
- NOTI_STR_DT
- 제목 (TITLE)
- 내용 (CTNT)
- NOTI_ENT
- NOTI_HEAD
- USER_ID
- 거래번호 (SEQ)
- 거래일자 (TRX_DT)
- 거래번호 (TRX_SEQ)
- 회원코드 (MEMB_CD)
- 휴대폰번호 (MOB_NO)
- 거래구분 (TRX_TP)
- MSG
- WRK_ID
- SNDR_CD
- 제어코드 (CTRL_CD)
- GRP_ID
- COMP_ID
- COMP_MSG_ID
- RE_TRX_YN
- RMK
- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- 처리상태 (PROC_ST)
- ALARM_CTGR_TYPE_CD
- ALARM_TYPE_CD
- NOTI_EVNT_DTL
- REG_DTTM
- UPD_DTTM
- PUSH_TRX_DT
- PUSH_TRX_SEQ
- NOTI_HEAD

## 출력

- MSG
- 코드 (CODE)
- 거래번호 (SEQ)
- 앱코드 (APP_CD)
- 공지여부 (NOTI_YN)
- NOTI_STR_DT
- 제목 (TITLE)
- 내용 (CTNT)
- NOTI_ENT
- NOTI_HEAD
- USER_ID
- REG_DTTM
- UPD_DTTM
- PUSH_TRX_DT
- PUSH_TRX_SEQ
- ALARM_CTGR_TYPE_CD
- ALARM_TYPE_CD
- ALARM_TYPE_NM
- NOTI_EVNT_DTL
- EVNT_ID

## 데이터 처리

### 현대_공지사항관리_등록 (TB_NOTICE_MNG_ENT_C001)

- 종류: INSERT
- 테이블: TB_NOTICE_MNG
- 입력: 거래번호 (SEQ), 앱코드 (APP_CD), 공지여부 (NOTI_YN), NOTI_STR_DT, 제목 (TITLE), 내용 (CTNT), NOTI_ENT, USER_ID, NOTI_HEAD

### 공지사항 관리 SEQ 상세 조회 (ADM_TB_NOTICE_MNG_R003)

- 종류: SELECT
- 테이블: TB_ALARM_INFO, TB_NOTICE_MNG, TB_PUSH_MSG
- 입력: 거래번호 (SEQ)

### 알람 푸시 정보 저장 (ADM_TB_PUSH_MSG_C001)

- 종류: INSERT
- 테이블: TB_PUSH_MSG
- 입력: 거래일자 (TRX_DT), 거래번호 (TRX_SEQ), 회원코드 (MEMB_CD), 휴대폰번호 (MOB_NO), 거래구분 (TRX_TP), 제목 (TITLE), MSG, 내용 (CTNT), WRK_ID, SNDR_CD, USER_ID, 제어코드 (CTRL_CD), GRP_ID, COMP_ID, COMP_MSG_ID, RE_TRX_YN, RMK, 앱코드 (APP_CD), 응답코드 (RSPS_CD), 응답메세지 (RSPS_MSG), 처리상태 (PROC_ST), ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, NOTI_EVNT_DTL

### 현대_공지사항관리_알림정보_수정 (ADM_TB_NOTICE_MNG_U001)

- 종류: UPDATE
- 테이블: TB_NOTICE_MNG
- 입력: PUSH_TRX_DT, PUSH_TRX_SEQ, 거래번호 (SEQ), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_noti_mng_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_noti_mng_c001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_NOTICE_MNG_ENT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_NOTICE_MNG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_PUSH_MSG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.ADM_TB_NOTICE_MNG_U001.xml:10
