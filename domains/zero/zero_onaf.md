# 비대면결제 검색하기 (zero_onaf)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-ONAF-20-10-S | 비대면결제 가맹점리스트 조회 | BPY-ONAF-20-10-S-e06 |
| BPY-ONAF-20-S | 비대면결제 검색하기 | 화면 |

## 입력

- (없음)

## 출력

- SIREC
- DOREC
- NFTF_PAY_REST

## 데이터 처리

### 시/군/구 조회 (TB_POST_SI_R001)

- 종류: SELECT
- 테이블: TB_POST_SI
- 입력: (없음)

### 시/도 조회 (TB_POST_DO_R001)

- 종류: SELECT
- 테이블: TB_POST_DO
- 입력: (없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_onaf.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_onaf_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_SI_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R001.xml:10
