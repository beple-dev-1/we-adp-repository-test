# 온라인가맹점신청 최종확인 (bp_aflt_confirm)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-70-S | 본인인증 | MCH-AFLT-70-S-e29 |
| MCH-AFLT-80-S | 신청내역 메인 | 화면 |

## 입력

- APY_SEQ

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
- CTGR_CD
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
- SEOUL_APY_YN
- BP_AFLT_APY_YN
- CTGR_CATG
- AFLT_REPR_EMAIL
- AFLT_REPR_EMAIL_SELF_YN
- TAX_EMAIL_SELF_YN
- CTGR_CATG_NM
- 간편가입대상프랜차이즈 (SIMPLE_FRANCHISE)

## 데이터 처리

### 온라인 비플 가맹점 (TB_BP_AFLT_APY_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ)

### 서류첨부 내용 불러오기 (TB_BP_AFLT_APY_DOC_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY_DOC
- 입력: 온라인 비플 가맹점 채번 (APY_SEQ), DYNAMIC_0

### 비플가맹점 토큰조회 (TB_BP_AFLT_APY_TOKEN_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_APY_TOKEN
- 입력: CI, ACCESS_TOKEN

### 비플가맹점 토큰 만료시간 업데이트 (TB_BP_AFLT_APY_TOKEN_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_APY_TOKEN
- 입력: CI, ACCESS_TOKEN

### 업종 코드로 업종명 조회 (by CTGR_CATG) (TB_CTGRY_CODE_R002)

- 종류: SELECT
- 테이블: TB_CTGRY_CODE
- 입력: CTGR_CATG

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_confirm.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_confirm_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_DOC_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGRY_CODE_R002.xml:10
