# 장바구니 업데이트 (ent_smt_odr_mybag_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-16-S | 장바구니 조회 | 화면 |

## 입력

- 장바구니순번 (MYBAG_SEQ)
- 장바구니메뉴순번 (MYBAG_PDT_SEQ)
- 메뉴+옵션 (PRICE)
- 수량 (PDT_CNT)
- 메뉴+옵션 (PDT_AMT)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 비플오더 장바구니 메뉴 수정 (TB_BP_AFLT_MYBAG_PDT_U001)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG_PDT
- 입력: PRICE, PDT_AMT, PDT_CNT, 가맹점 장바구니 순번 (MYBAG_SEQ), 장바구니 메뉴 순번 (MYBAG_PDT_SEQ)

### 비플오더 장바구니 수정(by pdt_seq) (TB_BP_AFLT_MYBAG_U002)

- 종류: UPDATE
- 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT
- 입력: 가맹점 장바구니 순번 (MYBAG_SEQ), 가맹점 장바구니 순번 (MYBAG_SEQ), 회원코드 (MEMB_CD), DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_mybag_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_mybag_u001_act.jsp:12
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_PDT_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_U002.xml:10
