# 식수신청 등록시간 pc정보조회 (ent_pc_headcnt_able_tm_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-60-S | 식수신청내역 (list) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- HEADCNTRST

## 데이터 처리

### 식수신청 제한 등록시간 정보조회 (TB_ENT_HEADCNT_ABLE_TM_R001)

- 종류: SELECT
- 테이블: TB_ENT_HEADCNT_ABLE_TM
- 입력: SITE_CD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pc_headcnt_able_tm_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pc_headcnt_able_tm_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_ABLE_TM_R001.xml:10
