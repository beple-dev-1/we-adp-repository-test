# MY 가맹점 프로필사진 등록/수정/삭제 (my_aflt_update_profileImg_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-10-50-S | 가맹점프로필 > 가맹점 프로필사진 등록 | BPY-MYAF-10-50-S-e08 |
| BPY-MYAF-20-S | MY 가맹점 기본 프로필 정보 수정 화면 | 화면 |

## 입력

- ADULT_LVL
- VIOLENCE_LVL
- RACY_LVL
- MEDICAL_LVL
- SPOOF_LVL
- AFLT_ID
- IMG_INFO

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 마이가맹점 히스토리 원장 적재 (TB_AFFILIATION_MY_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_HIST, TB_AFFILIATION_MY
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### 마이가맹점 프로필사진 업데이트 (TB_AFFILIATION_MY_U004)

- 종류: UPDATE
- 테이블: TB_AFFILIATION_MY
- 입력: IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, ADULT_LVL, SPOOF_LVL, MEDICAL_LVL, VIOLENCE_LVL, RACY_LVL, IMG_REG_MEMB_CD, IMG_REG_DTTM, 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 프로필이미지 수정 (TB_BP_AFLT_MY_U006)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MY
- 입력: IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, 비플가맹점순번 (BP_AFLT_SEQ)

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_profileImg_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_profileImg_u001_act.jsp:29
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
