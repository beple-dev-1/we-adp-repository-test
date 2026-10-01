# 장바구니 확인 (smt_odr_main_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-ORDR-20-S | 가맹점 상세 기본정보 | 화면 |
| BPG-ORDR-30-S | 비플오더 가맹점 관리에 신청 가맹점 노출 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- MYBAG_SEQ
- 회원코드 (MEMB_CD)
- 비플가맹점순번 (BP_AFLT_SEQ)
- 처리상태 (PROC_ST)
- REG_DTTM
- 앱코드 (APP_CD)
- TOT_AMT
- 수령방법 (RECV_TYPE)
- 충건수 (TOT_CNT)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 장바구니 확인 (TB_BP_AFLT_MYBAG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_main_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_main_r002_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10
