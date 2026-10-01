# KSQR온가신등록 신청내역_조회2 (ksqr_list_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-80-S | KSQR온가신등록 신청내역 | 화면 |

## 입력

- CI

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### KSQR온가신 등록 신청내역 조회 (TB_KSQR_AFLT_APY_R003)

- 종류: SELECT
- 테이블: TB_KSQR_AFLT_APY
- 입력: CI, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_KSQR_AFLT_APY_TOKEN_R002, TB_KSQR_AFLT_APY_TOKEN_R001, TB_KSQR_AFLT_APY_TOKEN_U001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_list_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_list_r002_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R003.xml:10
