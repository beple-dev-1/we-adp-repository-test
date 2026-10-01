# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 중복검증 (ent_afltbo_join_step3_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | 화면 |

## 입력

- USER_ID
- EMAIL

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### PC가맹점어드민 사용자 조회(ID) (TB_PC_AFLT_BO_USER_R001)

- 종류: SELECT
- 테이블: TB_PC_AFLT_BO_USER
- 입력: USER_ID

### PC가맹점어드민 사용자 조회(EMAIL) (TB_PC_AFLT_BO_USER_R002)

- 종류: SELECT
- 테이블: TB_PC_AFLT_BO_USER
- 입력: USER_EMAIL

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step3_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step3_r001_act.jsp:23
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R002.xml:10
