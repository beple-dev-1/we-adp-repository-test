# 식수신청 정보등록(본인) (ent_me_headcnt_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MEAL-10-20-S | 식수 신청작성(본인) | 화면 |

## 입력

- ENT_HEADCNT_MAIN_DATA
- ENT_HEADCNT_USER_DATA

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- HEADCNTRST

## 데이터 처리

### 식수신청 중복조회8(본인) (TB_ENT_HEADCNT_R008)

- 종류: SELECT
- 테이블: TB_ENT_HEADCNT
- 입력: 회원코드 (MEMB_CD), STR_DT, 종료일자 (END_DT)

### 식수신청관리 등록 (TB_ENT_HEADCNT_C001)

- 종류: INSERT
- 테이블: TB_ENT_HEADCNT, TB_MEMBER_ENT_APP, TB_WORK_CD_MNG
- 입력: HEADCNT_SEQ, HEADCNT_TITLE, 내용 (CTNT), 처리상태 (PROC_ST), 회원코드 (MEMB_CD), 앱코드 (APP_CD), BREAKFAST_YN, LUNCH_YN, STR_DT, 종료일자 (END_DT), DATE_TYPE, BULK_YN, SETTLE_TYPE, MANAGER_CORP_NO, MANAGER_CORP_NM, MANAGER_NM, MANAGER_DEPT, MANAGER_TEL_NO, MANAGER_EMAIL, CORP_NM, CORP_DEPT_NM, FILE_PATH, 파일명 (FILE_NM), FILE_EXT, ORI_FILE_NM, 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), CUR_WORK, SITE_CD, SITE_CD, WORK_CD, 이용기관ID (ORG_ID)

### 식수신청 상세정보조회5 (TB_ENT_HEADCNT_R005)

- 종류: SELECT
- 테이블: TB_ENT_HEADCNT, TB_MEMBER
- 입력: HEADCNT_SEQ

### 식수신청관리 상태변경 (TB_ENT_HEADCNT_U001)

- 종류: UPDATE
- 테이블: TB_ENT_HEADCNT
- 입력: 처리상태 (PROC_ST), MANAGER_COMMENT, HEADCNT_SEQ

### 엔터프라이즈 회원 현근무지 정보변경 (TB_MEMBER_ENT_APP_U005)

- 종류: UPDATE
- 테이블: TB_MEMBER_ENT_APP
- 입력: WORK_CD, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: DB처리중 오류가 발생하였습니다.
  - 조건: DomainUtil.isError(idoTbEntHeadcntOutR008) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_c001_act.jsp:83)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_c001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U005.xml:10
