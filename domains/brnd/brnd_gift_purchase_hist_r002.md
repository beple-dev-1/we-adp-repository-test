# 브랜드 상품권 sass 사용자 웹뷰 조회 (in 구매내역) (brnd_gift_purchase_hist_r002)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-HIST-10-20-S | 브랜드 상품권 구매내역 조회 (hist) | 화면 |

## 입력

- 브랜드상품권ID (BGC_ID)
- WEBVIEW_TYPE
- 브랜드상품권 번호 (BGC_NO)

## 출력

- 코드 (CODE)
- 메시지 (MSG)
- 제로페이 포인트 플랫폼 웹뷰 URL (ZPPP_WEBVIEW_URL)
- 모바일상품권 호출 jsonString (NATIVE_RESULT)

## 데이터 처리

### SAAS상품권사용여부 업데이트 (TB_MEMBER_U025)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: ZEROPAY_PSS_GIFT_JOIN, ZEROPAY_PSS_GIFT_USER_NO, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.brnd_gift_purchase_hist_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/brnd_gift_purchase_hist_r002_act.jsp:36
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U025.xml:10
