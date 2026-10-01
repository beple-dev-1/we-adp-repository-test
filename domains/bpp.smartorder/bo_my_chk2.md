# 비플오더가입 업종,대표번호확인 (bo_my_chk2)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-70-20-10-S | 비플오더 가입 1/3 — 기본정보 확인 | 화면 |

## 입력

- BP_AFLT_SEQ

## 출력

- 가맹점명 (AFLT_NM)
- BUSINESS
- 카테고리 (CTGRY)
- AFLT_ADDRS
- 가맹점주소2 (AFLT_ADDRS2)
- AFLT_TEL_NO
- IMG_PATH
- IMG_FILE_NM
- IMG_FILE_EXT
- DATE_CURRENT
- DAY_NM
- MNF_MIN_TM
- MNF_MAX_TM
- ODR_MIN_REQ
- ODR_PRIVIL
- 비플가맹점순번 (BP_AFLT_SEQ)
- ORIGIN_INFO
- CTGR_CATG_CD
- 가맹점ID (AFLT_ID)
- BP_AFLT_ID
- ING_CNT
- COMPLETED_CNT
- SERVICE_CHNL
- CTGR_CATG_NM
- CATE_GROUP_NM
- PROFILE_IMG_PATH

## 데이터 처리

### 비플오더가입 주문서비스 영업시간관리 등록/수정 (TB_BP_AFLT_MY_U001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, UPSERT
- 입력: BP_AFLT_ID, BP_AFLT_ST, REPR_MOB_NO, AFLT_TEL_NO, 가맹점명 (AFLT_NM), AFLT_ADDRS, 가맹점주소2 (AFLT_ADDRS2), CTGR_CATG_CD, AFLT_ZIP_CD, LAT, LNG, IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, AFLT_INFO, PICK_YN, DELI_YN, STORE_YN, ODR_YN, ORIGIN_INFO, ODR_MIN_AMT_YN, ODR_MIN_AMT, MNF_MIN_TM, MNF_MAX_TM, 최소주문수량 (MIN_ORDER_QTY), MAX_ORDER_QTY, 수량제한없음 여부 (NO_LIMIT_QTY_YN), 평균배송최소시간 (MIN_AVG_DELI_TIME), 평균배송최대시간 (MAX_AVG_DELI_TIME), ODR_MIN_REQ, ODR_PRIVIL, 가맹점ID (AFLT_ID), 앱코드 (APP_CD), 주문제한여부 (LMT_ODR_YN), 주문제한갯수 (LMT_ODR_CNT), BRAND_CD, STORE_NO, ROBOT_YN, BILL_NO_STD, BILL_NO_END, DEAL_NO_STS, DEAL_NO_END, POS_NO, 비플가맹점순번 (BP_AFLT_SEQ), 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 메인 (TB_BP_AFLT_MY_R008)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플페이 가맹점정보 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R017)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플페이 가맹점정보 수정 (TB_BP_AFLT_MNG_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MNG
- 입력: 가맹점명 (AFLT_NM), 사업자번호 (BIZ_NO), 종사업장코드 (SUB_BIZ_CD), AFLT_REPR_NM, AFLT_TEL_NO, AFLT_ZIP_CD, AFLT_ADDRS, 가맹점주소2 (AFLT_ADDRS2), AFLT_ST, BUSINESS, 카테고리 (CTGRY), SP_AFLT_YN, PG_AFLT_ID, DANGOL_APLY_YN, 대표자명 (REPR_NM), ZIP_CD, ADDRS, ADDRS2, CTGR_CATG_CD, 계좌번호 (ACCT_NO), 은행코드 (BANK_CD), 계좌실명 (ACCT_NM), FEE_RATE, UPJONG_UPPER_CD, UPJONG_LWER_CD, AFLT_TYPE, 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- 메시지: PG 가맹점 등록 통지 API 호출 실패
  - 조건: DomainUtil.isError(bcsOutABAR) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_chk2_act.jsp:105)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_chk2.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_chk2_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R017.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_U001.xml:10
