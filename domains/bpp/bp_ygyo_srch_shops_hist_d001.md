# 검색 기록 살제 (bp_ygyo_srch_shops_hist_d001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-50-S | 요기요 가게 검색 | 화면 |

## 입력

- 검색유형 (SRCH_TYPE)
- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)
- MENU_TYPE
- SRCH_WORD

## 출력

- (없음)

## 데이터 처리

### 사용자 검색 내역 전체삭제 (TB_AFLT_SRCH_HIST_D001)

- 종류: DELETE
- 테이블: TB_AFLT_SRCH_HIST
- 입력: MENU_TYPE, 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 사용자 검색 내역 건별삭제 (TB_AFLT_SRCH_HIST_D002)

- 종류: DELETE
- 테이블: TB_AFLT_SRCH_HIST
- 입력: 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD), MENU_TYPE, SRCH_WORD

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_srch_shops_hist_d001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_srch_shops_hist_d001_act.jsp:21
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
