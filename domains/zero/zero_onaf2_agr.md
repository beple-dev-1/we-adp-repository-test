# 비대면결제 약관동의 (zero_onaf2_agr)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-30-S | 비대면결제 메인 | 화면 |

## 입력

- (없음)

## 출력

- (없음)

## 데이터 처리

### 비대면결제 약관동의 조회 (TB_ONAF_AGR_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf2_agr.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf2_agr_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONAF_AGR_R001.xml:10
