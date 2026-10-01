# 가맹점찾기 > 상품권 사용처별 가맹점 검색 API (zero_srch_aflt_srch_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-20-10-S | 가맹점찾기 > 상품권 사용처별 가맹점 검색 | 화면 |
| MGC-LGFT-10-10-20-S | 가맹점 찾기 | 화면 |
| MGC-LGFT-10-10-S | 매장검색(카테고리·지도로 찾기) | 화면 |

## 입력

- ZPP_ID
- SEARCH_KEYWORD
- LAT
- LNG
- CATEGORY_CD
- START_ZIP_CD
- END_ZIP_CD
- REQ_PAGE
- ORDER_CODE

## 출력

- RSPS_CD
- RSPS_MSG
- 현재페이지 (CURRENT_PAGE)
- 시작페이지 (START_PAGE)
- 전체건수 (TOTAL)
- 전체페이지 (TOTAL_PAGE)
- REC

## 데이터 처리

### 통합 가맹점 원장 조회_리스트형(LAT, LNG, ZIP_CD)_API와 컬럼 일치 (TB_AFFILIATION_MST_R016)

- 종류: SELECT
- 테이블: TB_CTGR_CATG_CD, TB_AFFILIATION_MST, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TEMP
- 입력: LAT, LNG, FROM_ZIP_CD, TO_ZIP_CD, DYNAMIC_0, DYNAMIC_1

### 통합 가맹점 원장 조회_리스트형(count) (TB_AFFILIATION_MST_R017)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MST, TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: FROM_ZIP_CD, TO_ZIP_CD, DYNAMIC_0

### 가맹점찾기 > 기아 복자포인트 I형, II형 (TB_AFFILIATION_MNG_R037)

- 종류: SELECT
- 테이블: TB_CTGR_CATG_CD, TB_CTGR_CATG_CD_V2, JSON_ARRAY_ELEMENTS, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, TB_WLFE_CTGR_CD, INOUT
- 입력: DYNAMIC_0, DYNAMIC_1, ORDER_CODE, ORDER_CODE

### 가맹점찾기 > 가맹점 매장 조회 (TB_AFFILIATION_MNG_R018)

- 종류: SELECT
- 테이블: TB_CTGR_CATG_CD, JSON_ARRAY_ELEMENTS, TB_AFFILIATION_MNG, TB_AFFILIATION_MY, INOUT
- 입력: DYNAMIC_0, ORDER_CODE, ORDER_CODE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r001_act.jsp:47
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R016.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MST_R017.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R037.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R018.xml:10
