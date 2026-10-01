# 배송지 상세장소 생성 (ent_afltbo_aff_delv_detail_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-20-20-S | 세부 장소 | 화면 |

## 입력

- DELV_SEQ
- DELV_DETAIL_SEQ
- DELV_DETAIL_NM
- USE_YN
- 직원상태 (STATUS)
- ORDER_BY
- REG_USER
- 비플가맹점순번 (BP_AFLT_SEQ)

## 출력

- (없음)

## 데이터 처리

### 딜리버리 상세 주소 등록 (TB_CAFETERIA_DELV_DETAIL_C001)

- 종류: INSERT
- 테이블: TB_CAFETERIA_DELV_DETAIL
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), DELV_SEQ, DELV_DETAIL_SEQ, DELV_DETAIL_NM, USE_YN, 직원상태 (STATUS), ORDER_BY, REG_USER

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_detail_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_detail_c001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_DETAIL_C001.xml:10
