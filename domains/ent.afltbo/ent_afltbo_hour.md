# 엔터프라이즈 가맹점pc_시간설정 (ent_afltbo_hour)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-10-30-20-S | 시간설정 | 화면 |

## 입력

- (없음)

## 출력

- CAFETERIA_OPEN_HOUR

## 데이터 처리

### 구내식당 이용시간 조회(BP_AFLT_SEQ) (TB_CAFETERIA_OPEN_HOUR_R002)

- 종류: SELECT
- 테이블: TB_CAFETERIA_OPEN_HOUR
- 입력: 비플가맹점순번 (BP_AFLT_SEQ), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_hour.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_hour_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CAFETERIA_OPEN_HOUR_R002.xml:10
