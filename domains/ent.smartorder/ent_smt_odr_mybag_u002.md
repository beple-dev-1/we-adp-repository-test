# 스마트오더 장바구니 정보 수정 (ent_smt_odr_mybag_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-16-S | 장바구니 조회 | 화면 |

## 입력

- 가맹점 장바구니 순번 (MYBAG_SEQ)
- 수령방법 (RECV_TYPE)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 스마트오더 장바구니 정보 수정 (TB_BP_AFLT_MYBAG_U005)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG
- 입력: 처리상태 (PROC_ST), 총금액 (TOT_AMT), 수령방법 (RECV_TYPE), 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_mybag_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_mybag_u002_act.jsp:17
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U005.xml:10
