# api 푸드오피스 픽업스팟 저장 (DELIV_0006)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-10-10-S | 배송지 등록(SPOT) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- LOC_ID
- LOC_TITLE
- ADDR1
- ADDR2
- SPOT_DEPTH
- SPOT_ID_1
- SPOT_TITLE_1
- SPOT_ID_2
- SPOT_TITLE_2
- FOODING_ID

## 출력

- 주문 유저 ID (USER_ID)
- 회원코드 (MEMB_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- 고객사 ID (CUST_ID)
- 회원명 (MEMB_NM)
- USER_NM
- SPOT_ID
- 푸딩고객사ID (EXT_ORG_ID)

## 데이터 처리

### 회원 부가정보_식사배송지 상세 조회 (TB_MEMBER_APP_DELIV_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_DELIV
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), LOC_ID, LOC_ID

### 회원 부가정보_식사배송지 등록 및 수정 (TB_MEMBER_APP_DELIV_C001)

- 종류: INSERT
- 테이블: TB_MEMBER_APP_DELIV
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), LOC_ID, LOC_TITLE, ADDR1, ADDR2, SPOT_DEPTH, SPOT_ID_1, SPOT_TITLE_1, SPOT_ID_2, SPOT_TITLE_2, FOODING_ID

### 오피스푸드 장바구니 조회 (TB_BP_AFLT_MYBAG_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD), 수령방법 (RECV_TYPE)

### 오피스푸드(식사배송) 장바구니 - 삭제(MYBAG_SEQ) (TB_BP_AFLT_DELIV_MYBAG_MENU_D002)

- 종류: DELETE
- 테이블: TB_BP_AFLT_DELIV_MYBAG_MENU
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ)

### 비플오더 장바구니 삭제 (TB_BP_AFLT_MYBAG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.DELIV_0006.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/DELIV_0006_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MYBAG_MENU_D002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
