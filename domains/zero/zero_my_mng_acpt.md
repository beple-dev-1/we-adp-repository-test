# 매니저 인증요청 수락 (zero_my_mng_acpt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-20-S | 알림함 | 화면 |

## 입력

- 가맹점ID (AFLT_ID)

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- MNG_NM
- MNG_MOB_NO
- BILL_MNG_YN
- PROF_MNG_YN
- TRAN_MNG_YN
- 가맹점명 (AFLT_NM)
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 가맹점ID (AFLT_ID)
- MY_AFLT_AGR_YN
- BO_MNG_YN

## 데이터 처리

### 직가맹점 및 상세 조회(TB_AFFILIATION_MY_R006 대응) (TB_BP_AFLT_MNG_R005)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 회원정보조회(부가정보) (TB_MEMBER_APP_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_mng_acpt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_mng_acpt_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_R001.xml:10
