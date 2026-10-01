# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 거래내역 조회 (ent_afltbo_odr_tran_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-50-10-S | 거래내역 | HIT-MBO-10-50-10-S-e16 |

## 입력

- START_DATE
- END_DATE
- STR_TIME
- END_TIME
- 거래구문 (TRAN_TYPE)

## 출력

- 조회건수 (RES_CNT)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- REC

## 데이터 처리

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 거래내역 조회(수정) (TB_BPPAY_TRAN_R017)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE, TB_CTGR_CATG_CD, TB_CTGR_CATG, TB_BPPAY_TRAN, TB_BP_AFLT_ODR, TB_MEMBER_ENT_APP, TB_MEMBER, TB_BP_AFLT_MNG, TB_ZEROPAY_BPPG_TRAN, TB_TRAN
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), START_DTTM, END_DTTM, DYNAMIC_0, 비플가맹점순번 (BP_AFLT_SEQ), START_DTTM, END_DTTM, DYNAMIC_1

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_odr_tran_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_odr_tran_r001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BPPAY_TRAN_R017.xml:10
