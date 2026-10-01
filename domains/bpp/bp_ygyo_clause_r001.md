# 요기요_약관정보_조회 (bp_ygyo_clause_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-COMN-10-20-S | 가맹점 서비스 이용약관 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- 약관 코드 (CLS_CD)

## 출력

- REC
- 코드 (CODE)
- MSG

## 데이터 처리

### 요기요_약관정보_조회 (TB_CLAUSE_YGYO_CLAUSE_R001)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), 약관 코드 (CLS_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_clause_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_clause_r001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_YGYO_CLAUSE_R001.xml:10
