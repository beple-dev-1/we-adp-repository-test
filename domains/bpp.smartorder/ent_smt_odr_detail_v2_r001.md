# 비플 오더 가맹점 정보 조회_v2 (ent_smt_odr_detail_v2_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-34-S | 가맹점 상세 기본정보_v2 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- LAT
- LNG

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### 비플오더 가맹점 관리 원장 조회(by BP_AFLT_SEQ) (TB_BP_AFLT_MY_R003)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: LAT, LNG, LAT, LNG, 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 가맹점 메뉴 조회 (TB_BP_AFLT_MY_PDT_INFO_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_CATG_PDT, TB_BP_AFLT_MY_CATG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 영업시간 조회(by bp_aflt_seq, app_cd, order_type) (TB_AFFILIATION_MY_WT_INFO_R008)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_WT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD), 주문유형 (ORDER_TYPE)

### 비플오더 영업시간 조회 (TB_AFFILIATION_MY_WT_INFO_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

### MY 가맹점 메뉴판 조회(by bp_aflt_seq) (TB_AFFILIATION_MY_BOARD_INFO_R004)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_BOARD_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

### 가맹점서비스 사진관리원장 조회(BY BP_AFLT_SEQ) (TB_AFFILIATION_MY_IMG_INFO_R002)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY_IMG_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- 메시지: 필수 값 BP_AFLT_SEQ가 누락되었습니다.
  - 조건: "".equals(bpAfltSeq) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/ent_smt_odr_detail_v2_r001_act.jsp:66)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_detail_v2_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/ent_smt_odr_detail_v2_r001_act.jsp:36
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_BOARD_INFO_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_IMG_INFO_R002.xml:10
