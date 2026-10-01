# MY 가맹점 영업시간 등록/수정 정보 반영 (my_aflt_update_wt_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-20-30-S | 가맹점 프로필 > 영업시간 수정 | BPY-MYAF-20-30-S-e09 |

## 입력

- DAY_INFO
- 가맹점ID (AFLT_ID)
- ETC_INFO

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 가맹점 서비스 영업시간 히스토리 등록 (TB_AFFILIATION_MY_WT_INFO_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_WT_INFO_HIST, TB_AFFILIATION_MY_WT_INFO
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### MY가맹점 영업시간 등록/수정 (TB_AFFILIATION_MY_WT_INFO_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_WT_INFO, TEMP
- 입력: 앱코드 (APP_CD), 가맹점ID (AFLT_ID), WT_TYPE, MON_ETC, MON_STR_DT, MON_END_DT, MON_HOL_YN, TUE_ETC, TUE_STR_DT, TUE_END_DT, TUE_HOL_YN, WED_ETC, WED_STR_DT, WED_END_DT, WED_HOL_YN, THU_ETC, THU_STR_DT, THU_END_DT, THU_HOL_YN, FRI_ETC, FRI_STR_DT, FRI_END_DT, FRI_HOL_YN, SAT_ETC, SAT_STR_DT, SAT_END_DT, SAT_HOL_YN, SUN_ETC, SUN_STR_DT, SUN_END_DT, SUN_HOL_YN, ETC_INFO, REG_MEMB_CD

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_wt_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_wt_c001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
