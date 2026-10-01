# 가맹점 프로필 > 가맹점 소개 수정 (my_aflt_update_intro)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-10-S | 가맹점 프로필 관리 | 화면 |

## 입력

- 가맹점ID (AFLT_ID)
- ENTER_FLAG

## 출력

- AFLT_INFO

## 데이터 처리

### 직가맹점 및 상세 조회(TB_AFFILIATION_MY_R006 대응) (TB_BP_AFLT_MNG_R005)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_intro.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_intro_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10
