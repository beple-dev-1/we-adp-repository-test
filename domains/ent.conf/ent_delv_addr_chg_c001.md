# 엔터프라이즈 배송주소지 등록 (ent_delv_addr_chg_c001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-22-10-S | 스마트오더 주문 | HIT-ORDR-22-10-S-e06 |

## 입력

- WORK_CD
- 비플가맹점순번 (BP_AFLT_SEQ)
- DELV_SEQ
- DELV_DETAIL_SEQ

## 출력

- DELV_SEQ
- DELV_DETAIL_SEQ
- MSG

## 데이터 처리

### 구내식당 근무지 관리 원장 조회(WORK_CD) (TB_CAFETERIA_WORK_PLCE_R001)

- 종류: SELECT
- 테이블: TB_CAFETERIA_WORK_PLCE, TB_BP_AFLT_MY
- 입력: WORK_CD, 앱코드 (APP_CD)

### 딜리버리 장소 카테고리 조회 (TB_CAFETERIA_DELV_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV_DETAIL, TB_CAFETERIA_DELV
- 입력: WORK_CD, 비플가맹점순번 (BP_AFLT_SEQ)

### 딜리버리 주문시 가맹점 배송지 리스트 (TB_CAFETERIA_DELV_DETAIL_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_DELV, TB_CAFETERIA_DELV_DETAIL
- 입력: WORK_CD, 비플가맹점순번 (BP_AFLT_SEQ)

### 사용자 가맹점별 배달주소지 저장(upsert) (TB_MEMBER_ENT_APP_DELV_C001)

- 종류: SELECT
- 테이블: TB_MEMBER_ENT_APP_DELV
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), WORK_CD, DELV_SEQ, DELV_DETAIL_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_delv_addr_chg_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_delv_addr_chg_c001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_WORK_PLCE_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_DELV_C001.xml:10
