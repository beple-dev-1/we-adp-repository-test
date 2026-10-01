# 장바구니 확인 (ent_smt_odr_main_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-ORDR-58-S | 가맹점 상세 기본정보 | 화면 |

## 입력

- (없음)

## 출력

- TOT_AMT
- TOT_CNT
- PROC_ST
- RECV_TYPE
- RES_CD
- RES_MSG

## 데이터 처리

### 장바구니 확인 (TB_BP_AFLT_MYBAG_R001)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MYBAG_PDT, TB_BP_AFLT_DELIV_MYBAG_MENU, TB_BP_AFLT_MYBAG
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_smt_odr_main_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/smartorder/ent_smt_odr_main_r002_act.jsp:13
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MYBAG_R001.xml:10
