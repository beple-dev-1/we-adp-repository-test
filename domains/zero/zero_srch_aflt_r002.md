# 사용처 조회 (zero_srch_aflt_r002)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-20-S | 가맹점찾기 > 메인 | 화면 |

## 입력

- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- REC

## 데이터 처리

### 포인트 플랫폼 기업 인증 관리원장 조회 (TB_MEMBER_CORP_APRV_R001)

- 종류: SELECT
- 테이블: TB_MEMBER_CORP_APRV
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_r002_act.jsp:12
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_CORP_APRV_R001.xml:10
