# 비대면 최근가맹점 조회 (zero_onaf_aff_tran)

- 처리: 읽기·쓰기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-10-10-S | 비대면 결제매장 상세정보 | BPY-ONAF-10-10-S-e09 |
| BPY-ONAF-20-10-S | 비대면결제 가맹점리스트 조회 | 화면 |
| BPY-ONAF-20-S | 비대면결제 검색하기 | BPY-ONAF-20-S-e09 |
| BPY-ONAF-30-10-S | 비대면결제매장 상세정보 | 화면 |

## 입력

- (없음)

## 출력

- REC

## 데이터 처리

### 제로페이 상품권 회원 상태 조회 (TB_MEMBER_R026)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비대면 최근결제원장 등록/수정 (TB_ONLN_AFF_MNG_U002)

- 종류: INSERT
- 테이블: TB_ONLN_AFF_MNG, UPSERT
- 입력: LST_PAY_DT, LST_PAY_DT, UPD_DTTM, 회원코드 (MEMB_CD), 가맹점ID (AFLT_ID), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 가맹점ID (AFLT_ID), 앱코드 (APP_CD), ONAF_REG_DT, USE_YN, REG_DTTM, UPD_DTTM, LST_PAY_DT

### 비대면결제 최근결제가맹점 조회 (TB_AFFILIATION_MNG_R004)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_AFFILIATION_QR, TB_MEMBER_AFLT, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_ONLN_AFF_MNG, TEST
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), START_DT, END_DT, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf_aff_tran.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_aff_tran_act.jsp:39
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONLN_AFF_MNG_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MNG_R004.xml:10
