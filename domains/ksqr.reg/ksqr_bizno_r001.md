# KSQR온가신등록_사업자번호 조회(act) (ksqr_bizno_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-10-20-10-S | KSQR온가신등록_사업자번호 입력 | MCH-KSQR-10-20-10-S-e07 |
| MCH-KSQR-80-10-S | KSQR온가신등록_신청내역 상세 | 화면 |

## 입력

- 사업자번호 (BIZ_NO)
- 종사업장코드 (SUB_BIZ_CD)
- SUB_BIZ_YN

## 출력

- STT_CD
- 총건수 (TOTAL_CNT)
- TAX_TYPE
- 온라인 비플 가맹점 채번 (APY_SEQ)
- 처리상태 (PROC_ST)
- APPR_ST
- APY_DT
- 종사업장코드 (SUB_BIZ_CD)
- 서울페이 가맹점 신청여부 (SEOUL_APY_YN)
- 비플페이 가맹점 신청여부 (BP_AFLT_APY_YN)
- 해당 직가맹 수 (BPPAY_CNT)
- 해당 서울페이가맹점 수 (SEOULPAY_CNT)
- 서울페이 온라인가맹점신청 상태 (SP_APPR_ST)
- KSQR_CNT

## 데이터 처리

### KSQR온가신 가맹점 신청-사업자번호검증 (TB_KSQR_AFLT_APY_R004)

- 종류: SELECT
- 테이블: TB_KSQR_AFLT_APY
- 입력: 사업자번호 (BIZ_NO), DYNAMIC_0

### 직가맹원장 조회(biz_no, sub_biz_no) (TB_BP_AFLT_MNG_R027)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MNG
- 입력: 사업자번호 (BIZ_NO), DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_bizno_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_bizno_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R004.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R027.xml:10
