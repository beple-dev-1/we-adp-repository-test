# 법인제로페이 이용약관 (lgn_clause1)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-30-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | 화면 |

## 입력

- 거래구분 (TRX_TP)
- 거래번호 (SEQ)
- 뒤로가기버튼 유무 (BACK_YN)

## 출력

- TITLE
- CTNT
- 이용기관ID (ORG_ID)
- CLS_CD
- SEQ
- APPLY_DT
- 뒤로가기버튼 유무 (BACK_YN)

## 데이터 처리

### 약관조회 (TB_CLAUSE_R001)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), CLS_CD, 이용기관ID (ORG_ID), CLS_CD, 이용기관ID (ORG_ID), CLS_CD

### 이전약관조회(SEQ) (TB_CLAUSE_R007)

- 종류: SELECT
- 테이블: TB_CLAUSE
- 입력: 이용기관ID (ORG_ID), 약관 코드 (CLS_CD), 거래번호 (SEQ)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.lgn_clause1.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/lgn/lgn_clause1_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CLAUSE_R007.xml:10
