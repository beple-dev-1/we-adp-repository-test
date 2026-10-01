# 식수 신청근무지조회(본인) (ent_me_headcnt_work_cds_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MEAL-10-20-S | 식수 신청작성(본인) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- HEADCNTRST

## 데이터 처리

### 엔터프라이즈 사원정보 조회 (TB_MEMBER_ENT_APP_R005)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_ENT_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 엔터프라이즈 근무지 원장 등록/수정 (TB_WORK_CD_MNG_C002)

- 종류: INSERT
- 테이블: TB_WORK_CD_MNG
- 입력: 앱코드 (APP_CD), WORK_CD, WORK_NM, USE_YN, SITE_CD

### 엔터프라이즈 근무지 원장 조회(식수) (TB_WORK_CD_MNG_R003)

- 종류: SELECT
- 테이블: TB_WORK_CD_MNG
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_me_headcnt_work_cds_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_me_headcnt_work_cds_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_C002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_R003.xml:10
