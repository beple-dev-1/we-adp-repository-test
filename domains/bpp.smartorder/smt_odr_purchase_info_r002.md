# 주문내역 상세 (메뉴 & 옵션) (smt_odr_purchase_info_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-HIST-10-10-10-S | 주문내역 상세 | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- ORDER_ID
- ORDER_TYPE

## 출력

- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 주문내역 상세 (메뉴 & 옵션) (TB_BP_AFLT_ODR_R004)

- 종류: SELECT
- 테이블: TB_BP_AFLT_MY_PDT_INFO, TB_BP_AFLT_OPT, TB_BP_AFLT_OPT_CATG, TB_BP_AFLT_ODR, TB_BP_AFLT_ODR_PDT, TB_BP_AFLT_ODR_OPT
- 입력: 회원코드 (MEMB_CD), 앱코드 (APP_CD), ORDER_ID, ORDER_TYPE

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.smt_odr_purchase_info_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/smartorder/smt_odr_purchase_info_r002_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_BP_AFLT_ODR_R004.xml:10
