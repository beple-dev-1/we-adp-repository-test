# 제로페이 상품권 플랫폼 분기 (zero_gift_multi)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-20-10-S | 알림 | 화면 |
| BPY-COMN-20-30-S | 공지사항 목록 | 화면 |
| HIT-COMN-20-20-S | 공지사항 목록 | 화면 |
| MCH-COMN-40-10-S | 온라인가맹점신청 공지사항 | 화면 |

## 입력

- CHNL_CD

## 출력

- 계좌등록여부 (ACNT_REG_YN)
- 제로페이 상품권 가입여부 (ZEROPAY_GIFT_JOIN_YN)
- 회원코드 (MEMB_CD)
- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)
- CI
- 제로페이 상품권 사용자 번호 (ZEROPAY_GIFT_USER_NO)
- 판매채널코드 (SALE_CHANNEL)
- 제로페이 포인트 플랫폼 웹뷰 URL (ZPPP_WEBVIEW_URL)
- 제로페이 상품권 헤더검증값 (HEADER_AUTH)
- 제로페이 상품권 요청데이터 검증 값 (ZPPHASH)
- 성별 (GNDR)
- 생년월일 (BRT_DT)
- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- 앱코드 (APP_CD)
- 모바일상품권 호출 jsonString (NATIVE_RESULT)

## 데이터 처리

### 계좌목록조회 (TB_ACCOUNT_R001)

- 종류: SELECT
- 테이블: TB_ACCOUNT, TB_BANK, TB_ZEROPAY_BANK
- 입력: 회원코드 (MEMB_CD), DYNAMIC_0

### 제로페이 상품권 회원 상태 조회 (TB_MEMBER_R026)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 제로페이 상품권사용여부 업데이트 (TB_MEMBER_U023)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: 제로페이 상품권 가입여부 (ZEROPAY_GIFT_JOIN_YN), 제로페이 상품권 사용자 번호 (ZEROPAY_GIFT_USER_NO), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_multi.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_multi_act.jsp:19
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_ACCOUNT_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R026.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U023.xml:10
