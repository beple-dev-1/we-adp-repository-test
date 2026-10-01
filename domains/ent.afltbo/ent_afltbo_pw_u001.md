# 엔터프라이즈 가맹점pc_비밀번호 변경 (ent_afltbo_pw_u001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-10-S | 엔터프라이즈 가맹점pc_가맹점주 로그인 | 화면 |

## 입력

- USER_ID
- USER_PW
- CHANGE_PW1
- CHANGE_PW2

## 출력

- 코드 (CODE)
- MSG

## 데이터 처리

### PC가맹점어드민 사용자 조회(ID) (TB_PC_AFLT_BO_USER_R001)

- 종류: SELECT
- 테이블: TB_PC_AFLT_BO_USER
- 입력: USER_ID

### PC가맹점어드민 비밀번호 내역 조회 (TB_PC_AFLT_BO_USER_PW_HIST_R001)

- 종류: SELECT
- 테이블: TB_PC_AFLT_BO_USER_PW_HIST
- 입력: USER_ID, USER_PW

### PC가맹점어드민 비밀번호 변경 (TB_PC_AFLT_BO_USER_U002)

- 종류: UPDATE
- 테이블: TB_PC_AFLT_BO_USER
- 입력: USER_PW, USER_ID

### PC가맹점어드민 비밀번호 내역 저장 (TB_PC_AFLT_BO_USER_PW_HIST_C001)

- 종류: INSERT
- 테이블: TB_PC_AFLT_BO_USER_PW_HIST
- 입력: USER_ID, USER_PW, USER_ID, EXPIRE_DTTM

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_pw_u001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_pw_u001_act.jsp:32
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_PW_HIST_R001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_U002.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_PW_HIST_C001.xml:10
