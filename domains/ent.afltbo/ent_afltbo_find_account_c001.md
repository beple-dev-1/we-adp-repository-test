# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 인증번호 요청 (ent_afltbo_find_account_c001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-50-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 아이디, 비밀번호 찾기 | HIT-MBO-30-50-S-e18 |

## 입력

- MTHD_GUBUN
- USER_ID
- 휴대폰번호 (MOB_NO)
- 고객명 (USER_NM)
- REQ_URL
- 사용자 그룹 (USER_GRP)

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)
- 생년월일 (BRT_DT)

## 데이터 처리

### 가맹점주 아이디, 비밀번호 찾기 아이디 검색(USER_NM, USER_MOB_NO) (TB_PC_AFLT_BO_USER_R003)

- 종류: SELECT
- 테이블: TB_PC_AFLT_BO_USER
- 입력: 고객명 (USER_NM), USER_MOB_NO, DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_find_account_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_find_account_c001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R003.xml:10
