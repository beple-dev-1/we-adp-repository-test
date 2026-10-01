# 웹뷰 API - 소멸예정 비플머니 내역 조회(통합웹뷰버전) (zero_webview_money_expire_v1_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-50-40-S | 소멸예정 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- DATA
- 페이지번호 (PAGE_NO)
- PAGE_SIZE

## 출력

- 총건수 (TOTAL_CNT)
- 총금액 (TOTAL_AMT)
- 소멸예정 비플머니 RECORD (REC)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### NON_CI 사용자 가입여부 조회 (TB_MEMBER_NON_CI_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_NON_CI
- 입력: 앱코드 (APP_CD), UUID, UUID_TYPE

### 만료예정 비플머니 내역 조회 (paging) (TB_MNY_TRAN_MST_R003)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), FROMCNT, TOCNT

### 소멸예정 비플머니 내역 조회(count) (TB_MNY_TRAN_MST_R004)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_money_expire_v1_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_money_expire_v1_r001_act.jsp:31
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_NON_CI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R004.xml:10
