# 요기요_가게,음식 키워드 가게 겁색 (bp_ygyo_srch_shops_r001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-YGYO-50-S | 요기요 가게 검색 | 화면 |

## 입력

- SRCH_WORD
- ORDER_SERVING_TYPE
- MAXIMUM_DELIVERY_FEE
- LAT
- LNG
- START
- LENGTH
- SERVING_TYPE
- SORT
- MINIMUM_ORDER_AMOUNT
- DELIVERY_TYPES
- SAVE_YN

## 출력

- 코드 (CODE)
- MSG
- JDATA
- HISTORY
- RELATEDKEY

## 데이터 처리

### 최근검색 등록 (TB_AFLT_SRCH_HIST_C001)

- 종류: INSERT
- 테이블: TB_AFLT_SRCH_HIST
- 입력: MENU_TYPE, 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD), SRCH_WORD

### 사용자 검색 내역 건별삭제 (TB_AFLT_SRCH_HIST_D002)

- 종류: DELETE
- 테이블: TB_AFLT_SRCH_HIST
- 입력: 검색유형 (SRCH_TYPE), 앱코드 (APP_CD), 회원코드 (MEMB_CD), MENU_TYPE, SRCH_WORD

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.bp_ygyo_srch_shops_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bpp/bp_ygyo_srch_shops_r001_act.jsp:34
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_AFLT_SRCH_HIST_D002.xml:10
