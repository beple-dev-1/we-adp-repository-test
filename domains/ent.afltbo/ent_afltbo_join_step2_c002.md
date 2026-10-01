# 가맹점주 어드민 점주 등록 (ent_afltbo_join_step2_c002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | HIT-MBO-30-30-S-e30 |

## 입력

- MEMB_CD
- AFLT_ID
- MEMB_NM
- BP_AFLT_SEQ

## 출력

- RES_CD
- RES_MSG

## 데이터 처리

### 마이가맹점 상세원장 조회(DYNAMIC) (TB_AFFILIATION_MY_DETAIL_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG, TB_AFFILIATION_MY_DETAIL, TB_AFFILIATION_MY, TB_MEMBER_APP
- 입력: DYNAMIC_0

### 마이가맹점 상세원장 적재 (TB_AFFILIATION_MY_DETAIL_C001)

- 종류: INSERT
- 테이블: TB_AFFILIATION_MY_DETAIL
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 가맹점ID (AFLT_ID), MNG_STS, MNG_LVL, MNG_NM, PROF_MNG_YN, TRAN_MNG_YN, BILL_MNG_YN, AFLT_MNG_PUSH_YN, TRAN_PUSH_YN, TRAN_PUSH_TYPE, REG_DTTM, UPD_DTTM, ACPT_DTTM, 회원코드 (MEMB_CD), 앱코드 (APP_CD), BO_MNG_YN, 비플가맹점순번 (BP_AFLT_SEQ), DG_MNG_YN

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step2_c002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step2_c002_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_DETAIL_C001.xml:10
