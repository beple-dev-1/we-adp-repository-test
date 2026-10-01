# 장바구니 메뉴 삭제 (smt_odr_mybag_d001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-S | 비플오더 장바구니 | 화면 |

## 입력

- 가맹점 장바구니 순번 (MYBAG_SEQ)
- 장바구니 메뉴 순번 (MYBAG_PDT_SEQ)

## 출력

- 응답코드 (RESP_CD)

## 데이터 처리

### 비플오더 장바구니 메뉴 삭제(by mybag_seq) (TB_BP_AFLT_MYBAG_PDT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 옵션 삭제 (TB_BP_AFLT_MYBAG_OPT_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG_OPT
- 입력: MYBAG_SEQ, DYNAMIC_0

### 비플오더 장바구니 수정(by pdt_seq) (TB_BP_AFLT_MYBAG_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

### 비플오더 장바구니 조회 (TB_BP_AFLT_MYBAG_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 처리상태 (PROC_ST), 앱코드 (APP_CD)

### 비플오더 장바구니 삭제 (TB_BP_AFLT_MYBAG_D001)

- 종류: DELETE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_d001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_OPT_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
