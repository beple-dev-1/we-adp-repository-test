# 거래승인번호 검증(웹뷰) (zero_pre_approve_r002)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| EXW-UWV-60-30-S | CPM/MPM 결제 | 화면 |

## 입력

- MEMB_CD
- PASSWORD_ID

## 출력

- RSPS_CD
- RSPS_MSG
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

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.zero_pre_approve_r002.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/wapi/zero_pre_approve_r002_act.jsp:33
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_U001.xml:10
