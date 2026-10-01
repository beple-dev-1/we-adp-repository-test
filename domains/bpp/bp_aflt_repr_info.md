# 사장님 정보 입력 (bp_aflt_repr_info)

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

- APY_SEQ
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
- ACCT_NM
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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_repr_info.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_repr_info_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_TOKEN_U001.xml:10
