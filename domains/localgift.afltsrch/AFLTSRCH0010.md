# 가맹점찾기 > 목록 (AFLTSRCH0010)

- 처리: 읽기
- 화면 겸함: 예
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-LGFT-10-10-10-S | 보유중인 상품권으로 찾기 | 화면 |
| MGC-LGFT-10-10-20-S | 가맹점 찾기 | 화면 |
| MGC-LGFT-10-10-40-S | 최근 검색 위치 | 화면 |

## 입력

- ZPP_ID
- 상품권명 (ZPP_NM)
- 보유상품권리스트 (ZPP_REC)
- APP_PARAM_YN
- ZPP_POST_DO
- ZPP_POST_SI
- ZPP_POST_ADDR

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

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.AFLTSRCH0010.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/localgift/afltsrch/AFLTSRCH0010_act.jsp:43
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_CTGR_CATH_R001.xml:10
