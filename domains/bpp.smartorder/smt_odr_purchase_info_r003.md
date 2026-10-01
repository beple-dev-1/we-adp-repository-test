# 가맹점 정보 (주문가능 여부) (smt_odr_purchase_info_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-10-S | 주문내역 상세 | 화면 |

## 입력

- 비플가맹점순번 (BP_AFLT_SEQ)
- 앱코드 (APP_CD)

## 출력

- ODR_YN
- 비플가맹점순번 (BP_AFLT_SEQ)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 가맹점 원장 정보 조회 (odr_yn) (TB_BP_AFLT_MY_R005)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_r003_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_MY_R005.xml:10
