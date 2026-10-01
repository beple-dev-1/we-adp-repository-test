# 이용약관 상세조회 (CLAULIST0010)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-COMN-10-10-10-S | 지역사랑상품권 약관 목록 | 화면 |
| MGC-COMN-10-10-S | 이용약관 | 화면 |

## 입력

- 거래구분 (TRX_TP)
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

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.CLAULIST0010.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/conf/claulist/CLAULIST0010_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
