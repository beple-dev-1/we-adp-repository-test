# 오피스푸드(식사배송) 장바구니 - 업데이트(total_amt) (bp_aflt_deliv_mybag_u002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-OFFD-10-30-S | 오피스푸드(식사배송) 장바구니 | 화면 |

## 입력

- TOT_AMT
- MYBAG_SEQ
- 회원코드 (MEMB_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 비플오더 장바구니 수정 (TB_BP_AFLT_MYBAG_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: TOT_AMT, MYBAG_SEQ, 회원코드 (MEMB_CD)

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

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_aflt_deliv_mybag_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/bp_aflt_deliv_mybag_u002_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_D001.xml:10
