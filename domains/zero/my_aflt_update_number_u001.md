# MY 가맹점 대표번호 수정 정보 반영 (my_aflt_update_number_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-20-20-S | 가맹점 프로필 > 대표번호 수정 | 화면 |

## 입력

- 가맹점ID (AFLT_ID)
- REPR_NO1
- REPR_NO2

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 마이가맹점 히스토리 원장 적재 (TB_AFFILIATION_MY_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_HIST, TB_AFFILIATION_MY
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### 마이가맹점 대표번호 수정 (TB_AFFILIATION_MY_U005)

- 종류: UPDATE
- 테이블: TB_AFFILIATION_MY
- 입력: REPR_NO1, REPR_NO2, 앱코드 (APP_CD), 가맹점ID (AFLT_ID)

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 알림 템플릿 조회 (TB_ALARM_INFO_R001)

- 종류: SELECT
- 테이블: TB_ALARM_INFO
- 입력: ALARM_CTGR_TYPE_CD, ALARM_TYPE_CD, ALARM_TMPL_CD

### 비플페이 가맹점정보 수정2 (TB_BP_AFLT_MNG_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MNG
- 입력: AFLT_TEL_NO, 비플가맹점순번 (BP_AFLT_SEQ)

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_number_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_number_u001_act.jsp:40
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
