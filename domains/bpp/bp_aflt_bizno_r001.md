# 사업자번호 검증 (bp_aflt_bizno_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-10-10-10-S | 사업자번호 입력 | MCH-AFLT-10-10-10-S-e10 |
| MCH-AFLT-80-10-S | 신청내역 심사중 | 화면 |

## 입력

- 사업자번호 (BIZ_NO)
- 종사업장코드 (SUB_BIZ_CD)
- SUB_BIZ_YN
- APY_URL
- MCP가맹점 여부 (MCP_YN)

## 출력

- STT_CD
- 총건수 (TOTAL_CNT)
- TAX_TYPE
- 온라인 비플 가맹점 채번 (APY_SEQ)
- 처리상태 (PROC_ST)
- APPR_ST
- APY_DT
- 종사업장코드 (SUB_BIZ_CD)
- 비플페이 가맹점 신청여부 (BP_AFLT_APY_YN)
- 해당 직가맹 수 (BPPAY_CNT)
- 해당 서울페이가맹점 수 (SEOULPAY_CNT)
- 서울페이 가맹점 신청여부 (SEOUL_APY_YN)
- 서울페이 온라인가맹점신청 상태 (SP_APPR_ST)

## 데이터 처리

### 사업자번호검증 (TB_BP_AFLT_APY_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY
- 입력: 사업자번호 (BIZ_NO), DYNAMIC_0

### 직가맹원장 조회(biz_no, sub_biz_no) (TB_BP_AFLT_MNG_R027)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG
- 입력: 사업자번호 (BIZ_NO), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_bizno_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_bizno_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10
