# KSQR온가신등록_기본정보등록 (ksqr_base_info)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-KSQR-70-S | KSQR온가신 본인인증 | MCH-KSQR-70-S-e29 |
| MCH-KSQR-80-S | KSQR온가신등록 신청내역 | 화면 |

## 입력

- 온라인 비플 가맹점 채번 (APY_SEQ)

## 출력

- 온라인 비플 가맹점 채번 (APY_SEQ)
- CI
- APY_NM
- 휴대폰번호 (MOB_NO)
- APY_REPR_YN
- 처리상태 (PROC_ST)
- APPR_ST
- APY_DT
- APY_TM
- 사업자번호 (BIZ_NO)
- SHOP_NM
- CORP_NO
- BUSINESS
- 카테고리 (CTGRY)
- 업종 카테고리 코드 (CTGR_CD)
- ZIP_CD
- ADDRS
- ADDRS2
- 대표자명 (REPR_NM)
- REPR_BRT_DT
- REPR_MOB_NO
- REAL_OWNER_SKIP_CD
- REAL_OWNER_DOC
- REAL_OWNER_NM
- REAL_OWNER_BRT_DT
- REAL_OWNER_NATL
- AFLT_SHOP_NM_YN
- 가맹점명 (AFLT_NM)
- AFLT_REPR_NM
- AFLT_REPR_MOB_NO
- AFLT_ZIP_CD
- AFLT_ADDRS
- 가맹점주소2 (AFLT_ADDRS2)
- AFLT_TYPE
- AFLT_TEL_NO
- CARD_YN
- ZEROPAY_YN
- VAN_INFO
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 계좌실명 (ACCT_NM)
- TAX_MNG_NM
- TAX_MNG_MOB_NO
- TAX_EMAIL
- TAX_CONS_AGR_YN
- UPD_DTTM
- APPR_DTTM
- APPR_USER
- 생년월일 (BRT_DT)
- TAX_TYPE
- APPR_TX
- PRE_BIZ_YEAR_SALES
- CONST_WORKER_CNT
- CTGR_CATG_CD
- OWNER_REPR_SAME_YN
- UPJONG_CD
- 종사업장코드 (SUB_BIZ_CD)
- 서울페이 가맹점 신청여부 (SEOUL_APY_YN)
- 비플페이 가맹점 신청여부 (BP_AFLT_APY_YN)
- 업종코드 (CTGR_CATG)
- AFLT_REPR_EMAIL
- AFLT_REPR_EMAIL_SELF_YN
- TAX_EMAIL_SELF_YN
- 간편가입대상프랜차이즈 (SIMPLE_FRANCHISE)
- MCP가맹점 여부 (MCP_YN)

## 데이터 처리

### KSQR온가신 가맹점 신청정보 조회 (TB_KSQR_AFLT_APY_R005)

- 종류: SELECT
- 테이블: TB_KSQR_AFLT_APY
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ), CI, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_KSQR_AFLT_APY_TOKEN_R002, TB_KSQR_AFLT_APY_TOKEN_R001, TB_KSQR_AFLT_APY_TOKEN_U001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ksqr_base_info.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ksqr/reg/ksqr_base_info_act.jsp:14
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_KSQR_AFLT_APY_R005.xml:10
