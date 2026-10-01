# 브랜드상품권 상품권 검색결과조회 (brnd_gift_srch_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 미확인(외부 API 호출(IDO 없음))

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-BRND-10-20-30-S | 브랜드상품권 상품권 검색 webview | 화면 |

## 입력

- KEYWORD
- 브랜드상품권ID (BGC_ID)
- KIND_TYPE
- 페이지번호 (PAGE_NO)
- PAGE_SIZE
- 최대 금액 (MAX_AMT)
- 최소 금액 (MIN_AMT)
- SORTING

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- KIND_REC
- BGC_REC
- 페이지번호 (PAGE_NO)
- IS_NEXT_PAGE

## 데이터 처리

- (IDO 호출 없음) — 외부 API 호출(IDO 없음)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_srch_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_srch_r001_act.jsp:35
