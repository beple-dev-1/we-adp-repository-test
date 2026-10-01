# 식수 신청근무지조회(pc_본인) (ent_pcme_headcnt_work_cds_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MLPC-70-S | 식수신청내역(본인) | 화면 |

## 입력

- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- HEADCNTRST

## 데이터 처리

### 엔터프라이즈 근무지 원장 조회(식수) (TB_WORK_CD_MNG_R003)

- 종류: SELECT
- 테이블: TB_WORK_CD_MNG
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_pcme_headcnt_work_cds_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/pc/ent_pcme_headcnt_work_cds_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_WORK_CD_MNG_R003.xml:10
