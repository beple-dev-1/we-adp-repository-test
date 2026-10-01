# 엔터프라이즈 근무지 설정 (ent_work_place_mng_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-20-S | 엔터프라이즈 근무지 설정 | HIT-CONF-20-S-e06 |

## 입력

- WORK_CD

## 출력

- (없음)

## 데이터 처리

### 엔터프라이즈 회원 부가정보 근무지 업데이트 (TB_MEMBER_ENT_APP_U002)

- 종류: UPDATE
- 테이블: TB_MEMBER_ENT_APP
- 입력: ORG_WORK_NM, 원 근무지 코드 (ORG_WORK_CD), WORK_CD, SITE_CD, 이용기관ID (ORG_ID), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_work_place_mng_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_work_place_mng_u001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_ENT_APP_U002.xml:10
