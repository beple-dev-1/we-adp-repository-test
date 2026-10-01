# 웹뷰 API - 거래승인번호 검증요청 ACTION(통합웹뷰버전) (zero_webview_password_confirm_v1_r001)

- 처리: 미확인
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-30-20-S | 확인 | 화면 |
| EXW-UWV-70-30-30-C | 회원탈퇴 | 화면 |
| EXW-UWV-70-30-40-C | 거래승인번호 확인 | 화면 |
| EXW-UWV-80-10-S | 이용해지 안내 | 화면 |
| EXW-UWV-80-20-S | 거래승인번호 입력 | 화면 |
| EXW-UWV-80-30-S | 이용해지 완료 | 화면 |

## 입력

- 이용기관ID (ORG_ID)
- DATA

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- DATA

## 데이터 처리

- (IDO 호출 없음)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_webview_password_confirm_v1_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_webview_password_confirm_v1_r001_act.jsp:26
