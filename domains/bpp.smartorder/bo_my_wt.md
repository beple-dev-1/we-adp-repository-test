# 비플오더 주문서비스 주문이용가능시간 (bo_my_wt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OBO-10-20-S | 비플오더 주문서비스 설정 | 화면 |
| BPG-OBO-10-30-10-S | 주문설정(로봇배송) | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 주문유형 (ORDER_TYPE)

## 출력

- 앱코드 (APP_CD)
- BP_AFLT_ID
- 가맹점ID (AFLT_ID)
- MON_ETC
- MON_STR_DT
- MON_END_DT
- MON_HOL_YN
- MON_NM
- MON_STRDT
- MON_ENDDT
- TUE_ETC
- TUE_STR_DT
- TUE_END_DT
- TUE_HOL_YN
- TUE_NM
- TUE_STRDT
- TUE_ENDDT
- WED_ETC
- WED_STR_DT
- WED_END_DT
- WED_HOL_YN
- WED_NM
- WED_STRDT
- WED_ENDDT
- THU_ETC
- THU_STR_DT
- THU_END_DT
- THU_HOL_YN
- THU_NM
- THU_STRDT
- THU_ENDDT
- FRI_ETC
- FRI_STR_DT
- FRI_END_DT
- FRI_HOL_YN
- FRI_NM
- FRI_STRDT
- FRI_ENDDT
- SAT_ETC
- SAT_STR_DT
- SAT_END_DT
- SAT_HOL_YN
- SAT_NM
- SAT_STRDT
- SAT_ENDDT
- SUN_ETC
- SUN_STR_DT
- SUN_END_DT
- SUN_HOL_YN
- SUN_NM
- SUN_STRDT
- SUN_ENDDT
- ETC_INFO
- REG_DTTM
- UPD_DTTM
- REG_MEMB_CD
- UPD_MEMB_CD
- 비플가맹점순번 (BP_AFLT_SEQ)
- ODR_YN
- REST_DT
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

### 비플오더가입 주문서비스설정 조회 (TB_AFFILIATION_MY_WT_INFO_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO
- 입력: 주문유형 (ORDER_TYPE), 비플가맹점순번 (BP_AFLT_SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bo_my_wt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bo_my_wt_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R006.xml:10
