# 기업 사용자 정보 검증 - 비플페이 (corp_user_reg_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-WELF-10-S | 기업복지 인증, 약관동의 관련 분기하여 각각 보여주는 페이지 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- EMPL_NO
- EMPL_PW
- ORG_CD
- PROD_DV

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 기관명 (ORG_NM)
- CLAUSE_LIST
- 이용기관구분 (ORG_TP)

## 데이터 처리

### 포인트 플랫폼 기업 인증 관리원장 조회 (TB_MEMBER_CORP_APRV_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_CORP_APRV
- 입력: DYNAMIC_0

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 기업인증 약관목록 조회 (TB_CORP_CLAUSE_R001)

- 종류: SELECT
- 테이블: TB_CORP_CLAUSE
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.corp_user_reg_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/corp_user_reg_r001_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CORP_CLAUSE_R001.xml:10
