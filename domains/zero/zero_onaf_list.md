# 비대면결제 가맹점리스트 조회 (zero_onaf_list)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-20-10-S | 비대면결제 가맹점리스트 조회 | BPY-ONAF-20-10-S-e08 |

## 입력

- START_ZIP_CD
- END_ZIP_CD
- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)
- 검색어 (SEARCH_KEYWORD)

## 출력

- REC

## 데이터 처리

### 비대면결제 가맹점리스트 조회 (TB_ONLN_AFF_LIST_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_QR, TB_AFFILIATION_MNG, TB_ONLN_AFF_MNG
- 입력: START_ZIP_CD, END_ZIP_CD, DYNAMIC_0, 앱코드 (APP_CD), 회원코드 (MEMB_CD), START_ZIP_CD, END_ZIP_CD, DYNAMIC_1, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_list.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_list_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_LIST_R001.xml:10
