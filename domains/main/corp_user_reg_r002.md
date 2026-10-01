# 기업 약관 상세 조회 (corp_user_reg_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-WELF-10-S | 기업복지 인증, 약관동의 관련 분기하여 각각 보여주는 페이지 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- ORG_CD
- PROD_DV
- 약관 코드 (CLS_CD)
- 이용기관구분 (ORG_TP)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 내용 (CTNT)
- 제목 (TITLE)

## 데이터 처리

### 기업인증 약관 상세정보 조회 (TB_CORP_CLAUSE_DETAIL_R001)

- 종류: SELECT
- 테이블: TB_CORP_CLAUSE_DETAIL
- 입력: 앱코드 (APP_CD), 이용기관ID (ORG_ID), 이용기관구분 (ORG_TP), PROD_DV, 약관 코드 (CLS_CD), 앱코드 (APP_CD), 이용기관ID (ORG_ID), 이용기관구분 (ORG_TP), PROD_DV, 약관 코드 (CLS_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.corp_user_reg_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/corp_user_reg_r002_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CORP_CLAUSE_DETAIL_R001.xml:10
