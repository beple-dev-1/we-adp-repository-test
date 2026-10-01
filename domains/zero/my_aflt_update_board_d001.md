# MY 가맹점 메뉴판 삭제 (my_aflt_update_board_d001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-10-10-S | 메뉴판 등록 | BPY-MYAF-10-10-S-e10 |

## 입력

- AFLT_ID
- MENU_SEQ

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 가맹점 서비스 메뉴판정보 히스토리등록 (TB_AFFILIATION_MY_BOARD_INFO_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_BOARD_INFO_HIST, TB_AFFILIATION_MY_BOARD_INFO
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD), MENU_SEQ

### MY 가맹점 메뉴판 삭제(DYNAMIC) (TB_AFFILIATION_MY_BOARD_INFO_D001)

- 종류: DELETE
- 테이블: TB_AFFILIATION_MY_BOARD_INFO
- 입력: 가맹점ID (AFLT_ID), DYNAMIC_0

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_board_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_board_d001_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ALARM_INFO_R001.xml:10
