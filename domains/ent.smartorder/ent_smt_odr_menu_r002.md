# 장바구니 담기 (ent_smt_odr_menu_r002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-40-S | 사내 카페 메뉴 조회 | 화면 |

## 입력

- 구분자 (FLAG)
- 가맹점순번 (BP_AFLT_SEQ)
- 메뉴순번 (BP_AFLT_PDT_SEQ)
- 메뉴명 (PDT_NM)
- 메뉴수량 (PDT_CNT)
- 가격 (PRICE)
- 메뉴+옵션 (PDT_AMT)
- REC
- 수령방법 (RECV_TYPE)

## 출력

- 응답코드 (RES_CD)

## 데이터 처리

### 비플오더 장바구니 조회 (TB_BP_AFLT_MYBAG_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD)

### 비플오더 장바구니 삭제 (TB_BP_AFLT_MYBAG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

### 비플오더 장바구니 메뉴 삭제(by mybag_seq) (TB_BP_AFLT_MYBAG_PDT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 옵션 삭제 (TB_BP_AFLT_MYBAG_OPT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_OPT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 등록 (TB_BP_AFLT_MYBAG_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: MYBAG_SEQ, 회원코드 (MEMB_CD), 비플가맹점순번 (BP_AFLT_SEQ), 처리상태 (PROC_ST), 앱코드 (APP_CD), TOT_AMT, RECV_TYPE

### 비플오더 장바구니 수정 (TB_BP_AFLT_MYBAG_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: TOT_AMT, MYBAG_SEQ, 회원코드 (MEMB_CD)

### 비플오더 장바구니 조회(옵션포함) - 취소 (TB_BP_AFLT_MYBAG_R008)

- 종류: SELECT
- 테이블: TB_MEMBER_APP, TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MYBAG_OPT, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_MY, TB_BP_AFLT_MY_PDT_INFO
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), 회원코드 (MEMB_CD), 가맹점 장바구니 순번 (MYBAG_SEQ), DYNAMIC_0

### 비플오더 장바구니 메뉴 수정 (TB_BP_AFLT_MYBAG_PDT_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: PRICE, PDT_AMT, PDT_CNT, 가맹점 장바구니 순번 (MYBAG_SEQ), 장바구니 메뉴 순번 (MYBAG_PDT_SEQ)

### 비플오더 장바구니 메뉴 등록 (TB_BP_AFLT_MYBAG_PDT_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: MYBAG_SEQ, MYBAG_PDT_SEQ, 비플오더메뉴순번 (BP_AFLT_PDT_SEQ), PDT_NM, PRICE, MYBAG_SEQ, 앱코드 (APP_CD), PDT_AMT, PDT_CNT

### 비플오더 장바구니 옵션 등록 (TB_BP_AFLT_MYBAG_OPT_C001)

- 종류: INSERT
- 테이블: TB_BP_AFLT_MYBAG_OPT
- 입력: MYBAG_SEQ, MYBAG_PDT_SEQ, BP_AFLT_OPT_SEQ, OPT_NM, OPT_AMT, 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_menu_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_menu_r002_act.jsp:18
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_C001.xml:10
