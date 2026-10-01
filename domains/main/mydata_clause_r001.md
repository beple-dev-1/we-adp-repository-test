# MY자산 사용자 인증 요청 (mydata_clause_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-COMN-10-20-10-S | 쿠콘 자산관리 이용동의 약관 | 화면 |

## 입력

- 업무구분 (BIZ_TYPE)

## 출력

- 코드 (CODE)
- 인가코드 (ACCESS_CODE)
- 마이데이터_URL (MYDATA_URL)

## 데이터 처리

### APP토큰 조회 (TB_APP_MNG_TOKEN_R001)

- 종류: SELECT
- 테이블: TB_APP_MNG_TOKEN
- 입력: 앱코드 (APP_CD), SYSTEM_ID

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- 메시지: 오류가 발생하였습니다.
  - 조건: body.isEmpty() (BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/mydata_clause_r001_act.jsp:187)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.mydata_clause_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/mydata_clause_r001_act.jsp:24
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_APP_MNG_TOKEN_R001.xml:10
