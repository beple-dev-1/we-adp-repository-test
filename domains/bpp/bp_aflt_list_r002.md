# 신청내역 메인 (bp_aflt_list_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-80-S | 신청내역 메인 | 화면 |

## 입력

- CI
- AC
- 도메인(서울페이:Y,비플페이:N) (IS_SEO)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### 신청내역 메인 (TB_BP_AFLT_APY_R004)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY
- 입력: CI, DYNAMIC_0

### 비플가맹점 토큰조회 (TB_BP_AFLT_APY_TOKEN_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY_TOKEN
- 입력: CI, ACCESS_TOKEN

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_list_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_list_r002_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10
