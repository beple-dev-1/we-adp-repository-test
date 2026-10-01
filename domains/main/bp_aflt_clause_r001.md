# 약관디테일 조회 (bp_aflt_clause_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-60-S | 통합비대면결제 약관동의 | 화면 |
| BPY-SRCH-20-S | 가맹점찾기 > 메인 | 화면 |
| MCH-AFLT-80-10-10-S | 약관동의 | 화면 |
| MCH-COMN-10-10-S | 온라인가맹점신청 이용약관 | 화면 |

## 입력

- 약관 코드 (CLS_CD)
- 거래번호 (SEQ)

## 출력

- TITLE
- CTNT
- 이용기관ID (ORG_ID)
- CLS_CD
- SEQ
- APPLY_DT

## 데이터 처리

### 약관조회 (TB_CLAUSE_R001)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), CLS_CD, 이용기관ID (ORG_ID), CLS_CD, 이용기관ID (ORG_ID), CLS_CD

### 이전약관조회(SEQ) (TB_CLAUSE_R007)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), 약관 코드 (CLS_CD), 거래번호 (SEQ)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_clause_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/bp_aflt_clause_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
