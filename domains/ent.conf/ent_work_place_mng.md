# 엔터프라이즈 근무지 설정 (ent_work_place_mng)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-10-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- TYPE

## 출력

- ORG_WORK_NM
- WORK_CD
- WORK_NM
- DELV_SEQ
- DELV_NM
- DELV_DETAIL_NM

## 데이터 처리

### 엔터프라이즈 회원 부가정보 조회 (TB_MEMBER_ENT_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP, TB_WORK_CD_MNG, TB_CAFETERIA_WORK_PLCE, TB_CAFETERIA_DELV_ADDR
- 입력: SITE_CD, 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 근무지확인용 배달주소지 최신1건 조회 (TB_MEMBER_ENT_APP_DELV_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP_DELV, TB_CAFETERIA_DELV, TB_CAFETERIA_DELV_DETAIL
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), WORK_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_work_place_mng.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_work_place_mng_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_R002.xml:10
