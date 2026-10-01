# KSQR온가신등록 신청내역_조회1 (ksqr_list_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-70-S | KSQR온가신 본인인증 | MCH-KSQR-70-S-e29 |

## 입력

- 휴대폰번호 (MOB_NO)
- 인증번호 (APRV_NO)
- 거래번호 (TRX_SEQ)
- ACCESS_TOKEN

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 충건수 (TOT_CNT)
- ACCESS_TOKEN

## 데이터 처리

### KSQR온가신 가맹점 신청 토큰관리 등록/수정 (TB_KSQR_AFLT_APY_TOKEN_C001)

- 종류: INSERT
- 테이블: TB_KSQR_AFLT_APY_TOKEN
- 입력: CI, DVD_ID, ACCESS_TOKEN

### KSQR온가신 등록 신청내역 조회 CNT (CI) (TB_KSQR_AFLT_APY_R001)

- 종류: SELECT
- 테이블: TB_KSQR_AFLT_APY
- 입력: CI, DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_list_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_TOKEN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R001.xml:10
