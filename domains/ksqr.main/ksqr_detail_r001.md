# KSQR온가신등록_신청내역 상세(act) (ksqr_detail_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-80-10-S | KSQR온가신등록_신청내역 상세 | 화면 |

## 입력

- 온라인 비플 가맹점 채번 (APY_SEQ)

## 출력

- APY_DATA
- BP_AFLT_DATA
- SEOUL_DATA
- KSQR 특수가맹점 수수료 리스트 (KSQR_SPCL_PARTNER_RATE_LIST)
- KSQR_SMALLTD_TP
- KSQR_SP_FEE_RATE
- 심사내용 (EXM_TX)
- 자체 시스템별 수수료구간코드 (AFLT_SELF_TD)
- 소상공인구분코드 (SMALL_TD)
- 자체 시스템별 수수료율 (AFLT_SELF_RATE)

## 데이터 처리

### KSQR온가신 가맹점 신청내역 상세 조회 (TB_KSQR_AFLT_APY_R007)

- 종류: SELECT
- 테이블: TB_KSQR_AFLT_APY, TB_BP_AFLT_MNG
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ), CI, DYNAMIC_0

### 직가맹 원장 조회 (BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R028)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 가맹점 플랫폼 조회 (BP_AFLT_SEQ) (TB_AFLT_MST_R002)

- 종류: SELECT
- 테이블: TB_AFLT_MST
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### KSQR가맹점신청 가맹점 심사 거절내용 보기 (TB_KSQR_AFLT_APY_EXM_R001)

- 종류: SELECT
- 테이블: TB_KSQR_AFLT_APY_EXM
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ)

### 연계시스템별 플랫폼가맹점정보 조회 (TB_REL_AFLT_MST_R001)

- 종류: SELECT
- 테이블: TB_REL_AFLT_MST
- 입력: REL_SYS_ID, AFLT_MST_NO

### 특수가맹점 결제사별 수수료율 목록 조회 (가맹점 기준) (TB_AFLT_SPCL_PARTNER_RATE_R002)

- 종류: SELECT
- 테이블: TB_AFLT_SPCL_PARTNER_RATE, TB_REL_SYS_PARTNER
- 입력: AFLT_MST_NO, REL_SYS_ID

- 공통 헤더 처리(이 업무 아님): TB_KSQR_AFLT_APY_TOKEN_R002, TB_KSQR_AFLT_APY_TOKEN_R001, TB_KSQR_AFLT_APY_TOKEN_U001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_detail_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_detail_r001_act.jsp:14
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R028.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_EXM_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_REL_AFLT_MST_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SPCL_PARTNER_RATE_R002.xml:10
