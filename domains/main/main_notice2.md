# 알림함 (main_notice2)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-50-S | 매니저 인증요청 수락 | 화면 |

## 입력

- (없음)

## 출력

- 가맹점알림유형레코드 (AFLT_ALARM_TYPE_REC)
- 비플알림유형레코드 (BP_ALARM_TYPE_REC)
- MY_AFLT_REC

## 데이터 처리

### 더보기> 등록된 마이 가맹점 조회2 (TB_BP_AFLT_MY_R010)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD, TB_AFFILIATION_MNG
- 입력: 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), DYNAMIC_0, 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), DYNAMIC_1

### 제로페이 가맹점ID 기준, 제로페이가맹점+직가맹점 총건수 조회 (TB_BP_AFLT_MNG_R015)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MNG, TB_BP_AFLT_MNG
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID)

### 비플페이 가맹점 중 MY가맹점 조회 (TB_BP_AFLT_MNG_R016)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD
- 입력: 앱코드 (APP_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), DYNAMIC_0

### 알림 카테고리별 알림유형 조회 (TB_ALARM_INFO_R002)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: (없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_notice2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/main_notice2_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R010.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R015.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R016.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R002.xml:10
