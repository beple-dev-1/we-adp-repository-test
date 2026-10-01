# 장바구니 검증(가맹점 영업 여부, 메뉴 품절 여부 검증) (smt_odr_mybag_r005)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-10-S | 비플오더 장바구니 | 화면 |

## 입력

- 비플오더메뉴순번 (BP_AFLT_PDT_SEQ)
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- 응답코드 (RESP_CD)
- 응답메시지 (RESP_MSG)
- 대기수량 (WAIT_CNT)
- 그린메세지정보 (GRN_MSG_INFO)
- API_ERR_YN

## 데이터 처리

### 비플오더 영업시간 조회 (TB_AFFILIATION_MY_WT_INFO_R002)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_AFFILIATION_MY_WT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

### 비플오더 메뉴 조회(dynamic) (TB_BP_AFLT_MY_PDT_INFO_R003)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY_PDT_INFO
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DYNAMIC_0

### 가맹점원장조회(by bp_aflt_seq) (TB_BP_AFLT_MY_R006)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY, TB_BP_AFLT_MNG
- 입력: 비플가맹점순번 (BP_AFLT_SEQ)

### 비플오더 KIOSK 접속정보 조회 (TB_BP_KIOSK_CONN_R001)

- 종류: SELECT
- 테이블: TB_BP_KIOSK_CONN
- 입력: 거래일자 (TRX_DT), BRAND_CD, STORE_NO, POS_NO

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- 메시지: 필수 값이 누락되었습니다.
  - 조건: "".equals(bpAfltSeq) || "".equals(bpAfltPdtSeq) (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r005_act.jsp:64)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_mybag_r005.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_mybag_r005_act.jsp:35
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFFILIATION_MY_WT_INFO_R002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_PDT_INFO_R003.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R006.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_KIOSK_CONN_R001.xml:10
