# 비대면 매장 검색 > 매장 검색 (zero_onaf2_list_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-30-30-S | 비대면결제 매장검색 | BPY-ONAF-30-30-S-e09 |

## 입력

- START_ZIP_CD
- END_ZIP_CD
- SEARCH_KEYWORD
- CATEGORY_CD
- LAT
- LNG

## 출력

- REC

## 데이터 처리

### 비대면결제 가맹점리스트 조회 (TB_AFFILIATION_MNG_R005)

- 종류: SELECT
- 테이블: TB_AFFILIATION_QR, TB_AFFILIATION_MNG, TB_CTGR_CATG_CD, TB_AFFILIATION_MY, TB_ONLN_AFF_MNG
- 입력: START_ZIP_CD, END_ZIP_CD, DYNAMIC_0, 앱코드 (APP_CD), 회원코드 (MEMB_CD), START_ZIP_CD, END_ZIP_CD, DYNAMIC_1, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_list_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_list_r002_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R005.xml:10
