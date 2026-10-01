# 보호자 비플페이 회원여부 조회 (kid_agr_req_r001)

- 처리: 읽기
- 화면 겸함: 아니오
- 상태: 따라감

## 부르는 화면

| 화면ID | 화면 이름 | 요소 |
|---|---|---|
| BPG-PGM-30-10-10-S | PG_만 14세미만 회원가입 | BPG-PGM-30-10-10-S-e06 |
| BPY-KID-20-S | 만 14세미만 회원가입 & 가맹점 찾기 서비스 이용시 진입 화면 | BPY-KID-20-S-e09 |

## 입력

- 회원명 (MEMB_NM)
- 휴대폰번호 (MOB_NO)

## 출력

- 회원코드 (MEMB_CD)
- 회원명 (MEMB_NM)
- 생년월일 (BRT_DT)
- 휴대폰번호 (MOB_NO)

## 데이터 처리

### 회원정보조회(MOB_NO, MEMB_NM) (TB_MEMBER_R032)

- 종류: SELECT
- 테이블: TB_MEMBER, TB_MEMBER_APP
- 입력: 회원명 (MEMB_NM), 휴대폰번호 (MOB_NO)

## 실패

- (없음)

## 근거

- BIZ_ZEROPAY_ETC/xml/service/WSVC/WSVC.kid_agr_req_r001.xml:6
- BIZ_ZEROPAY/web/WEB-INF/action/jex/biz_zeropay/zero/kid_agr_req_r001_act.jsp:25
- BIZ_ZEROPAY_ETC/xml/service/IDO/IDO.TB_MEMBER_R032.xml:10
