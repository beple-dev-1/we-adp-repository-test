# 신청내역 심사중 (bp_aflt_det)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-80-S | 신청내역 메인 | 화면 |

## 입력

- (없음)

## 출력

- ERROR_MSG

## 데이터 처리

### 온라인 비플 가맹점 (TB_BP_AFLT_APY_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ)

### 비플가맹점 토큰조회 (TB_BP_AFLT_APY_TOKEN_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY_TOKEN
- 입력: CI, ACCESS_TOKEN

### 비플가맹점 토큰 만료시간 업데이트 (TB_BP_AFLT_APY_TOKEN_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_APY_TOKEN
- 입력: CI, ACCESS_TOKEN

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_det.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_det_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
