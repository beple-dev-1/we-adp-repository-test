# 더보기>비대면결제내역 조회 (main_onaf_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-20-10-S | 더보기>비대면결제내역 | 화면 |

## 입력

- AFLT_ID
- START_DATE
- END_DATE

## 출력

- REC

## 데이터 처리

### 직가맹점 또는 제로페이 가맹점(직가맹점X) 여부 조회 (TB_BP_AFLT_MNG_R024)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG, TB_AFFILIATION_MNG, TEMP
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID)

### 직가맹점정보 상세조회 (TB_BP_AFLT_MNG_R007)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_MEMBER_AFLT, TB_DANGOL_AFLT_MNG, TB_BP_AFLT_MNG, TB_AFFILIATION_MY
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 가맹점ID (AFLT_ID)

### 가맹점정보 조회 (TB_AFFILIATION_MNG_R012)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_CTGR_CATG_CD, TB_MEMBER_AFLT, TB_AFFILIATION_QR, TB_AFFILIATION_MNG, TB_AFFILIATION_MY
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 가맹점ID (AFLT_ID)

### 더보기>비대면결제내역 조회 (TB_ONLN_AFF_TRAN_R001)

- 종류: SELECT
- 테이블: JSON_ARRAY_ELEMENTS, TB_MEMBER_APP, TB_MEMBER, TB_AFFILIATION_MNG, TB_ONLN_AFF_TRAN, TB_ZEROPAY_TRAN, TEMP
- 입력: 앱코드 (APP_CD), START_DATE, END_DATE, 앱코드 (APP_CD), 가맹점ID (AFLT_ID), START_DATE, END_DATE, 앱코드 (APP_CD), 가맹점ID (AFLT_ID), START_DATE, END_DATE, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_onaf_list_r001_act.jsp:113
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R024.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_TRAN_R001.xml:10
