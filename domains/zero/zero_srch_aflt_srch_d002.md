# 가맹점찾기 >사용자 검색 내역 건별삭제 (zero_srch_aflt_srch_d002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
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

### 사용자 검색 내역 건별삭제 (TB_AFLT_SRCH_HIST_D002)

- 종류: DELETE
- 테이블: TB_AFLT_SRCH_HIST
- 입력: 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD), MENU_TYPE, SRCH_WORD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_srch_aflt_srch_d002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_srch_aflt_srch_d002_act.jsp:30
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
