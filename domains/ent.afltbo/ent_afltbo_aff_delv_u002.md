# 배송지 카테고리 수정(활성화) (ent_afltbo_aff_delv_u002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-20-10-S | 장소 카테고리 | 화면 |

## 입력

- DELV_STATUS
- UPD_USER
- 비플가맹점순번 (BP_AFLT_SEQ)
- DELV_SEQ

## 출력

- (없음)

## 데이터 처리

### 장소카테고리 활성화 수정 (TB_CAFETERIA_DELV_U002)

- 종류: UPDATE
- 테이블: TB_CAFETERIA_DELV
- 입력: DELV_STATUS, UPD_USER, 비플가맹점순번 (BP_AFLT_SEQ), DELV_SEQ

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_aff_delv_u002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_aff_delv_u002_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_DELV_U002.xml:10
