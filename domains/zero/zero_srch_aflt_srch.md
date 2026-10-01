# 가맹점찾기 > 상품권 사용처별 가맹점 검색 (zero_srch_aflt_srch)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-20-S | 가맹점찾기 > 메인 | 화면 |

## 입력

- ZPP_ID
- 보유상품권리스트 (ZPP_REC)

## 출력

- ZPP_POST_DO
- ZPP_POST_SI
- LOCAL_GOV_LAT
- LOCAL_GOV_LNT
- 카테고리리스트 (CTGR_REC)
- 시도코드리스트 (DO_REC)
- 시군구코드리스트 (SI_REC)

## 데이터 처리

### 업종 조회 (TB_CTGR_CATH_R001)

- 종류: SELECT
- 테이블: TB_CTGR_CATG
- 입력: DYNAMIC_0

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_act.jsp:40
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10
