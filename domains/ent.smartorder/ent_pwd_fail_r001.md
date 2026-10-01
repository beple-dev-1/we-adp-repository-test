# 임직원인증 패스워드 초기화 (ent_pwd_fail_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-52-S | 주문취소처리 | 화면 |

## 입력

- 휴대폰번호 (MOB_NO)
- TYPE

## 출력

- FAIL_CNT
- MSG
- 코드 (CODE)

## 데이터 처리

### 핸드폰번호로 회원코드조회 (TB_MEMBER_APP_R006)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 휴대폰번호 (MOB_NO)

### 엔터프라이즈 회원 부가정보 조회 (TB_MEMBER_ENT_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR
- 입력: SITE_CD, 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 엔터프라이즈 회원 부가정보 업데이트 (TB_MEMBER_ENT_APP_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_ENT_APP
- 입력: EMPL_APRV_YN, EMPL_EMAIL, EMPL_NO, APRV_FAIL_CNT, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pwd_fail_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_pwd_fail_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U001.xml:10
