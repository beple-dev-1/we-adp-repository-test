# MY 가맹점 업종 정보 수정 정보 반영 (my_aflt_update_ctgr_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-20-10-S | 가맹점 프로필 > 업종 수정 | BPY-MYAF-20-10-S-e04 |

## 입력

- 가맹점ID (AFLT_ID)
- CTGR_CATG_CD
- 앱코드 (APP_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 마이가맹점 히스토리 원장 적재 (TB_AFFILIATION_MY_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_HIST, TB_AFFILIATION_MY
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### 마이가맹점 원장 업데이트 (TB_AFFILIATION_MY_U003)

- 종류: UPDATE
- 테이블: TB_AFFILIATION_MY
- 입력: 가맹점명 (AFLT_NM), REPR_MOB_NO, REPR_NO1, REPR_NO2, ADDR1, ADDR2, CTGR_CATG_CD, ZIP_CD, LAT, LNG, AFLT_INFO, IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, ADULT_LVL, VIOLENCE_LVL, RACY_LVL, MEDICAL_LVL, SPOOF_LVL, MY_AFLT_ST, 앱코드 (APP_CD), 가맹점ID (AFLT_ID)

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_ctgr_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_ctgr_u001_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
