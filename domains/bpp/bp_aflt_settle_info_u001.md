# 정산 정보 추가 (bp_aflt_settle_info_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MCH-AFLT-60-S | 정산정보 입력 | MCH-AFLT-60-S-e21 |

## 입력

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
- APPR_DTTM
- APPR_USER
- 생년월일 (BRT_DT)
- APPR_TX
- PRE_BIZ_YEAR_SALES
- CONST_WORKER_CNT
- CTGR_CATG_CD
- OWNER_REPR_SAME_YN
- UPJONG_CD
- SEOUL_APY_YN
- BP_AFLT_APY_YN
- 업종코드 (CTGR_CATG)
- AFLT_REPR_EMAIL
- AFLT_REPR_EMAIL_SELF_YN
- TAX_EMAIL_SELF_YN
- 온라인 비플 가맹점 채번 (APY_SEQ)
- 간편가입대상프랜차이즈 (SIMPLE_FRANCHISE)

## 출력

- (없음)

## 데이터 처리

### 온라인 비플 가맹점 update4 (TB_BP_AFLT_APY_U004)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_APY
- 입력: 처리상태 (PROC_ST), 은행코드 (BANK_CD), 계좌번호 (ACCT_NO), 계좌실명 (ACCT_NM), OWNER_REPR_SAME_YN, TAX_MNG_NM, TAX_MNG_MOB_NO, TAX_EMAIL, TAX_CONS_AGR_YN, TAX_EMAIL_SELF_YN, 간편가입대상프랜차이즈 (SIMPLE_FRANCHISE), 온라인 비플 가맹점 채번 (APY_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_settle_info_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_aflt_settle_info_u001_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_APY_U004.xml:10
