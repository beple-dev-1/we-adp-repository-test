# 가맹점찾기 > 메인 (zero_srch_aflt)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | BPY-KID-20-S-e13 |
| BPY-SRCH-20-S | 가맹점찾기 > 메인 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- ONAF_AGR_YN
- LOC_AGR_YN

## 데이터 처리

### 통합비대면결제 약관동의여부조회 (TB_ONAF_AGR_R002)

- 종류: SELECT
- 테이블: TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_act.jsp:26
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ONAF_AGR_R002.xml:10
