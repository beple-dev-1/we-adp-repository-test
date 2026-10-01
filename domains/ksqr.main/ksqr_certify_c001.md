# KSQR온가신 본인인증 액션 (ksqr_certify_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-70-S | KSQR온가신 본인인증 | MCH-KSQR-70-S-e29 |

## 입력

- APY_NM
- 생년월일 (BRT_DT)
- 휴대폰번호 (MOB_NO)
- 사업자번호 (BIZ_NO)
- 거래번호 (TRX_SEQ)
- 인증번호 (APRV_NO)
- TAX_TYPE
- 종사업장코드 (SUB_BIZ_CD)
- 종사업장번호 유무 (SUB_BIZ_YN)
- 메이트포스 사용유무 (MATE_POS_YN)
- 도메인(서울페이:Y,비플페이:N) (IS_SEO)
- APY_URL
- MCP가맹점 여부 (MCP_YN)
- MRKT_AGR_YN

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 온라인 비플 가맹점 채번 (APY_SEQ)
- ACCESS_TOKEN

## 데이터 처리

### KSQR온가신 가맹점 신청 토큰관리 등록/수정 (TB_KSQR_AFLT_APY_TOKEN_C001)

- 종류: INSERT
- 테이블: TB_KSQR_AFLT_APY_TOKEN
- 입력: CI, DVD_ID, ACCESS_TOKEN

### KSQR온가신 가맹점 신청정보 등록 (TB_KSQR_AFLT_APY_C001)

- 종류: INSERT
- 테이블: TB_KSQR_AFLT_APY
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ), APY_ID, CI, APY_NM, 생년월일 (BRT_DT), 휴대폰번호 (MOB_NO), APPR_ST, APY_DT, APY_TM, 사업자번호 (BIZ_NO), TAX_TYPE, 종사업장코드 (SUB_BIZ_CD), 서울페이 가맹점 신청여부 (SEOUL_APY_YN), 비플페이 가맹점 신청여부 (BP_AFLT_APY_YN), 서울페이 온라인가맹점신청 상태 (SP_APPR_ST), EXM_APPR_ST, EXM_SP_APPR_ST, 메이트포스 사용유무 (MATE_POS_YN), APY_URL, MCP가맹점 여부 (MCP_YN), MRKT_AGR_YN

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_certify_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/main/ksqr_certify_c001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_TOKEN_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_C001.xml:10
