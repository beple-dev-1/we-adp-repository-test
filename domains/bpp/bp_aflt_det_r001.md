# 신청내역 상세 (bp_aflt_det_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-80-10-S | 신청내역 심사중 | 화면 |

## 입력

- 온라인 비플 가맹점 채번 (APY_SEQ)

## 출력

- BP_AFLT_DATA
- SEOUL_DATA
- 심사내용 (EXM_TX)
- APY_DATA

## 데이터 처리

### 신청내역 상세 (TB_BP_AFLT_APY_R005)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY, TB_BP_AFLT_MNG
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ)

### 직가맹 원장 조회 (BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R028)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 가맹점 플랫폼 조회 (BP_AFLT_SEQ) (TB_AFLT_MST_R002)

- 종류: SELECT
- 테이블: TB_AFLT_MST
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 온라인가맹점신청 가맹점 심사 거절내용 보기 (TB_BP_AFLT_APY_EXM_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY_EXM
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_det_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_det_r001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R028.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_MST_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_EXM_R001.xml:10
