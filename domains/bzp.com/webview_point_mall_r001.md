# 웹뷰 API - 일비몰(가비파트너스) 회원등록 (webview_point_mall_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-20-C | 일비포인트 몰 | EXW-UWV-70-20-C-e04 |

## 입력

- CI
- 고객명 (USER_NM)
- EMAIL
- 휴대폰번호 (MOB_NO)
- 앱코드 (APP_CD)

## 출력

- 사용자번호 (USER_NO)
- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 결제후호출한앱으로복귀할때사용 (CALLBACK_URL)

## 데이터 처리

### 앱코드로 채널코드조회(쇼핑몰) (TB_APP_CHNL_LDGR_R001)

- 종류: SELECT
- 테이블: TB_APP_CHNL_LDGR
- 입력: 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_point_mall_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bzp/com/webview_point_mall_r001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_CHNL_LDGR_R001.xml:10
