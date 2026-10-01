# 비플오더 주문서비스 주문완료시간 (bo_my_odr_tm)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-20-S | 비플오더 주문서비스 설정 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

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

### 비플오더 메인 (TB_BP_AFLT_MY_R008)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_odr_tm.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_odr_tm_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
