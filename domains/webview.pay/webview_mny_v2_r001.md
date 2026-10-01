# 롯데_복지몰 서비스 > 비플머니 웹뷰 > 머니 사용 재역 조회 (webview_mny_v2_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-10-C | 롯데 복지몰 | 화면 |

## 입력

- CI
- START_DT
- END_DT
- 카테고리 (CTGRY)
- 페이지번호 (PAGE_NO)
- PAGE_SIZE
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 회원코드 (MEMB_CD)
- 응답코드 (RES_CD)
- 응답메세지 (RES_MSG)
- MNY_CUR_PRICE
- 총건수 (TOTAL_CNT)
- TOT_AMT_REC
- REC

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비플머니 총 잔액조회 (TB_MEMBER_MNY_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), DYNAMIC_0

### 버플머니 충전금액 조회 (TB_MEMBER_MNY_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_MNY, TB_MEMBER_APP, TB_MNY_TRAN_MST, TB_MNY_ACU_DTL
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 소멸내역 소멸일자 조회 (TB_MNY_TRAN_MST_R012)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MEMBER_APP
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### 비플머니 이용내역 조회(cursor - count) (TB_MNY_TRAN_MST_R017)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MNY_ACU_DTL, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_BPPAY_TRAN, TB_BP_AFLT_MNG, TB_ZEROPAY_BPPG_TRAN, TB_STORE_MNG, BASE_TRX, TB_MEMBER_MNY, Z, BP, BPPG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), EXTINCTION_DT, DYNAMIC_0, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT)

### 비플머니 이용내역 조회(cursor) (TB_MNY_TRAN_MST_R016)

- 종류: SELECT
- 테이블: TB_MNY_TRAN_MST, TB_MNY_ACU_DTL, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_BPPAY_TRAN, TB_BP_AFLT_MNG, TB_ZEROPAY_BPPG_TRAN, TB_STORE_MNG, BASE_TRX, TB_MEMBER_MNY, Z, BP, BPPG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), EXTINCTION_DT, DYNAMIC_0, LAST_SEQ, LAST_SEQ, TOCNT, 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_mny_v2_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/webview/pay/webview_mny_v2_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R017.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R016.xml:10
