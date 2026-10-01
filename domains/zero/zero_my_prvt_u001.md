# MY가맹점 > 약관동의 변경 (zero_my_prvt_u001)

- 처리: 쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-MYAF-40-S | MY가맹점 > 가맹점 인증 | 화면 |
| BPY-MYAF-50-S | 매니저 인증요청 수락 | 화면 |

## 입력

- MY_AFLT_AGR_YN
- 앱코드 (APP_CD)
- 회원코드 (MEMB_CD)

## 출력

- (없음)

## 데이터 처리

### MY가맹점 개인정보수집동의여부 변경 (TB_MEMBER_APP_U006)

- 종류: UPDATE
- 테이블: TB_MEMBER_APP
- 입력: MY_AFLT_AGR_YN, 앱코드 (APP_CD), 회원코드 (MEMB_CD)

- 공통 헤더 처리(이 업무 아님): TB_APP_MNG_R001, TB_MEMBER_APP_R001

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_my_prvt_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/zero_my_prvt_u001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_APP_U006.xml:10
