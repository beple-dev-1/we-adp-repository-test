# 가맹점찾기 > 사용자 검색 내역 히스토리 원장 등록 (zero_srch_aflt_srch_c001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-10-20-30-S | 브랜드상품권 상품권 검색 webview | 화면 |
| BPY-SRCH-20-10-S | 가맹점찾기 > 상품권 사용처별 가맹점 검색 | 화면 |
| MGC-LGFT-10-10-20-S | 가맹점 찾기 | 화면 |
| MGC-LGFT-10-10-40-S | 최근 검색 위치 | 화면 |
| MGC-LGFT-10-10-S | 매장검색(카테고리·지도로 찾기) | 화면 |

## 입력

- MENU_TYPE
- SRCH_TYPE
- SRCH_WORD

## 출력

- (없음)

## 데이터 처리

### 최근검색 등록 (TB_AFLT_SRCH_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFLT_SRCH_HIST
- 입력: MENU_TYPE, 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD), SRCH_WORD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_c001_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
