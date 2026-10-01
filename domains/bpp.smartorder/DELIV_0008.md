# api 푸드오피스 주문 취소 (DELIV_0008)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-20-S | 오피스푸드(식사배송) 주문취소 금액확인 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- ORDER_ID
- ORDER_DT
- 푸딩 유저ID (FOODING_ID)
- 회원코드 (MEMB_CD)
- 푸딩측 주문고유식별번호 (FOODING_UID)
- MENU_SCHEDULE_ID
- ORDER_SEQ
- 메뉴개수 (MENU_CNT)

## 출력

- 푸딩측 주문고유식별번호 (FOODING_UID)
- LOC_ID
- 푸딩 유저ID (FOODING_ID)
- 회원코드 (MEMB_CD)
- 금액 (AMT)
- 주문생성일 (ORDER_DT)
- 주문취소일 (CAN_DT)
- ITEM_REC
- RES_CD
- 응답메시지 (RES_MSG)

## 데이터 처리

### 회원 부가정보_식사배송지 상세 조회 (TB_MEMBER_APP_DELIV_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_APP_DELIV
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 비플가맹점순번 (BP_AFLT_SEQ), LOC_ID, LOC_ID

### 오피스푸드 주문원장 조회(ORDER_DT, ORDER_ID,ORDER_TYPE) (TB_BP_AFLT_ODR_R024)

- 종류: SELECT
- 테이블: TB_BP_AFLT_ODR
- 입력: ORDER_ID, ORDER_TYPE, ORDER_SEQ

### 주문원장 처리상태 업데이트(오피스 푸딩) (TB_BP_AFLT_ODR_U007)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_ODR
- 입력: 주문처리상태 (ORDER_PROC_ST), 처리상태 (PROC_ST), FOODING_UID, ORDER_ID, ORDER_DT, 주문유형 (ORDER_TYPE), ORDER_SEQ

### 상태변경 (TB_BP_AFLT_MYBAG_U003)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 처리상태 (PROC_ST), 가맹점 장바구니 순번 (MYBAG_SEQ)

### 푸드오피스 주문,현재 수량 수정 (TB_BP_AFLT_DELIV_MENU_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_DELIV_MENU
- 입력: AMOUNT_QTY, 비플가맹점순번 (BP_AFLT_SEQ), MENU_SCHEDULE_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.DELIV_0008.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/DELIV_0008_act.jsp:22
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_DELIV_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R024.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_U007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_DELIV_MENU_U002.xml:10
