# 가맹점프로필 > 가맹점 프로필사진 등록 (my_aflt_update_profileImg)

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

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- IMG_INFO
- CTGR_CATG_CD
- CTGR_CATG_NM

## 데이터 처리

### 마이가맹점 원장 조회( BY AFLT_ID) (TB_AFFILIATION_MY_R009)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.my_aflt_update_profileImg.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/my_aflt_update_profileImg_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_R009.xml:10
