# 식수사업장조회 (ent_headcnt_corp_site_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-10-10-S | 식수신청내역 (list) | 화면 |
| HIT-MLPC-10-20-S | 식수시간관리 | 화면 |
| HIT-MLPC-10-S | 식수대용량신청내역 | 화면 |
| HIT-MLPC-70-S | 식수신청내역(본인) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)
- ENT_HEADCNT_MAIN_DATA

## 출력

- HEADCNTRST

## 데이터 처리

### 엔터프라이즈 사업장 관리원장 조회(식수/다과) (TB_ENT_CORP_SITE_R002)

- 종류: SELECT
- 테이블: TB_ENT_CORP_SITE
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_headcnt_corp_site_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pcbo/ent_headcnt_corp_site_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ENT_CORP_SITE_R002.xml:10
