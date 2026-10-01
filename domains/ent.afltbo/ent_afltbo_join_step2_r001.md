# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 직가맹 조회 (ent_afltbo_join_step2_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | HIT-MBO-30-30-S-e30 |

## 입력

- 사업자번호 (BIZ_NO)
- 휴대폰번호 (MOB_NO)
- CI

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- STT_CD
- 총건수 (TOTAL_CNT)
- TAX_TYPE
- AFLT_REC

## 데이터 처리

### 직가맹 신청 완료 된 가맹점 조회 (TB_BP_AFLT_MNG_R026)

- 종류: SELECT
- 테이블: TB_AFFILIATION_MY, TB_BP_AFLT_MNG, TB_BP_AFLT_APY
- 입력: AFLT_REPR_MOB_NO, 사업자번호 (BIZ_NO)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step2_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step2_r001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MNG_R026.xml:10
