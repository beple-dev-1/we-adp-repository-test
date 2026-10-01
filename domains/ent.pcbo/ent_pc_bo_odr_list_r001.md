# PC 관리자 주문/도난 내역 조회 (ent_pc_bo_odr_list_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-40-S | 주문/도난 내역 | 화면 |

## 입력

- STR_DT
- END_DT
- ORDER_FORM_TP
- ORDER_TYPE
- SEARCH
- PAGE
- PAGE_SIZE

## 출력

- REC
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 총건수 (TOT_CNT)

## 데이터 처리

### PC 관리자 주문/도난 내역 조회 (TB_CAFETERIA_ODR_R005)

- 종류: SELECT
- 테이블: TB_CAFETERIA_MENU, TB_BPPAY_TRAN, TB_CAFETERIA_ODR, TB_MEMBER, TB_BP_AFLT_MY, TB_MEMBER_ENT_APP
- 입력: 이용기관ID (ORG_ID), STR_REG_DTTM, END_REG_DTTM, DYNAMIC_0, DYNAMIC_1

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_bo_odr_list_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_pc_bo_odr_list_r001_act.jsp:20
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_ODR_R005.xml:10
