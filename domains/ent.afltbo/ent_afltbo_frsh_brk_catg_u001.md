# 다과주문관리 카테고리 수정/순서변경 (ent_afltbo_frsh_brk_catg_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-20-20-10-S | 카테고리 | 화면 |

## 입력

- CATG_NM
- ORDER_BY
- CATG_SEQ
- ORDER_LIST

## 출력

- MSG

## 데이터 처리

### 다과주문관리 카테고리 수정/순서변경 (TB_ENT_FRSH_BRK_CORP_CATG_U001)

- 종류: UPDATE
- 테이블: TB_ENT_FRSH_BRK_CORP_CATG
- 입력: CATG_NM, ORDER_BY, UPD_USER, CORP_SEQ, CATG_SEQ

### 다과주문관리 카테고리 (TB_ENT_FRSH_BRK_CORP_CATG_R001)

- 종류: SELECT
- 테이블: TB_ENT_FRSH_BRK_CORP_CATG
- 입력: CORP_SEQ, CATG_NM, CATG_NM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_frsh_brk_catg_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_frsh_brk_catg_u001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_CATG_U001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_FRSH_BRK_CORP_CATG_R001.xml:10
