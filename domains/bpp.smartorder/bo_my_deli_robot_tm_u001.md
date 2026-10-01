# 비플오더 평균배송시간(로봇배송) 수정 (bo_my_deli_robot_tm_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-30-20-S | 평균배송시간(로봇배송) | BPG-OBO-10-30-20-S-e05 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 평균배송최소시간 (MIN_AVG_DELI_TIME)
- 평균배송최대시간 (MAX_AVG_DELI_TIME)

## 출력

- (없음)

## 데이터 처리

### 비플오더가입 주문서비스 영업시간관리 등록/수정 (TB_BP_AFLT_MY_U001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, UPSERT
- 입력: BP_AFLT_ID, BP_AFLT_ST, REPR_MOB_NO, AFLT_TEL_NO, 가맹점명 (AFLT_NM), AFLT_ADDRS, 가맹점주소2 (AFLT_ADDRS2), CTGR_CATG_CD, AFLT_ZIP_CD, LAT, LNG, IMG_PATH, IMG_FILE_NM, IMG_FILE_EXT, AFLT_INFO, PICK_YN, DELI_YN, STORE_YN, ODR_YN, ORIGIN_INFO, ODR_MIN_AMT_YN, ODR_MIN_AMT, MNF_MIN_TM, MNF_MAX_TM, 최소주문수량 (MIN_ORDER_QTY), MAX_ORDER_QTY, 수량제한없음 여부 (NO_LIMIT_QTY_YN), 평균배송최소시간 (MIN_AVG_DELI_TIME), 평균배송최대시간 (MAX_AVG_DELI_TIME), ODR_MIN_REQ, ODR_PRIVIL, 가맹점ID (AFLT_ID), 앱코드 (APP_CD), 주문제한여부 (LMT_ODR_YN), 주문제한갯수 (LMT_ODR_CNT), BRAND_CD, STORE_NO, ROBOT_YN, BILL_NO_STD, BILL_NO_END, DEAL_NO_STS, DEAL_NO_END, POS_NO, 비플가맹점순번 (BP_AFLT_SEQ), 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_deli_robot_tm_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_deli_robot_tm_u001_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_U001.xml:10
