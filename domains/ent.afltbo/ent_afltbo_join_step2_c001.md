# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 마이가맹점 신규 등록 (ent_afltbo_join_step2_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | HIT-MBO-30-30-S-e30 |

## 입력

- 회원코드 (MEMB_CD)
- 가맹점ID (AFLT_ID)
- REPR_MOB_NO
- 회원명 (MEMB_NM)
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 비플페이 가맹점정보 조회(BP_AFLT_SEQ) (TB_BP_AFLT_MNG_R017)

- 종류: SELECT
- 테이블: TB_CTGR_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_QR, TB_BP_AFLT_MNG, TB_BP_AFLT_UPJONG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### MY가맹점 등록 (TB_AFFILIATION_MY_C002)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY, TB_BP_AFLT_MNG
- 입력: 앱코드 (APP_CD), 가맹점ID (AFLT_ID), UPD_DTTM, 가맹점ID (AFLT_ID), REPR_MOB_NO, REPR_NO1, REPR_NO2, ADDR1, ADDR2, CTGR_CATG_CD, ZIP_CD, LAT, LNG, 비플가맹점순번 (BP_AFLT_SEQ), AFLT_MST_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step2_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step2_c001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R017.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_C002.xml:10
