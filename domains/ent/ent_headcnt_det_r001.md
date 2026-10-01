# 식수신청 정보 상세조회 (ent_headcnt_det_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MEAL-20-10-S | 식수 신청내역 상세 | 화면 |
| HIT-MLPC-10-10-S | 식수신청내역 (list) | 화면 |
| HIT-MLPC-10-S | 식수대용량신청내역 | 화면 |
| HIT-MLPC-60-S | 식수신청내역 (list) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- HEADCNT_SEQ

## 출력

- HEADCNTRST

## 데이터 처리

### 식수신청 상세정보조회 (TB_ENT_HEADCNT_R003)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE, TB_ENT_HEADCNT_USER, TB_ENT_HEADCNT, TB_MEMBER, TB_MEMBER_APP
- 입력: HEADCNT_SEQ

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_det_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/ent_headcnt_det_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_HEADCNT_R003.xml:10
