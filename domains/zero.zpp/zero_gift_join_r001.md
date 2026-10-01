# 선물함 > 모바일 상품권 회원가입 요청 API (zero_gift_join_r001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| MGC-GIFT-10-S | 선물함 > 모바일 상품권 회원가입 | 화면 |

## 입력

- CLAUSE
- 판매채널코드 (SALE_CHANNEL)

## 출력

- CODE
- MSG
- USER_NO
- IS_USER

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 제로페이 상품권사용여부 업데이트 (TB_MEMBER_U023)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: 제로페이 상품권 가입여부 (ZEROPAY_GIFT_JOIN_YN), 제로페이 상품권 사용자 번호 (ZEROPAY_GIFT_USER_NO), 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### PBO상품권사용여부 업데이트 (TB_MEMBER_U007)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: ZEROPAY_PBO_GIFT_JOIN, ZEROPAY_PBO_GIFT_USER_NO, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

### SAAS상품권사용여부 업데이트 (TB_MEMBER_U025)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: ZEROPAY_PSS_GIFT_JOIN, ZEROPAY_PSS_GIFT_USER_NO, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_gift_join_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zpp/zero_gift_join_r001_act.jsp:38
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U023.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U007.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U025.xml:10
