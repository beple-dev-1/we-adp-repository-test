# 주문설정(로봇배송) (bo_my_main_robot_info)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-30-S | 비플오더 주문형태 선택 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 비플가맹점순번 (BP_AFLT_SEQ)
- ODR_MIN_REQ
- ODR_YN
- ODR_YN_NM
- ODR_PRIVIL
- 가맹점ID (AFLT_ID)
- MNF_MAX_TM
- MNF_MIN_TM
- 최소주문수량 (MIN_ORDER_QTY)
- MAX_ORDER_QTY
- 수량제한없음 여부 (NO_LIMIT_QTY_YN)
- 평균배송최소시간 (MIN_AVG_DELI_TIME)
- 평균배송최대시간 (MAX_AVG_DELI_TIME)
- BP_AFLT_ID
- MON_STR_DT
- MON_END_DT
- MON_HOL_YN
- MON_ETC
- MON_NM
- TUE_STR_DT
- TUE_END_DT
- TUE_HOL_YN
- TUE_ETC
- TUE_NM
- WED_STR_DT
- WED_END_DT
- WED_HOL_YN
- WED_ETC
- WED_NM
- THU_STR_DT
- THU_END_DT
- THU_HOL_YN
- THU_ETC
- THU_NM
- FRI_STR_DT
- FRI_END_DT
- FRI_HOL_YN
- FRI_ETC
- FRI_NM
- SAT_STR_DT
- SAT_END_DT
- SAT_HOL_YN
- SAT_ETC
- SAT_NM
- SUN_STR_DT
- SUN_END_DT
- SUN_HOL_YN
- SUN_ETC
- SUN_NM
- ETC_INFO
- MON_PREP_STR_TM
- MON_PREP_END_TM
- TUE_PREP_STR_TM
- TUE_PREP_END_TM
- WED_PREP_STR_TM
- WED_PREP_END_TM
- THU_PREP_STR_TM
- THU_PREP_END_TM
- FRI_PREP_STR_TM
- FRI_PREP_END_TM
- SAT_PREP_STR_TM
- SAT_PREP_END_TM
- SUN_PREP_STR_TM
- SUN_PREP_END_TM

## 데이터 처리

### 비플오더 주문서비스 설정 조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R007)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO
- 입력: 주문유형 (ORDER_TYPE), 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_main_robot_info.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_main_robot_info_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R007.xml:10
