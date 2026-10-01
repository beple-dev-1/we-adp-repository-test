# 기업복지 인증 및 정보 조회 (corp_user_srch_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPY-WELF-20-S | 기업복지 인증 및 정보 조회 | 화면 |

## 입력

- 검색유형 (SRCH_TYPE)
- SRCH_WORD

## 출력

- 회원명 (MEMB_NM)
- EMPL_NO
- 휴대폰번호 (MOB_NO)
- 멤버가입일자 (MEMB_REG_DTTM)
- REG_DTTM
- 가입여부 (JOIN_YN)
- 가비파트너스 일비몰 회원가입여부 (GABI_JOIN_YN)
- 가비파트너스 일비몰 회원가입일시 (GABI_JOIN_DTTM)

## 데이터 처리

### 회원정보 및 복지몰가입정보 조회 (TB_MEMBER_R040)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP, TB_MEMBER_CORP_APRV
- 입력: DYNAMIC_0

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.corp_user_srch_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/main/corp_user_srch_r001_act.jsp:27
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R040.xml:10
