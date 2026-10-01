# 비플머니 기본정보 > 이용내역 조회 (zero_mny_info_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MNY-10-S | 비플머니 기본정보 | 화면 |

## 입력

- START_DT
- END_DT
- 카테고리 (CTGRY)
- 페이지번호 (PAGE_NO)
- PAGE_SIZE

## 출력

- MNY_CUR_PRICE
- 충정금액 RECCORD (TOT_AMT_REC)
- 이용내역 RECORD (REC)
- 추가데이터여부 (MORE_YN)

## 데이터 처리

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

### 비플머니 이용내역 조회(paging) (TB_MNY_TRAN_MST_R001)

- 종류: SELECT
- 테이블: TB_QR_MNG, TB_CAFETERIA_ODR, TB_CAFETERIA_MENU, TB_MNY_TRAN_MST, TB_MEMBER_MNY, TB_MNY_ACU_DTL, TB_ZEROPAY_TRAN, TB_AFFILIATION_MNG, TB_BPPAY_TRAN, TB_BP_AFLT_MNG, TB_ZEROPAY_BPPG_TRAN, TB_STORE_MNG, TB_MEMBER_APP, TB_MEMBER
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 앱코드 (APP_CD), 시작일자 (START_DT), 종료일자 (END_DT), EXTINCTION_DT, FROMCNT, TOCNT, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_mny_info_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_mny_info_r001_act.jsp:16
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_MNY_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R012.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MNY_TRAN_MST_R001.xml:10
