# 가맹점 찾기 결과 조회 (ent_aflt_srch_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-SRCH-30-S | 가맹점 찾기 목록 조회 화면 | HIT-SRCH-30-S-e13, HIT-SRCH-30-S-e14, HIT-SRCH-30-S-e18 |

## 입력

- 나의 경도 (MY_LNG)
- 나의 위도 (MY_LAT)
- LAT
- LNG
- 정렬 (ARRANGE)
- 업종 카테고리 코드 (CTGR_CD)
- 검색 필터 코드 (FILTER_CD)
- ADDR
- LIMIT_CNT
- REQUEST_OFFSET

## 출력

- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 충건수 (TOT_CNT)

## 데이터 처리

### 현재위치 시/도 가져오기 (TB_POST_DO_R004)

- 종류: SELECT
- 테이블: TB_POST_DO, TB_POST_SI
- 입력: SRCH_WORD, SRCH_WORD2

### 통합 가맹점 원장 조회 (가맹점 찾기 목록) (TB_AFFILIATION_MST_R005)

- 종류: SELECT
- 테이블: TB_CTGR_CATG_CD, TB_CTGR_CATG, TB_AFFILIATION_MST, TB_BP_AFLT_MNG, TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 나의 위도 (MY_LAT), 나의 경도 (MY_LNG), 나의 위도 (MY_LAT), 나의 경도 (MY_LNG), LAT, LNG, LAT, LNG, FROM_ZIP_CD, TO_ZIP_CD, FROM_ZIP_CD, TO_ZIP_CD, DYNAMIC_0, DYNAMIC_1

### 가맹점 찾기 목록 총 건수 조회 (TB_AFFILIATION_MST_R006)

- 종류: SELECT
- 테이블: TB_CTGR_CATG_CD, TB_CTGR_CATG, TB_AFFILIATION_MST, TB_BP_AFLT_MNG, TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 나의 위도 (MY_LAT), 나의 경도 (MY_LNG), 나의 위도 (MY_LAT), 나의 경도 (MY_LNG), LAT, LNG, LAT, LNG, FROM_ZIP_CD, TO_ZIP_CD, FROM_ZIP_CD, TO_ZIP_CD, DYNAMIC_0, DYNAMIC_1

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_srch_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/srch/ent_aflt_srch_list_r001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R006.xml:10
