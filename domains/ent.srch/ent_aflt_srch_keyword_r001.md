# 시군구명으로 코드값찾는 action (ent_aflt_srch_keyword_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-SRCH-30-10-S | 가맹점 찾기 검색 화면 | 화면 |

## 입력

- DO_NM
- SI_NM

## 출력

- DO_CD
- DO_NM
- 시/군/구 코드 (SI_CD)
- SI_NM
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 시/도 조회 (by do_nm) (TB_POST_DO_R005)

- 종류: SELECT
- 테이블: TB_POST_DO
- 입력: DYNAMIC_0

### 시/군/구 조회 (by do_cd, si_nm) (TB_POST_SI_R004)

- 종류: SELECT
- 테이블: TB_POST_SI
- 입력: DO_CD, DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_aflt_srch_keyword_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/srch/ent_aflt_srch_keyword_r001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R005.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_SI_R004.xml:10
