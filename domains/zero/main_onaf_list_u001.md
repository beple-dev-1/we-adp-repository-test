# 비대면 결제 알림 설정 (main_onaf_list_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-20-10-S | 더보기>비대면결제내역 | 화면 |

## 입력

- 가맹점ID (AFLT_ID)
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 푸시수신여부 (PUSH_YN)
- 알림수신여부 (AL_YN)
- 알림톡 수신여부 (TALK_YN)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 마이가맹점 정보 조회(DYNAMIC) (TB_AFFILIATION_MY_R007)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 마이가맹점 상세 히스토리 원장 적재 (TB_AFFILIATION_MY_DETAIL_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_DETAIL_HIST, TB_AFFILIATION_MY_DETAIL
- 입력: FLAG, HIST_REG_MEMB_CD, 가맹점ID (AFLT_ID), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 마이가맹점 비대면결제 알림수신 정보 수정 (TB_AFFILIATION_MY_U002)

- 종류: UPDATE
- 테이블: TB_AFFILIATION_MY_DETAIL
- 입력: MNG_STS, MNG_LVL, MNG_NM, PROF_MNG_YN, TRAN_MNG_YN, BILL_MNG_YN, AFLT_MNG_PUSH_YN, TRAN_PUSH_YN, TRAN_PUSH_TYPE, REG_DTTM, UPD_DTTM, ACPT_DTTM, DSP_SEQ, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 가맹점ID (AFLT_ID)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.main_onaf_list_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/main_onaf_list_u001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_U002.xml:10
