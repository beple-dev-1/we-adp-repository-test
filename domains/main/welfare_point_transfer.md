# 복지포인트 이관 요청 화면 (welfare_point_transfer)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-WELF-40-S | 복지포인트 이용정보 조회 | BPY-WELF-40-S-e04 |

## 입력

- 이용기관구분 (ORG_TP)
- PROD_DV

## 출력

- 이용기관구분 (ORG_TP)
- 이용기관ID (ORG_ID)
- 기관명 (ORG_NM)
- 사업자번호 (BIZ_NO)
- 카드번호 (CARD_NO)
- 은행코드 (BANK_CD)
- 계좌번호 (ACCT_NO)
- 한도 (LMT_AMT)
- 한도일련번호 (LMT_SEQ)
- 한도명 (LMT_NM)
- 그룹명 (CLS_DSP_NM)
- 계좌사업자번호 (ACCT_BIZ_NO)
- CLS_DSP_SEQ
- EMPL_NO

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 포인트 플랫폼 기업 인증 관리원장 조회 (TB_MEMBER_CORP_APRV_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_CORP_APRV
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.welfare_point_transfer.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/welfare_point_transfer_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10
