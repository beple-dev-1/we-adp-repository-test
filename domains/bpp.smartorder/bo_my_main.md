# 비플오더 메인 (bo_my_main)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-20-S | 비플오더 주문서비스 설정 | 화면 |
| BPG-OBO-10-30-10-S | 주문설정(로봇배송) | 화면 |
| BPG-OBO-10-30-S | 비플오더 주문형태 선택 | 화면 |
| BPG-OBO-10-S | 비플오더 관리 메인 | BPG-OBO-10-S-e09 |
| BPG-OBO-20-S | 비플오더 메뉴관리 카테고리 | 화면 |
| BPG-OBO-30-S | 비플오더 메뉴관리 옵션 | 화면 |
| BPG-OBO-40-S | 비플오더 원산지 | 화면 |
| BPG-OBO-50-S | 비플오더 메뉴관리 메뉴 | 화면 |
| BPG-OBO-70-30-S | 비플오더 가입 완료 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 가맹점명 (AFLT_NM)
- BUSINESS
- 카테고리 (CTGRY)
- ADDR1
- ADDR2
- AFLT_TEL_NO
- REPR_NO1
- REPR_NO2
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
- ROBOT_AFLT_YN

## 데이터 처리

### 비플오더 메인 (TB_BP_AFLT_MY_R008)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR, TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY, TB_CTGR_CATG, TB_CTGR_CATG_CD
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R008.xml:10
