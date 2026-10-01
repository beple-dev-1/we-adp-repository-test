# 가맹점 상세정보 조회 (zero_srch_aflt_dtl_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-20-10-10-S | 가맹점찾기 > 가맹점 상세 | 화면 |
| MGC-LGFT-10-10-30-S | 가맹점 정보 | 화면 |

## 입력

- AFLT_ID

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- REC
- ZPP_REC

## 데이터 처리

### 가맹점 영업시간 조회 (TB_AFFILIATION_MY_WT_INFO_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_WT_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### MY 가맹점 메뉴판 조회 (TB_AFFILIATION_MY_BOARD_INFO_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID)

### MY 가맹점 상품 조회 (TB_AFFILIATION_MY_PDT_INFO_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### 가맹점서비스 사진관리원장 조회 (TB_AFFILIATION_MY_IMG_INFO_R001)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 가맹점ID (AFLT_ID), 가맹점ID (AFLT_ID), 앱코드 (APP_CD)

### 직가맹점 및 상세 조회(TB_AFFILIATION_MY_R006 대응) (TB_BP_AFLT_MNG_R005)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_AFFILIATION_MY_BOARD_INFO, TB_AFFILIATION_MY_PDT_INFO, TB_AFFILIATION_MY_IMG_INFO, TB_AFFILIATION_MY_WT_INFO, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_AFFILIATION_MY_DETAIL, TB_MEMBER_APP, TB_CTGR_CATG_CD
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- 메시지: 오류가 발생하였습니다.
  - 조건: body.isEmpty() (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_dtl_r001_act.jsp:266)
- 메시지: 가맹점 결제 가능 상품권 조회 중 오류가 발생하였습니다.
  - 조건: 미확인(if 밖) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_dtl_r001_act.jsp:280)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_dtl_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_dtl_r001_act.jsp:39
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_PDT_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_IMG_INFO_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R005.xml:10
