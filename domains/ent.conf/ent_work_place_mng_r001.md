# 엔터프라이즈 근무지 설정 데이터 조회 (ent_work_place_mng_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-CONF-20-S | 엔터프라이즈 근무지 설정 | 화면 |

## 입력

- TYPE
- WORK_CD

## 출력

- REC
- DETAIL_REC

## 데이터 처리

### 엔터프라이즈 근무지 원장 조회(APP_CD) (TB_WORK_CD_MNG_R002)

- 종류: SELECT
- 테이블: TB_WORK_CD_MNG
- 입력: 앱코드 (APP_CD), SITE_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_work_place_mng_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/conf/ent_work_place_mng_r001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_R002.xml:10
