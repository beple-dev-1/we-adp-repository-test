# 장바구니 수량 체크 (smt_odr_mybag_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-20-10-S | 스마트 오더 메뉴 상세 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- PLUS_CNT

## 출력

- 응답코드 (RESP_CD)

## 데이터 처리

### 장바구니 수량 체크 (TB_BP_AFLT_MYBAG_R005)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG, TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_MY
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 회원코드 (MEMB_CD), 처리상태 (PROC_ST)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r002_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R005.xml:10
