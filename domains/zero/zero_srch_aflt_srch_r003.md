# 가맹점찾기 > 위치검색 조회 (zero_srch_aflt_srch_r003)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-SRCH-20-10-S | 가맹점찾기 > 상품권 사용처별 가맹점 검색 | 화면 |
| MGC-LGFT-10-10-40-S | 최근 검색 위치 | 화면 |
| MGC-LGFT-10-10-S | 매장검색(카테고리·지도로 찾기) | 화면 |

## 입력

- SRCH_WORD

## 출력

- SRCH_POST_REC

## 데이터 처리

### 위치 검색 조회 (TB_POST_DO_R002)

- 종류: SELECT
- 테이블: TB_POST_DO, TB_POST_SI
- 입력: SRCH_WORD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_r003.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_r003_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_POST_DO_R002.xml:10
