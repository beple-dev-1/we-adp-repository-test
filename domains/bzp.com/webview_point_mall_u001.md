# 일비몰(가비파트너스) 회원 정보 등록 (webview_point_mall_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-70-20-C | 일비포인트 몰 | 화면 |

## 입력

- 가비파트너스 일비몰 회원가입여부 (GABI_JOIN_YN)
- 가비파트너스 일비몰 회원번호 (GABI_JOIN_NO)
- 회원코드 (MEMB_CD)
- 앱코드 (APP_CD)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 가비몰 회원 가입 정보 변경 (TB_MEMBER_U009)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: GABI_JOIN_YN, 가비파트너스 일비몰 회원가입일시 (GABI_JOIN_DTTM), GABI_JOIN_NO, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.webview_point_mall_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/bzp/com/webview_point_mall_u001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U009.xml:10
