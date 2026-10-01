# 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 등록 (ent_afltbo_join_step3_c001)

- 처리: 읽기·쓰기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| HIT-MBO-30-30-S | 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 | 화면 |

## 입력

- CI
- USER_ID
- PASSWORD
- 고객명 (USER_NM)
- 휴대폰번호 (MOB_NO)
- 통신사 (TELE_CORP)
- 성별 (GNDR)
- EMAIL
- 생년월일 (BRT_DT)
- 내외국인구분 (IN_FRN_TP)
- MRKT_AGR_YN

## 출력

- 응답코드 (RES_CD)
- 응답메시지 (RES_MSG)

## 데이터 처리

### 회원가입 여부 조회(BY CI) (TB_MEMBER_R008)

- 종류: SELECT
- 테이블: TB_MEMBER
- 입력: CI

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 사용자 원장 등록 (TB_PC_AFLT_BO_USER_C001)

- 종류: INSERT
- 테이블: TB_PC_AFLT_BO_USER
- 입력: USER_ID, USER_PW, 고객명 (USER_NM), USER_MOB_NO, 통신사 (TELE_CORP), 회원코드 (MEMB_CD), 성별 (GNDR), EMAIL, 생년월일 (BRT_DT), 내외국인구분 (IN_FRN_TP), MRKT_AGR_DT

### 현대차 엔터프라이즈 PC 스마트오더 가맹점주 회원가입 사이트 등록 (TB_PC_AFLT_BO_USER_SITE_C001)

- 종류: INSERT
- 테이블: TB_PC_AFLT_BO_USER_SITE, TB_PC_AFLT_BO_SITE
- 입력: USER_ID

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.ent_afltbo_join_step3_c001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/ent/afltbo/ent_afltbo_join_step3_c001_act.jsp:28
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R008.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_C001.xml:10
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_PC_AFLT_BO_USER_SITE_C001.xml:10
