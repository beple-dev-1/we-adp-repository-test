# 브랜드상품권 웹뷰 API 거래승인번호검증 (BRND_PWD_CHECK_R001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-BRWV-20-10-S | 브랜드상품권 이용해지 화면 | 화면 |
| EXW-BRWV-70-S | 브랜드상품권 웹뷰 API 거래승인번호 검증 | 화면 |

## 입력

- PASSWORD_ID
- MEMB_CD
- TOKEN

## 출력

- 응답코드 (RSPS_CD)
- 응답메세지 (RSPS_MSG)
- FAIL_CNT

## 데이터 처리

### 회원정보조회(MEMB_CD, APP_CD) (TB_MEMBER_R001)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 앱코드 (APP_CD), 회원코드 (MEMB_CD)

### 비밀번호 오류횟수 업데이트 (TB_MEMBER_U001)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: PWD_FAIL_CNT, TRX_PWD_FAIL_CNT, PWD_TOKEN, 회원코드 (MEMB_CD), 앱코드 (APP_CD)

- 공통 헤더 처리(이 업무 아님): TB_MEMBER_R001, TB_ACCOUNT_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.BRND_PWD_CHECK_R001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/brnd/com/BRND_PWD_CHECK_R001_act.jsp:39
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10
