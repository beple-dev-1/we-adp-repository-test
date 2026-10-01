# 식수신청 정보등록 (ent_headcnt_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MEAL-20-30-S | 식수 신청_대상자정보입력 | 화면 |

## 입력

- ENT_HEADCNT_MAIN_DATA
- ENT_HEADCNT_USER_DATA

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 식수신청 정보조회2 (TB_ENT_HEADCNT_R002)

- 종류: SELECT
- 테이블: TB_ENT_HEADCNT, TB_ENT_HEADCNT_USER
- 입력: 연락처 (TEL_NO), STR_DT, 종료일자 (END_DT)

### 식수신청대상자 등록 (TB_ENT_HEADCNT_USER_C001)

- 종류: INSERT
- 테이블: TB_ENT_HEADCNT_USER
- 입력: HEADCNT_SEQ, HEADCNT_USER_SEQ, ACC_CARD_NO, 고객명 (USER_NM), 연락처 (TEL_NO), USER_TYPE, CORP_NM, CORP_DEPT_NM

### 식수신청관리 등록 (TB_ENT_HEADCNT_C001)

- 종류: INSERT
- 테이블: TB_ENT_HEADCNT, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG
- 입력: HEADCNT_SEQ, HEADCNT_TITLE, 내용 (CTNT), 처리상태 (PROC_ST), 회원코드 (MEMB_CD), 앱코드 (APP_CD), BREAKFAST_YN, LUNCH_YN, STR_DT, 종료일자 (END_DT), DATE_TYPE, BULK_YN, SETTLE_TYPE, MANAGER_CORP_NO, MANAGER_CORP_NM, MANAGER_NM, MANAGER_DEPT, MANAGER_TEL_NO, MANAGER_EMAIL, CORP_NM, CORP_DEPT_NM, FILE_PATH, 파일명 (FILE_NM), FILE_EXT, ORI_FILE_NM, 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), CUR_WORK, SITE_CD, SITE_CD, WORK_CD, 이용기관ID (ORG_ID)

### 식수신청 상세정보조회 (TB_ENT_HEADCNT_R003)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP
- 입력: HEADCNT_SEQ

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: DB처리중 오류가 발생하였습니다.
  - 조건: DomainUtil.isError(idoTbEntHeadcntOutR002) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_c001_act.jsp:101)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_c001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_USER_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
